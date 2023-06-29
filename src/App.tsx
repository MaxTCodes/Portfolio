import React from 'react';
import { Divider } from './components/Divider/index';
import { Projects, Spotify, Bio } from './components';
import "./index.css";

export default class extends React.Component {
  render() {
    return (
      <div className="px-6 max-w-2xl mx-auto my-10 md:overflow-hidden">
        {/* Welcome Message */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0 text-center pb-5 px-0">
            <h1 className="text-xl font-bold leading-7 text-gray-100 sm:truncate tracking-tight">Welcome to Dominick &ldquo;Max&rdquo; Thakur&apos;s Portfolio!</h1>
          </div>
        </div>
        {/* Bio Start */}
        <div className="md:flex md:items-center md:justify-between">
          <Bio />
        </div>
        <Divider />
        <div>
          <h1 className="font-extrabold leading-7 text-gray-100 sm:text-base sm:truncate tracking-tight text-2xl text-center">Projects: </h1>
          <Projects />
        </div>
        <Divider />
        <Spotify />
      </div>
    );
  }
}
