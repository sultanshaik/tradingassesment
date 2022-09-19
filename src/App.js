import React, { useState } from "react"
import Input from "./Input"
import Symbol from "./Symbol"
import mockData from './mockdata/mock.json'

function App() {

    const [suggestionList, setSuggestionList] = useState([]);
    const [symbol, setSymbol] = useState('')

    const getSuggestions = (searchTxt)=>{
        setSuggestionList(mockData.searchResponse.filter(ele=>ele.startsWith(searchTxt)));
    }

    return (<div>
        <h1>Symbol Utility Tool</h1>
        <Input suggestions={suggestionList} getSuggestions={getSuggestions} setSymbolValue={(value)=>setSymbol(value)} />
        <Symbol symbolVaue = {symbol} />
    </div>)
}

export default App