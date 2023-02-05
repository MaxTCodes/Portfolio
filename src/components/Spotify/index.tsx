import React, { useEffect, useState } from "react";
import { constants } from '../../Constants';


export type SpotifyProps = {
    /**
     * In seconds, default is set in Constants.tsx at `30 seconds`
     */
    MinimumUpdateFrequency?: number,
    /**
     * In seconds, default is set in Constants.tsx at `3 seconds`
     */
    MaximumUpdateFrequency?: number,
    /**
     * Time between updates if the original time isn't between Min and Max
     */
    SafeUpdateTime?: number;
};


type BasicData = {
    Link: string,
    Name: string,
};

export type SpotifyState = {
    song: BasicData,
    artist: BasicData
    device: string,
    listenCurrently: boolean,
}


type NowPlaying = {
    playingData?: {
        Artist: BasicData,
        Song: BasicData,
        Device: string,
        Playing: boolean
    },
    songEndTime?: string,
    success: boolean,
    message?: string
}

const emptyState = (): SpotifyState => {return { artist: { Link: "", Name: "" }, device: "", listenCurrently: true, song: { Link: "", Name: "" } }};

const removeAllChildren = (node: HTMLElement) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

export function Spotify(props: SpotifyProps) {
    // state
    const [state, setState] = useState<SpotifyState>(emptyState());
    const [reloadNeeded, setReloadNeed] = useState(false);

    // refs
    const ListeningText = React.createRef<React.ElementRef<'span'>>();


    // constants
    const UpdateMaximum = props.MaximumUpdateFrequency ?? constants.MaximumUpdate;
    const UpdateMinimum = props.MinimumUpdateFrequency ?? constants.MinimumUpdate;
    const SafeUpdateTime = props.SafeUpdateTime ?? constants.SafeUpdate;

    // handlers
    const ClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, linkType: "artist" | "song"): void => {
        e.preventDefault();
        switch (linkType) {
            case "artist": {
                if (state.artist && state.artist.Link != "") {
                    open(state.artist.Link);
                    return
                }
                break;
            }
            case "song": {
                if (state.song && state.song.Link != "") {
                    open(state.song.Link);
                    return
                }
                break;
            }

        }
    }

    const updateSpotify = async () => {
        if(reloadNeeded) {return location.reload();}

        let updateIn = UpdateMinimum;
        // has to be https because cloudflare enforces https on all clients
        const res = await fetch("https://api.maxthakur.xyz/nowPlaying", { cache: "no-store" });
        const data: NowPlaying = await res.json() as NowPlaying;
        
        const listeningText = ListeningText.current;
        
        if (!listeningText) { setTimeout(() => {updateSpotify();}, updateIn * 1000); return; }
        
        if (!data.success) {
            if (data.message && listeningText) {
                if (data.message.toLowerCase().includes("nothing is playing!")) {
                    removeAllChildren(listeningText);
                    listeningText.innerText = "It seems Max is not listening to anything! Check back later!";
                    const UpdatedState = state;
                    UpdatedState.listenCurrently = false;
                    setState(UpdatedState);
                    setReloadNeed(true);
                }
            }
        } else {
            // if sucess == true these should be defined
            if (!data.songEndTime || !data.playingData?.Artist) {
                removeAllChildren(listeningText);
                listeningText.innerText = "There was an error, please wait.";
                setReloadNeed(true);
                return;
            }
            const secondsTillSongEnd = (Date.now() - new Date(data.songEndTime).getTime());
            if (updateIn < secondsTillSongEnd) {
                updateIn = secondsTillSongEnd;
            }
            setState({ listenCurrently: true, artist: data.playingData.Artist, song: data.playingData.Song, device: data.playingData.Device });
        }
        updateIn = (updateIn < UpdateMinimum || updateIn > UpdateMaximum ? updateIn : SafeUpdateTime);
        // setTimeout takes ms as second argument so multiply by 1000
        setTimeout(() => {updateSpotify();}, updateIn * 1000);
    }


    // [] will make sure it only runs once
    useEffect(() => {
        updateSpotify().then(() => {
            // only here so react waits
        })
    },[]);

    return (
        <>
            <div className="w-full text-center px-0">
                <div className="items-center text-gray-200 leading-none lg:rounded-full flex lg:inline-flex mt-4">
                    <span className="text-sm font-medium text-center flex-auto">Currently,&nbsp;
                        <span ref={ListeningText}>I am listening to&nbsp;
                            <span className="text-sm font-bold text-center flex-auto underline hover:no-underline hover:cursor-pointer" onClick={(e) => { ClickHandler(e, "song") }}>{state.song.Name}</span>
                            <span className="text-sm font-regular text-center flex-auto"> by&nbsp;</span>
                            <span className="text-sm font-bold text-center flex-auto underline hover:cursor-pointer hover:no-underline " onClick={(e) => { ClickHandler(e, "artist") }}>{state.artist.Name}</span>
                            <span className="text-sm font-regular text-center flex-auto"> on</span>
                            <span className="text-sm font-bold text-center flex-auto" >{state.device}</span>!
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}