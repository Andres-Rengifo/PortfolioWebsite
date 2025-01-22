import React from 'react';
import project1Image from '../assets/newspaper1.png';
import project2Image from '../assets/newspaper2.png';
import project3Image from '../assets/newspaper3.png';
import project4Image from '../assets/newspaper4.png';
import project5Image from '../assets/newspaper5.png';
import project6Image from '../assets/newspaper6.png';
import project7Image from '../assets/newspaper7.png';



const imageMap = {
  newspaper1: project1Image,
  newspaper2: project2Image,
  newspaper3: project3Image,
  newspaper4: project4Image,
  newspaper5: project5Image,
  newspaper6: project6Image,
  newspaper7: project7Image,
};


function Newspaper({ id, top, left }) {
  return (
    <div className="newspaper" style={{ top, left }}>
      <img src={imageMap[id] || imageMap['default']} alt={id} />
      <div className="content">
        <h2>{`${id} Project`}</h2>
        <p>{'Details about the project.'}</p>
      </div>
    </div>
  );
}

export default Newspaper;
