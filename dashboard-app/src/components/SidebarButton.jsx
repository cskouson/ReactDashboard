import React, {useState} from "react";

function SidebarButton(props){
    //state and logic
    const [lit, setHighlight] = useState("");
    

    //
    function handleHighlighting(){

    }
    
    
    //react component
    return(
        <div>
            <button className="sidebar-button">{props.name.toUpperCase()}</button>
        </div>
    );
}

export default SidebarButton;