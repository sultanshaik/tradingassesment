import React from "react";
import mockData from './mockdata/mock.json'
// const mockData = {
//     "searchResponse": [
//         "A|AGILENT TECHNOLOGIES INC COM|5830477|Equity",
//         "AAPL|APPLE INC COM|5978449|Equity",
//         "ABBV|ABBVIE INC COM|5839265|Equity",
//         "ABT|ABBOTT LABS COM|5847976|Equity",
//         "ACN|ACCENTURE PLC IRELAND SHS CLASS A|5856542|Equity",
//         "ADBE|ADOBE INC COM|5856233|Equity",
//         "ADI|ANALOG DEVICES INC COM|5739901|Equity",
//         "ADP|AUTOMATIC DATA PROCESSING INC COM|5758116|Equity",
//         "ALIZF|ALLIANZ SE NAMEN AKT VINK|5374334|Equity",
//         "ALVOF|ALVOPETRO ENERGY LTD COM NEW|11548578463|Equity"
//     ]
// }

const Symbol = ()=>{


    console.log(mockData)
    return <div>{mockData.searchResponse.map((e)=>{
        return <div>{e}</div>
    })}</div>

}

export default Symbol;