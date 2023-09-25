import { ReactElement } from 'react';
//* Idea: make load from API request, so I can randomize and add more than 6.


const Card = ({ children }: { children: ReactElement[] | ReactElement }) => {
    return (<>
        <div className="tile rounded shadow-lg bg-[#212121] p-5 transition-colors cursor-pointer hover:bg-[#303030] bg-opacity-75">
            {
                children
            }
        </div>
    </>)
}

export function Projects() {
    return (
        <>
            <div className="container m-auto grid grid-flow-col grid-cols-2 grid-rows-2 gap-x-5 gap-y-6 text-center pt-6">
                <Card>
                    <p className="text-sm sm:truncate font-bold font-base leading-7 text-gray-100 tracking-tight md:text-md md:mb-2">American Football CV Stats</p>
                    <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">An application that processes videos of High School American Football, and extracts the stats & there are more features coming.</p>
                </Card>
                <Card>
                    <a href="https://github.com/MaxTCodes/Portfolio-Api" rel="noreferrer" target="_blank">
                        <p className="text-sm sm:truncate font-bold font-base leading-7 text-gray-100 tracking-tight md:text-md md:mb-2">Portfolio API</p>
                        <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">The API that powers this magical website! Right now, it is only used for the Spotify connection. However, I have big plans for it!</p>
                    </a>
                </Card>
                <Card>
                    <a href="https://github.com/MaxTCodes/WordleWordBot" rel="noreferrer" target="_blank">
                        <p className="text-sm sm:truncate font-bold font-base leading-7 text-gray-100 tracking-tight md:text-md md:mb-2">Wordle Word Bot</p>
                        <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">Every day at midnight it would tweet out the wordle of the day. Used cron, twitter's old API.</p>
                    </a>
                </Card>
                <Card>
                    <a href="https://apply.sirius.menu" rel="noreferrer" target="_blank">
                        <p className="text-sm sm:truncate font-bold font-base leading-7 text-gray-100 tracking-tight md:text-md">Sirius Application Website</p>
                        <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">The web-based application website used to apply for support for <a href="https://sirius.menu" rel="noreferrer" target="_blank">Sirius</a>.</p>
                    </a>
                </Card>
            </div>
        </>
    )
}
