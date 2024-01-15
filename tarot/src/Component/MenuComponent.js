import '../CSS/MainPage/styles.css';
import '../CSS/Cards/Major.css'; 
import React, { useState } from 'react';
import CardListComponent from './CardListComponent';

const MenuComponent = () => {
  
  const [MajorListOpen, setMajorListOpen] = useState(false);
  const [isMajorClose, setMajorClose] = useState(false);
  const MajorButtonClick = (e) => {
    e.stopPropagation();
    setMajorListOpen(!MajorListOpen);
    setMajorClose(!isMajorClose)
  };
 


  return (
    <div className='icon-button'>
      <ul className='CardList'>
              <li className='ListMargin' onClick={MajorButtonClick}>
                Major Card               
              </li>
              {MajorListOpen && <CardListComponent isMajorClose={isMajorClose} setMajorClose={setMajorClose} MajorListOpen={MajorListOpen} setMajorListOpen={setMajorListOpen}/> }
              <li className='ListMargin'>Minor Card</li>
            </ul>
    </div>
  );
};

export default MenuComponent;
  