import '../CSS/MainPage/styles.css';
import '../CSS/Cards/Major.css'; 
import React, { useState } from 'react';
import MajorListComponent from './MajorListComponent';

const CardListComponent = ( {isMajorClose, setMajorClose, MajorListOpen, setMajorListOpen} ) => {

 
    return (
        <div>
         {isMajorClose && <MajorListComponent isMajorClose={isMajorClose} setMajorClose={setMajorClose} MajorListOpen={MajorListOpen} setMajorListOpen={setMajorListOpen} />}
         </div>
    );
};

export default CardListComponent;