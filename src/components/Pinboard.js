import React, { useEffect, useState } from 'react';
import Newspaper from './Newspaper';
import './Pinboard.css'

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
        <line 
          x1="90" 
          y1={-220 + scrollPos * 0.17}  // Adjust line's Y coordinate based on scroll
          x2="250" 
          y2={-155 + scrollPos * 0.17}  // Adjust second line's Y coordinate
          stroke="red" 
          strokeWidth="3" 
        />
        <line 
          x1="250" 
          y1={-155 + scrollPos * 0.17}  // Adjust line's Y coordinate based on scroll
          x2="420" 
          y2={-220 + scrollPos * 0.17}  // Adjust second line's Y coordinate
          stroke="red" 
          strokeWidth="3" 
        />
        <line 
          x1="225" 
          y1={9 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="-25" 
          y2={403 + scrollPos * 0.05}  // Adjust second line's Y coordinate
          stroke="red" 
          strokeWidth="3" 
        />
        <line 
          x1="225" 
          y1={9 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="550" 
          y2={60 + scrollPos * 0.05}  // Adjust second line's Y coordinate
          stroke="red" 
          strokeWidth="3" 
        />
        <line 
          x1="420" 
          y1={10 + scrollPos * 0.21}  // Adjust line's Y coordinate based on scroll
          x2="550" 
          y2={60 + scrollPos * 0.05}  // Adjust second line's Y coordinate
          stroke="red" 
          strokeWidth="3" 
        />
      </svg>

      <Newspaper id="newspaper1" top={`${100 + scrollPos * 0.5}px`} left="7em" />
      <Newspaper id="newspaper2" top={`${275 + scrollPos * 0.5}px`} left="35em" />
      <Newspaper id="newspaper3" top={`${100 + scrollPos * 0.5}px`} left="65em" />
      <Newspaper id="newspaper4" top={`${650 + scrollPos * 0.6}px`} left="7em" />
      <Newspaper id="newspaper5" top={`${750 + scrollPos * 0.6}px`} left="30em" />
      <Newspaper id="newspaper6" top={`${650 + scrollPos * 0.6}px`} left="65em" />
      <Newspaper id="newspaper7" top={`${1300 + scrollPos * 0.55}px`} left="35em" />
      <Newspaper id="newspaper8" top={`${1200 + scrollPos * 0.55}px`} left="65em" />
      <Newspaper id="newspaper9" top={`${1200 + scrollPos * 0.55}px`} left="7em" />
    </div>
  );
}

export default Pinboard;
