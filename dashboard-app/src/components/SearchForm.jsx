import React, {useState} from "react";

function SearchForm(props){
    //logic and state
    const [query, setQuery] = useState("");

    function queryHandler(e){
        const newVal = e.target.value;
        setQuery(newVal);
    }

    //react component
    return(
        <div>
            <form method={props.meth} action={props.act}>
                <label className="search-label" for={props.form_name}>{props.form_name}</label>
                <input 
                    className="search-inputs" 
                    type="text" 
                    name="q" 
                    placeholder="Enter query here..." 
                    value={query} 
                    onChange={queryHandler} 
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchForm;