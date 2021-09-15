import React, {useState} from "react";
import SidebarButton from "./SidebarButton";

function Sidebar(props) {
    //state and logic

    //react component
    return (
        <div className="sidebar">
            <h1 className="box-heading">SideBar</h1>
            <ul>
                <SidebarButton name="Do Something?" act="none" />
            </ul>
        </div>
    );
}

export default Sidebar;