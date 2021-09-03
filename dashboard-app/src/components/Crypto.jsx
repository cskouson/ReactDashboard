import React, { useState } from "react"
import axios from "axios"
import icx from "../logos/icx.png"
import xrp from "../logos/xrp.png"
import ada from "../logos/ada.jpg"
import matic from "../logos/matic.png"
import shib from "../logos/shib.png"
import doge from "../logos/doge.png"

function Crypto(props) {
    //state
    const [ccData, updateCC] = useState([]);

    function handleCryptoChange(coins){
        updateCC(prev => {
            return [...prev, coins]
        })
    }
    
    //get api data
    React.useEffect(() => {
        axios(
            {
                'method': 'GET',
                'url': 'https://coinpaprika1.p.rapidapi.com/tickers',
                'headers': {
                    'x-rapidapi-host': 'coinpaprika1.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_COIN_PAPRIKA_KEY
                }
            }).then((response) => {
                
                const coins = response.data;
                console.log(coins);
                for(let i = 0; i < coins.length; i++){
                    if(coins[i].name === 'Bitcoin'){
                        console.log(coins[i]);
                    }
                }

                const myCoins = [
                    {name: 'Icon', img: icx},
                    {name: 'Ripple', img: icx},
                    {name: 'Cardano', img: icx},
                    {name: 'Polygon', img: icx},
                    {name: 'Shiba Inu', img: icx},
                    {name: 'Dogecoin', img: icx},
                ]

                //update coins state
                let result = coins.filter(x => x.symbol === 'ICX' || x.symbol === 'XRP' || x.symbol === 'ADA' || x.symbol === 'MATIC' || x.symbol === 'SHIB' || x.symbol === 'DOGE')
                console.log(result)
            })
    }, [] );

    //return react component
    return (
        <div className="crypto-box">
            <h1>Crypto Box</h1>
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}//end 

export default Crypto;