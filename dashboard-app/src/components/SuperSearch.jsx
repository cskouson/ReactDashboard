import React, {useState} from "react";
import SearchForm from "./SearchForm";

function SuperSearch(props) {

    //react component
    return (
        <div className="super-search-box">
            <h1 className="box-heading">Super Search</h1>
            <SearchForm form_name="Google" qname="q" meth="GET" act="https://www.google.com/search" />
            <SearchForm form_name="DuckDuckGo" qname="q" method="GET" act="https://www.duckduckgo.com/" />
            <SearchForm form_name="Wikipedia" qname="search" method="GET" act="https://en.wikipedia.org/w/index.php/" />
        </div>
    );
}

export default SuperSearch;