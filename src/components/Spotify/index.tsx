import React, { useEffect, useState } from "react";

type BasicData = {
    Link: string,
    Name: string,
};


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

const removeAllChildren = (node: HTMLElement) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

export function Spotify() {
    // state
    const [artist, SetArtist] = useState<BasicData>({Link: "", Name: "Loading..."});
    const [song, setSong] = useState<BasicData>({Link: "", Name: "Loading..."});
    const [device, setDevice] = useState(" Loading...");
    const [reloadNeeded, setReloadNeed] = useState(false);
    const [updated, setUpdated] = useState(false);
    
    // refs
    const ListeningText = React.createRef<React.ElementRef<'span'>>();
    
    // handlers
    const ClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, linkType: "artist" | "song"): void => {
        e.preventDefault();
        switch (linkType) {
            case "artist": {
                if (artist.Link != "") {
                    open(artist.Link);
                    return
                }
                break;
            }
            case "song": {
                if (song.Link != "") {
                    open(song.Link);
                    return
                }
                break;
            }

        }
    }

    const fetchData = async () => {
        if(reloadNeeded) {return location.reload();}
        // has to be https because cloudflare enforces https on all clients
        const res = await fetch("https://api.maxthakur.xyz/nowPlaying", { cache: "no-store" });
        const data: NowPlaying = await res.json() as NowPlaying;
        
        const listeningText = ListeningText.current;
        
        if (!listeningText ) { return; }

        if (!data.success) {
            if (data.message && listeningText) {
                if (data.message.toLowerCase().includes("nothing is playing!")) {
                    removeAllChildren(listeningText);
                    listeningText.innerText = "It seems Max is not listening to anything! Check back later!";
                    
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
            SetArtist(data.playingData.Artist);
            setSong(data.playingData.Song);
            setDevice(data.playingData.Device);
        }
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(async () => {
            setUpdated(!updated)
        }, (5 + Math.floor(Math.random() * 11))*100)
        return () => clearInterval(interval);
    },[updated]);

    return (
        <>
            <div className="w-full text-center px-0">
                <div className="items-center text-gray-200 leading-none lg:rounded-full flex lg:inline-flex mt-4">
                    <span className="text-sm font-medium text-center flex-auto">Currently,&nbsp;
                        <span ref={ListeningText}>I am listening to&nbsp;
                            <span className="text-sm font-bold text-center flex-auto underline hover:no-underline hover:cursor-pointer" onClick={(e) => { ClickHandler(e, "song") }}>{song.Name}</span>
                            <span className="text-sm font-regular text-center flex-auto"> by&nbsp;</span>
                            <span className="text-sm font-bold text-center flex-auto underline hover:cursor-pointer hover:no-underline " onClick={(e) => { ClickHandler(e, "artist") }}>{artist.Name}</span>
                            <span className="text-sm font-regular text-center flex-auto"> on</span>
                            <span className="text-sm font-bold text-center flex-auto">{device}</span>!
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}