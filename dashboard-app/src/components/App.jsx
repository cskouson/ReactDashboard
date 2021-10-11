import React from "react";
import Sidebar from "./Sidebar";
import Weather from "./Weather";
import Crypto from "./Crypto";
import SuperSearch from "./SuperSearch";
import Footer from "./Footer";
require('dotenv').config();

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
                <Footer />
            </div>
            {/** ******************************* */}

        </div>
    )
}

export default App;