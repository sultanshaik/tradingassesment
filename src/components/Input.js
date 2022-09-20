import React, { useEffect, useState } from "react";
import useDebounce from "../utils/useDebounce";

import CloseIcon from '@mui/icons-material/Close';

const Input = ({suggestions, getSuggestions, setSymbolValue})=>{
    console.log(suggestions);
    const [searchTxt, setSearchTxt]  =useState('');
    const delayedCall =  useDebounce(()=>getSuggestions(searchTxt), 200)

    useEffect(()=>{
        delayedCall();
    }, [searchTxt])

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
    const handleCloseEvent = () =>{
            setSearchTxt('')
    }
    
    return <div className="auto-complete">
        <div className="input-field">
            <input className="input-symbol" value={searchTxt} onKeyDown={handleKeyEvents} type='search' onChange={()=>{}} />
            <CloseIcon onClick ={handleCloseEvent} />
        </div>
        {suggestions && suggestions.length?
            <div className="dropdown-menu">
            <ul>
                {suggestions.map((suggestion)=>{
                    return <li key={suggestion.symbolid} onClick={()=>{setSymbolValue(suggestion)}}><span>{suggestion.symbol}</span><span>{suggestion.desc}</span></li>
                })}
            </ul></div>:(suggestions? <>No results to show</>: null)
            
        }
    </div>
}

export default Input;