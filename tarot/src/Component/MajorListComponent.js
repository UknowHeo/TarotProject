/*
import React, { useState } from 'react';
import CardInfo from './CardInfo';

const MajorListComponent = ({ isMajorClose, setMajorClose, MajorListOpen, setMajorListOpen }) => {
    
    
    const [CardClick, setCardClick] = useState(false);
    
    const ClosdButtonClick = (e) => {
        e.stopPropagation();
        // MajorListOpen 을 추가해줘야 X표시를 눌렀을때 똑같이 변경 23.12.20 -HYH
        setMajorListOpen(!MajorListOpen);
        setMajorClose(!isMajorClose);
        /*
        console.log("++++++++++++++++++++++++++++++")
        console.log(isMajorClose)
        console.log("++++++++++++++++++++++++++++++")
        console.log(MajorListOpen)
        */
/*
    };

      /*
    const CardClicked = (e) =>
    {
        setCardClick(!CardClick);
        console.log(CardClick);
    }
    const Effect0 = () =>{
        var contain = document.querySelector('.card0');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
        
    }
    const Effect1 = () =>{
        var contain = document.querySelector('.card1');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect2 = () =>{
        var contain = document.querySelector('.card2');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
        
    }
    const Effect3 = () =>{
        var contain = document.querySelector('.card3');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect4 = () =>{
        var contain = document.querySelector('.card4');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect5 = () =>{
        var contain = document.querySelector('.card5');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect6 = () =>{
        var contain = document.querySelector('.card6');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect7 = () =>{
        var contain = document.querySelector('.card7');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect8 = () =>{
        var contain = document.querySelector('.card8');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect9 = () =>{
        var contain = document.querySelector('.card9');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect10 = () =>{
        var contain = document.querySelector('.card10');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect11 = () =>{
        var contain = document.querySelector('.card11');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect12 = () =>{
        var contain = document.querySelector('.card12');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect13 = () =>{
        var contain = document.querySelector('.card13');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect14 = () =>{
        var contain = document.querySelector('.card14');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect15 = () =>{
        var contain = document.querySelector('.card15');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect16 = () =>{
        var contain = document.querySelector('.card16');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect17 = () =>{
        var contain = document.querySelector('.card17');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }); 
    }
    const Effect18 = () =>{
        var contain = document.querySelector('.card18');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect19 = () =>{
        var contain = document.querySelector('.card19');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect20 = () =>{
        var contain = document.querySelector('.card20');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    const Effect21 = () =>{
        var contain = document.querySelector('.card21');
        contain.addEventListener('mousemove',function(e){
            var x = e.offsetX
            var y = e.offsetY
            var rotateY = -1/5 * x + 20
            var rotateX = 4/30 * y - 20
            contain.style = `transform : perspective(350px)
            rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            console.log(x,y);
        })
        contain.addEventListener('mouseleave', function () {
            // 마우스가 벗어났을 때의 처리
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
    return (
        <div className="MajorList">
            <button className="CloseButton" onClick={ClosdButtonClick}>
              X
              
            </button>
            <div className="BlueSquare">
                <span className='MajorCardTitle' onMouseMove ={Effect0}>0 The Fool
                    <div className='card0'onClick={CardClicked}></div>
                    {CardClick && <CardInfo/>}                    
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect1}>1 The Magician
                    <div className='card1'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect2}>2 The High Priestess
                    <div className='card2'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect3}>3 The Empress
                    <div className='card3'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect4}>4 The Emperor
                    <div className='card4'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect5}>5 The Hireophant
                    <div className='card5'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect6}>6 The Lovers
                    <div className='card6'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect7}>7 Chariot
                    <div className='card7'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect8}>8 Strength
                    <div className='card8'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect9}>9 The Hermit
                    <div className='card9'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect10}>10 Wheel Of Fortune
                    <div className='card10'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect11}>11 Justice
                    <div className='card11'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect12}>12 The Hanged Man
                    <div className='card12'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect13}>13 Death
                    <div className='card13'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect14}>14 Temperance
                    <div className='card14'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect15}>15 The Devil
                    <div className='card15'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect16}>16 The Tower
                    <div className='card16'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect17}>17 The Star
                    <div className='card17'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect18}>18 The Moon
                    <div className='card18'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect19}>19 The Sun
                    <div className='card19'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect20}>20 Judgement
                    <div className='card20'></div>
                </span>
                <span className='MajorCardTitle' onMouseMove ={Effect21}>21 The World
                    <div className='card21'></div>
                </span>
            </div>     
          </div>
        );
    
};

export default MajorListComponent;
*/

