import React from 'react';


const CardInfo = ({ cardKey }) => {


    const data = require("../TarotInfo/Analysis/0");
    console.log("-------------------------------data------------------------------");
    console.log(data);
    const cardTitles = [
        "TheFool", "TheMagician", "TheHighPriestess", "TheEmpress", "TheEmperor",
        "TheHierophant", "TheLovers", "Chariot", "Strength", "TheHermit",
        "WheelOfFortune", "Justice", "TheHangedMan", "Death", "Temperance",
        "TheDevil", "TheTower", "TheStar", "TheMoon", "TheSun",
        "Judgement", "TheWorld"
    ];
    const cardTexts  = {
        //0
        TheFool: `${data.TheFool}`
        ,
        //1
        TheMagician: `${data.TheMagician}`
        ,
        //2
        TheHighPriestess: `${data.TheHighPriestess}`
        ,
        //3
        TheEmpress: `${data.TheEmpress}`
        ,
        //4
        TheEmperor: `${data.TheEmperor}`
        ,
        //5
        TheHierophant: `${data.TheHierophant}`
        ,
        //6
        TheLovers: `${data.TheLovers}`
        ,
        //7
        Chariot: `${data.Chariot}`
        ,
        //8
        Strength: `${data.Strength}`
        ,
        //9
        TheHermit: `${data.TheHermit}`
        ,
        //10
        WheelOfFortune: `${data.WheelOfFortune}`
        ,
        //11
        Justice: `${data.Justice}`
        ,
        //12
        TheHangedMan: `${data.TheHangedMan}`
        ,
        //13
        Death: `${data.Death}`
        ,
        //14
        Temperance: `${data.Temperance}`
        ,
        //15
        TheDevil: `${data.TheDevil}`
        ,
        //16
        TheTower: `${data.TheTower}`
        ,
        //17
        TheStar: `${data.TheStar}`
        ,
        //18
        TheMoon: `${data.TheMoon}`
        ,
        //19
        TheSun: `${data.TheSun}`
        ,
        //20
        Judgement: `${data.Judgement}`
        ,
        //21
        TheWorld: `${data.TheWorld}`
      };
      const cardName = cardTitles[cardKey];
      const cardText = cardTexts[cardName];
      console.log("-----------cardKey---------");
      console.log(cardKey);
      console.log("--------------cardName---------");
      console.log(cardName);
      console.log("--------------cardTexts---------");
      console.log(cardTexts);
      console.log("-----cardTexts[cardName]-------");
      console.log(cardTexts.cardName);
      console.log("-----cardText-------");
      console.log(cardText);
      return (
        <div> 
             <p className='info'>{cardText}</p>
        </div>
    );
    
};

export default CardInfo;