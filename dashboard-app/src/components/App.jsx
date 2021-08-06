import React from "react";

function App() {
    //logic and state

    //primary react component and skeletal structure
    return (
        <div>
            <div className="bigbox">
                <div className="sidebar">
                    <h1>SideBar</h1>
                </div>
                <div className="weather-box">
                    <h1>Weather Box</h1>
                </div>
                <div className="crypto-box">
                    <h1>Crypto Box</h1>
                </div>
                <div className="super-search-box">
                    <h1>Super Search Box</h1>
                </div>
            </div>
            {/** ******************************* */}
            <div className="footer">
                Copyright 2021
            </div>
        </div>
    )
}

export default App;