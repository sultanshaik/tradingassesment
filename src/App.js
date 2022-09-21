import React, { useState, useEffect } from "react"
import Input from "./components/Input"
import Symbol from "./components/Symbol"

import axios from "axios"



function App() {
    const [suggestionList, setSuggestionList] = useState(null);
    const [symbol, setSymbol] = useState({})

    useEffect(()=>{
        window.addEventListener('click', ()=>{setSuggestionList(null)});
        return ()=>{
            window.removeEventListener('click', ()=>{setSuggestionList(null)});
        }
    }, [])
    const getSuggestions = async (searchTxt)=>{
        if(searchTxt.trim()===''){
            setSuggestionList(null);
            return;
        }
        const {data} = await axios.get(`search/${searchTxt}`);
        const searchResponse  = data;
        const suggestionsList = searchResponse.map(suggestion=>{
            const [symbol, desc,symbolid ,intrumentType] = suggestion.split('|');
            return {
              symbol,
              desc,
              symbolid,
              intrumentType
            }
        })
        setSuggestionList(suggestionsList);
    }

    return (<div>
        <h1>Symbol Utility Tool</h1>
        <Input suggestions={suggestionList} getSuggestions={getSuggestions} setSymbolValue={(value)=>setSymbol(value)} />
        {Object.keys(symbol).length ? <Symbol symbolVaue = {symbol} />: ''}
    </div>)
}

export default App