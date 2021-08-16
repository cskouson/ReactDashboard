import React, {useState} from "react";
import SearchForm from "./SearchForm";

function SuperSearch(props) {
    //state and logic





    

    //react component
    return (
        <div className="super-search-box">
            <h1>Super Search Box</h1>
            <SearchForm form_name="Google" />
            <SearchForm form_name="DuckDuckGo" />
            <SearchForm form_name="Wikipedia" />
        </div>
    );
}

export default SuperSearch;