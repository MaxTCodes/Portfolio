import React from 'react';
import { Divider } from './components/Divider/index';
import { Projects, Spotify } from './components';

export class App extends React.Component {
  render() {
    return (
        <div className="px-6 max-w-2xl mx-auto my-10 md:overflow-hidden">
          {/* Welcome Message */}
          <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0 text-center pb-5 px-0">
                  <h1 className="text-xl font-bold leading-7 text-gray-100 sm:truncate tracking-tight">Welcome to Max Thakur&apos;s Portfolio!</h1>
                </div>
            </div>
          {/* Bio Start */}
          <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0 text-base font-base leading-7 text-center">
                <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">Hello! I&apos;m a junior in high school who likes software engineering and law!</p>
                <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">I have been coding for six years. I&apos;ve worked at <a className="underline au hover:no-underline" href="https://auraside.com/" rel="noreferrer" target="_blank">Auraside</a>! I made the current MacOS app for <a className="underline mu hover:no-underline" href="https://Mantle.gg/" rel="noreferrer" target="_blank">Mantle</a>!</p>
                <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">I&apos;m currently working on the projects below, and as a Deck Supervisor at <a className="underline gu hover:no-underline" href="https://www.goldfishswimschool.com/" rel="noreferrer" target="_blank">Goldfish Swim School</a>!</p>
                <p className="mt-4 text-gray-200 sm:text-sm tracking-tight">Feel free to contact me with any questions by connecting on <a className="underline lu hover:no-underline" href="https://www.linkedin.com/in/dominick-thakur-b60130217/" rel="noreferrer" target="_blank">LinkedIn</a> or <a target="_blank" href="mailto:max@maxthakur.xyz" rel="noreferrer" className="underline hover:no-underline">send me an email</a>!</p>
                </div>
            </div>
            <Divider/>
            <div>
              <h1 className="font-extrabold leading-7 text-gray-100 sm:text-base sm:truncate tracking-tight text-2xl text-center">Projects: </h1>
              <Projects/>
            </div>
            <Divider/>
            <Spotify/>
        </div>
    );
  }
}
