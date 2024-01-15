// ParentComponent.js
/*
import './styles.css'; // 스타일 파일 추가
import React, { useState } from 'react';

const ParentComponent = () => {
  //const lists = ['Major Cards', 'Minor Cards'];
  const [isListOpen, setIsListOpen] = useState(false);
  const [MajorListOpen, setMajorListOpen] = useState(false);
  
  const handleButtonClick = () => {
    setIsListOpen(!isListOpen);
  };
  const MajorButtonClick = () => {
    setMajorListOpen(!MajorListOpen);
  };
  return (
    <div className='ListButton'>
        <button className="icon-button" onClick={handleButtonClick}>
           Card List
           {isListOpen && (
           <ul className='CardList'>
             <li className='ListMargin'onClick={MajorButtonClick}>Major Card
                {MajorListOpen && (
                <li className ='ListMargin'>
                  Major
                </li>)}
             </li>
             <li className='ListMargin'>Minor Card</li>
            </ul>
            )}          
        </button>
    </div>
  );
};

export default ParentComponent;
*/

// ParentComponent.js

import '../CSS/MainPage/styles.css';
import '../CSS/Cards/Major.css'; 
import React, { useState } from 'react';
import MenuComponent from './MenuComponent';

const ListComponent = () => {


  const [isListOpen, setIsListOpen] = useState(false);

  const handleButtonClick = () =>{
    setIsListOpen(!isListOpen);
    console.log(isListOpen);
  };
  return (
    <div className='ListButton'>
      <button className="icon-button" onClick={handleButtonClick}>
        Card List
      </button>
      {isListOpen && <MenuComponent/>}
    </div>
  );
};

export default ListComponent;


