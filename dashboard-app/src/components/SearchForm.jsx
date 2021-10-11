import React, { useState } from "react";

function SearchForm(props) {
    //logic and state
    const [query, setQuery] = useState("");

    function queryHandler(e) {
        const newVal = e.target.value;
        setQuery(newVal);
    }

    //react component
    return (
        <div>
            <form method={props.meth} action={props.act}>
                <label for={props.form_name}>{props.form_name}</label><br />
                <input id="search-inputs-inner"

                    type="text"
                    name={props.qname}
                    placeholder="Enter query here..."
                    value={query}
                    onChange={queryHandler}
                />
                <input id="submit-butt-inner" type="submit" />
            </form>
        </div>
    );
}

export default SearchForm;