import React from "react";

//* Idea: make load from API request, so I can randomize and add more than 6.

export function Projects() {
    return (
        <>
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="md:flex md:items-center md:justify-between border-r-[1px] pr-4 text-center">
                    <div className="flex-1 min-w-0">
                        <div className="mt-4 md:mt-2">
                            <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Sirius Guard</p>
                            <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">A secure futuristic speedy key-based licensing system, with detection built-in. That is still in-development.</p>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <a href="https://github.com/BoredDeveloperProjects/PlayFab-Finder" rel="noreferrer" target="_blank">
                                <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Playfab User Finder</p>
                                <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">A program that can find a player in any playfab room given a TitleId and username. Developed for Penetration Testing Purposes.</p>
                            </a>
                        </div>
                        <div className="mt-6 md:mt-10">
                            <a href="https://www.sustainableurbandesign.space/" rel="noreferrer" target="_blank">
                                <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Sustainable Urban Design</p>
                                <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">An open-source project to create a tool that can help designers consider the comprehensive effects and sustainability of their urban designs.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:items-center md:justify-between text-center h-full">
                    <div className="flex-1 min-w-0 h-full">
                        <div className="mt-4 md:mt-2">
                            <a href="https://github.com/MaxTCodes/Portfolio-Api" rel="noreferrer" target="_blank">
                                <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Portfolio API</p>
                                <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">The API that powers this magical website! Right now, it is only used for the Spotify connection. However, I have big plans for it!</p>
                            </a>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <a href="https://github.com/BoredDeveloperProjects/PlayFab-Spammer" rel="noreferrer" target="_blank">
                                <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Playfab User Generator</p>
                                <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">A program that makes many new accounts with a prefix in the username fast on a playfab instance in given a TitleId. Developed for Penetration Testing Purposes.</p>
                            </a>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <a href="https://github.com/WyvDoesDev/takeout-go" rel="noreferrer" target="_blank">
                                <p className="text-base font-bold font-base leading-7 text-gray-100 sm:text-sm sm:truncate tracking-tight md:mb-2">Takeout API Wrapper for Go</p>
                                <p className="hidden sm:block font-base leading-7 text-gray-100 sm:text-sm tracking-tight">A wrapper for the Takeout API based on the docs.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}