import React, { useEffect, useState } from 'react';
import Newspaper from './Newspaper';
import './Pinboard.css'
import redropeTexture from '../assets/redrope.png';


function Pinboard() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPos(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="pinboard">
        <svg className="thread" width="100%" height="100%" viewBox="0 0 500 500">
            <defs>
                <pattern id="redRopePattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <image x="0" y="-15" width="30" height="50" href={redropeTexture} /> 
                </pattern>
            </defs>
        <line // #2 - #1
          x1="90" 
          y1={-220 + scrollPos * 0.17}  // Adjust line's Y coordinate based on scroll
          x2="250" 
          y2={-155 + scrollPos * 0.17}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #2 - #3
          x1="250" 
          y1={-155 + scrollPos * 0.17}  // Adjust line's Y coordinate based on scroll
          x2="420" 
          y2={-220 + scrollPos * 0.17}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #2 - #4
          x1="80" 
          y1={-45 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="250" 
          y2={-155 + scrollPos * 0.17}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #5 - #4
          x1="225" 
          y1={0 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="375" 
          y2={-45 + scrollPos * 0.21}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #5 - #6
          x1="225" 
          y1={0 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="420" 
          y2={173 + scrollPos * 0.19}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #5 - #4
          x1="80" 
          y1={-45 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="225" 
          y2={0 + scrollPos * 0.21}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #6 - #-
          x1="375" 
          y1={-45 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="550" 
          y2={60 + scrollPos * 0.05}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #4 - #-
          x1="80" 
          y1={-45 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="0" 
          y2={-75 + scrollPos * 0.25}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #7 - #8
          x1="420" 
          y1={173 + scrollPos * 0.19}  // Adjust line's Y coordinate based on scroll
          x2="255" 
          y2={210 + scrollPos * 0.19}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #7 - #9
          x1="255" 
          y1={210 + scrollPos * 0.19}  // Adjust line's Y coordinate based on scroll
          x2="100" 
          y2={170 + scrollPos * 0.19}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
        <line // #9 - #-
          x1="0" 
          y1={25 + scrollPos * 0.28}  // Adjust line's Y coordinate based on scroll
          x2="100" 
          y2={170 + scrollPos * 0.19}  // Adjust second line's Y coordinate
          stroke="url(#redRopePattern)" 
          strokeWidth="3"
          strokeLinecap="round" 
        />
      </svg>

      <Newspaper id="newspaper1" top={`${100 + scrollPos * 0.5}px`} left="7em" />
      <Newspaper id="newspaper2" top={`${275 + scrollPos * 0.5}px`} left="35em" />
      <Newspaper id="newspaper3" top={`${100 + scrollPos * 0.5}px`} left="65em" />
      <Newspaper id="newspaper4" top={`${600 + scrollPos * 0.6}px`} left="4em" />
      <Newspaper id="newspaper5" top={`${730 + scrollPos * 0.6}px`} left="31em" />
      <Newspaper id="newspaper6" top={`${600 + scrollPos * 0.6}px`} left="58em" />
      <Newspaper id="newspaper7" top={`${1300 + scrollPos * 0.55}px`} left="36em" />
      <Newspaper id="newspaper8" top={`${1200 + scrollPos * 0.55}px`} left="65em" />
      <Newspaper id="newspaper9" top={`${1200 + scrollPos * 0.55}px`} left="8em" />
    </div>
  );
}

export default Pinboard;
