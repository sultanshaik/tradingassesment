import React from "react";
import Card from '@mui/material/Card';

const Symbol = ({symbolVaue})=>{
    return <>
        <Card className="card-style">
            <div>
                <span>Symbol</span>
                <span>{symbolVaue?.symbol}</span>
            </div>
            <div>
                <span>Description</span>
                <span>{symbolVaue?.desc}</span>
            </div>
            <div>
                <span>Symbol ID</span>
                <span>{symbolVaue?.symbolid}</span>
            </div>
            <div>
                <span>Instrument Type</span>
                <span>{symbolVaue?.intrumentType}</span>
            </div>
        </Card>
    </>
}

export default Symbol;