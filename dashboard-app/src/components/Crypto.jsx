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
    const [ccData, updateCC] = useState([
        { key: 1, symbol: "icx", name: 'Icon ICX', img: icx, price: 0.00 },
        { key: 2, symbol: "xrp", name: 'Ripple XRP', img: xrp, price: 0.00 },
        { key: 3, symbol: "ada", name: 'Cardano ADA', img: ada, price: 0.00 },
        { key: 4, symbol: "matic", name: 'Polygon MATIC', img: matic, price: 0.00 },
        { key: 5, symbol: "shib", name: 'Shiba Inu SHIB', img: shib, price: 0.00 },
        { key: 6, symbol: "doge", name: 'Dogecoin DOGE', img: doge, price: 0.00 }
    ]);

    function handleCryptoChange(newValObjs) {
        let icxP, xrpP, adaP, maticP, shibP, dogeP;
        for(let i = 0 ; i < newValObjs.length; i++){
            console.log(newValObjs[i].symbol)
            if(newValObjs[i].symbol === 'ICX') icxP = newValObjs[i].quotes.USD.price.toFixed(6)
            else if(newValObjs[i].symbol === 'XRP') xrpP = newValObjs[i].quotes.USD.price.toFixed(6)
            else if(newValObjs[i].symbol === 'ADA') adaP = newValObjs[i].quotes.USD.price.toFixed(6)
            else if(newValObjs[i].symbol === 'MATIC') maticP = newValObjs[i].quotes.USD.price.toFixed(6)
            else if(newValObjs[i].symbol === 'SHIB') shibP = newValObjs[i].quotes.USD.price.toFixed(6)
            else if(newValObjs[i].symbol === 'DOGE') dogeP = newValObjs[i].quotes.USD.price.toFixed(6)
        }
        
        updateCC(prev => {
            return [
                { key: 1, name: 'Icon ICX', img: icx, price: icxP },
                { key: 2, name: 'Ripple XRP', img: xrp, price: xrpP },
                { key: 3, name: 'Cardano ADA', img: ada, price: adaP },
                { key: 4, name: 'Polygon MATIC', img: matic, price: maticP },
                { key: 5, name: 'Shiba Inu SHIB', img: shib, price: shibP },
                { key: 6, name: 'Dogecoin DOGE', img: doge, price: dogeP }
            ]
        });
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

                const coins = response.data
                console.log(coins)

                //update coins state
                let result = coins.filter(x => x.symbol === 'ICX' || x.symbol === 'XRP' || x.symbol === 'ADA' || x.symbol === 'MATIC' || x.symbol === 'SHIB' || x.symbol === 'DOGE')
                console.log(result[0].quotes.USD.price)

                handleCryptoChange(result);

                //coinpaprika isn't great, but it's free...
            }).catch((error) => {
                console.error(error)
            })
    }, []);

    //return react component
    return (
        <div className="crypto-box">
            <h1>Crypto Box</h1>
            <tbody id="crypto-table">
                {ccData.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className="crypto-tbl-item"><img className="logos" alt="logo" src={item.img} width="40" height="40"></img></td>
                            <td className="crypto-tbl-item">{item.name}</td>
                            <td className="crypto-price">$ {item.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </div>
    );
}//end 

export default Crypto;