import React, {useState} from "react";
import SidebarButton from "./SidebarButton";

function Sidebar(props) {
    //state and logic

    //react component
    return (
        <div className="sidebar">
            <h1 className="box-heading">News Feed</h1>
            <ul>
                <SidebarButton name="Refresh" act="none" />
            </ul>
        </div>
    );
}

export default Sidebar;