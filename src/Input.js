import React, { useState } from "react";

const Input = ()=>{
    const [searchTxt, setSearchTxt]  =useState('');
    
    const isAlpha = (keyCode)=>{

   
    //Small Alphabets
    if(parseInt(keyCode)>=97 && parseInt(keyCode)<=122){return true;}
    //Caps Alphabets
    if(parseInt(keyCode)>=65 && parseInt(keyCode)<=90){return true;}
    return false; 
    }

    const isSpecialInput = (keyCode) =>{
        if(parseInt(keyCode)==32 ||
        parseInt(keyCode)==13 ||
            parseInt(keyCode)==33 ||
                keyCode==8/*BCKSPC*/ || 
                keyCode==37/*LFT ARROW*/ ||
                keyCode==39/*RGT ARROW*/ )
                {
                    return true;
                }
    }

    const handleKeyEvents = (event)=>{
        const keyCode = parseInt(event.which ? event.which : event.code);
        if(!isAlpha(keyCode) && !isSpecialInput(keyCode)){
            return;
        }
        if(isAlpha(keyCode)){
            const currentInput = event.key;
            setSearchTxt(currentValue => currentValue.slice(0,4) + currentInput.toUpperCase());
        }
        else if(keyCode===8){
            setSearchTxt(currentValue=>currentValue.slice(0,currentValue.length-1))
        }
    }
    
    return <input value={searchTxt} onKeyDown={handleKeyEvents} />
}

export default Input;