/*
import React, { useState } from 'react';
import CardInfo from './CardInfo';

const MajorListComponent = ({ isMajorClose, setMajorClose, MajorListOpen, setMajorListOpen }) => {
    const [clickedCards, setClickedCards] = useState(Array(22).fill(false));
    console.log(clickedCards);
    const ClosdButtonClick = (e) => {
        e.stopPropagation();
        setMajorListOpen(!MajorListOpen);
        setMajorClose(!isMajorClose);
    };

    const handleEffect = (index) => {
        const contain = document.querySelector(`.card${index}`);
        
        const handleMouseClick = () => {
            setClickedCards(prevState => {
                const newState = [...prevState];
                newState[index] = !newState[index];
                return newState;
            
            });
        };
        const handleMouseMove = (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            const rotateY = -1 / 5 * x + 20;
            const rotateX = 4 / 30 * y - 20;
            contain.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
        };

        contain.addEventListener('click', handleMouseClick);
        contain.addEventListener('mousemove', handleMouseMove);
        contain.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            
            contain.removeEventListener('mousemove', handleMouseMove);
            contain.removeEventListener('mouseleave', handleMouseLeave);
        };
    };

    const renderCard = (index, title) => (
        
        <span className='MajorCardTitle' onMouseMove={() => handleEffect(index)}>
            {index} {title}
            <div className={`card${index}`} ></div>
            {clickedCards[index] && <CardInfo cardKey={index} />}
        </span>
    );

    const cardTitles = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
        "The Hierophant", "The Lovers", "Chariot", "Strength", "The Hermit",
        "Wheel Of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
        "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
        "Judgement", "The World"
    ];
    
    return (
        <div className="MajorList">
            <button className="CloseButton" onClick={ClosdButtonClick}>
                X
            </button>
            <div className="BlueSquare">
                {cardTitles.map((title, index) => renderCard(index, title))}
            </div>
        </div>
    );
};

export default MajorListComponent;
*/
import React, { useState, useEffect } from 'react';
import CardInfo from './CardInfo';

const MajorListComponent = ({ isMajorClose, setMajorClose, MajorListOpen, setMajorListOpen }) => {
    const [clickedCards, setClickedCards] = useState(Array(22).fill(false));
    

    useEffect(() => {
        const handleEffect = (index) => {
            const contain = document.querySelector(`.card${index}`);
            
            const handleMouseClick = () => {
                setClickedCards(prevState => {
                    const newState = [...prevState];
                    console.log("---------------newState----------");
                    console.log(newState);
                    console.log("---------------newState[index]----------");
                    console.log(newState[0]);
                    newState[index] = !newState[index];
                    return newState;
                });
            };
            const handleMouseMove = (e) => {
                const x = e.offsetX;
                const y = e.offsetY;
                const rotateY = -1 / 5 * x + 20;
                const rotateX = 4 / 30 * y - 20;
                contain.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };
    
            const handleMouseLeave = () => {
                contain.style.transform = 'rotateX(0deg) rotateY(0deg)';
            };
    
            contain.addEventListener('click', handleMouseClick);
            contain.addEventListener('mousemove', handleMouseMove);
            contain.addEventListener('mouseleave', handleMouseLeave);
            
            return () => {
                // 컴포넌트가 언마운트될 때 실행되는 코드
                contain.removeEventListener('click', handleMouseClick);
                contain.removeEventListener('mousemove', handleMouseMove);
                contain.removeEventListener('mouseleave', handleMouseLeave);
            };
        };
    
        // 모든 카드에 대해 이벤트 핸들러 등록
        for (let i = 0; i < 22; i++) {
            handleEffect(i);
        }
    
        // 언마운트 시에 모든 이벤트 핸들러 제거
        return () => {
            for (let i = 0; i < 22; i++) {
                const contain = document.querySelector(`.card${i}`);
                if (contain) {
                    contain.removeEventListener('click', handleEffect);
                }
            }
        };
    }, []); // 빈 배열을 전달하여 처음 마운트될 때만 실행

    const ClosdButtonClick = (e) => {
        e.stopPropagation();
        setMajorListOpen(!MajorListOpen);
        setMajorClose(!isMajorClose);
    };

    const renderCard = (index, title) => (
        
        <span className='MajorCardTitle'>
            {index} {title}
            <div className={`card${index}`} ></div>
            {clickedCards[index] && <CardInfo cardKey={index}/>}
        </span>
    );

    const cardTitles = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
        "The Hierophant", "The Lovers", "Chariot", "Strength", "The Hermit",
        "Wheel Of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
        "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
        "Judgement", "The World"
    ];
    
    return (
        <div className="MajorList">
            <button className="CloseButton" onClick={ClosdButtonClick}>
                X
            </button>
            <div className="BlueSquare">
                {cardTitles.map((title, index) => renderCard(index, title))}
            </div>
        </div>
    );
};

export default MajorListComponent;