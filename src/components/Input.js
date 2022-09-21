import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "../utils/useDebounce";

import CloseIcon from '@mui/icons-material/Close';

const Input = ({suggestions, getSuggestions, setSymbolValue})=>{
    const [searchTxt, setSearchTxt]  =useState('');
    const delayedCall =  useDebounce(()=>getSuggestions(searchTxt), 200)

    useEffect(()=>{
        delayedCall();
    }, [searchTxt])

    const isAlpha = (keyCode)=>{    
    //Small Alphabets
    if(keyCode>=97 && keyCode<=122){return true;}
    //Caps Alphabets
    if(keyCode>=65 &&keyCode<=90){return true;}
    return false; 
    }

    const isSpecialInput = (keyCode) =>{
        if(keyCode==32 ||
            keyCode==13 ||
            keyCode==33 ||
            keyCode==8/*BCKSPC*/ || 
            keyCode==37/*LFT ARROW*/ ||
            keyCode==39/*RGT ARROW*/ )
                {
                    return true;
                }
    }


    const handleKeyEvents = useCallback((event)=>{
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
    })
    const handleCloseEvent = useCallback(() =>{
            setSearchTxt('')
    });
    
    return <div className="auto-complete">
        <div className="input-field">
            <input className="input-symbol" value={searchTxt} onKeyDown={handleKeyEvents} onChange={()=>{}} />
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