import React, { useState, useEffect } from "react"
import Input from "./components/Input"
import Symbol from "./components/Symbol"
import mockData from './mockdata/mock.json'

function App() {

    const [suggestionList, setSuggestionList] = useState([]);
    const [symbol, setSymbol] = useState({})

    useEffect(()=>{
        window.addEventListener('click', ()=>{setSuggestionList([])});
        return ()=>{
            window.removeEventListener('click', ()=>{setSuggestionList([])});
        }
    }, [])
    const getSuggestions = async (searchTxt)=>{
      
        const apiCall = Promise.resolve(mockData);
        try{
        const {searchResponse} = await apiCall;
        const suggestionsFilter = searchResponse.filter(ele=>ele.startsWith(searchTxt));
        const suggestionsList = suggestionsFilter.map(suggestion=>{
            const suggestionArray = suggestion.split('|');
            return {
                'symbol' : suggestionArray[0],
                'desc' : suggestionArray[1],
                'symbolid' : suggestionArray[2],
                'intrumentType' : suggestionArray[3]
            }
        })
        setSuggestionList(suggestionsList);
    }
    catch(e){
        console.log("Error");
    }
    }

    return (<div>
        <h1>Symbol Utility Tool</h1>
        <Input suggestions={suggestionList} getSuggestions={getSuggestions} setSymbolValue={(value)=>setSymbol(value)} />
        {Object.keys(symbol).length ? <Symbol symbolVaue = {symbol} />: ''}
    </div>)
}

export default App