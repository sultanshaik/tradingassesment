import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./App.css"
import "./components/Symbol.css"
import "./components/Input.css"

import { createServer } from "miragejs"

createServer({
    routes() {
  
      this.get("/search/:id", (schema, request) => {
        let id = request.params.id;
        id= id!==""? id : null 
        const mockData = {
            "searchResponse": [
                "A|AGILENT TECHNOLOGIES INC COM|5830477|Equity",
                "AAPL|APPLE INC COM|5978449|Equity",
                "ABBV|ABBVIE INC COM|5839265|Equity",
                "ABT|ABBOTT LABS COM|5847976|Equity",
                "ACN|ACCENTURE PLC IRELAND SHS CLASS A|5856542|Equity",
                "ADBE|ADOBE INC COM|5856233|Equity",
                "ADI|ANALOG DEVICES INC COM|5739901|Equity",
                "ADP|AUTOMATIC DATA PROCESSING INC COM|5758116|Equity",
                "ALIZF|ALLIANZ SE NAMEN AKT VINK|5374334|Equity",
                "ALVOF|ALVOPETRO ENERGY LTD COM NEW|11548578463|Equity"
            ]
        }
        return mockData.searchResponse.filter(ele=>ele.startsWith(id))
      })
    }
  });
ReactDom.render(<App />, document.getElementById('app'))