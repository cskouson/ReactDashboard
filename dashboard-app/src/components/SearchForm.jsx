import React, {useState} from "react";

function SearchForm(props){
    //logic and state
    const [query, setQuery] = useState("");

    function queryhandler(){

    }

    //react component
    return(
        <div>
            <form method={props.meth} action={props.act + query}>
                <label className="search-label" for={props.form_name}>{props.form_name}</label>
                <input className="search-inputs" type="text" name={props.form_name} value="Enter search here..." />
            </form>
        </div>
    );
}

export default SearchForm;