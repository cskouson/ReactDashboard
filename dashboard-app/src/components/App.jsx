import React from "react";
import Sidebar from "./Sidebar";
import Weather from "./Weather";
import Crypto from "./Crypto";
import SuperSearch from "./SuperSearch";

function App() {
    //logic and state

    //primary react component and skeletal structure
    return (
        <div>
            <div className="bigbox">
                <Sidebar />
                <Weather />
                <Crypto />
                <SuperSearch />
            </div>
            {/** ******************************* */}
            <div className="footer">
                Copyright 2021
            </div>
        </div>
    )
}

export default App;