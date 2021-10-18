import React, { useState } from "react";
import axios from "axios";
import SidebarButton from "./SidebarButton";

function Sidebar(props) {
    //state and logic
    const [newsData, updateNews] = useState([
        { key: 1, title: "--", link: "" },
        { key: 2, title: "--", link: "" },
        { key: 3, title: "--", link: "" },
        { key: 4, title: "--", link: "" },
        { key: 5, title: "--", link: "" }
    ])

    function handleNews(newVals) { 
        updateNews(prev => {
            return [
                { key: 1, title: newVals[0].summary, link: newVals[0].link },
                { key: 2, title: newVals[1].summary, link: newVals[1].link },
                { key: 3, title: newVals[2].summary, link: newVals[2].link },
                { key: 4, title: newVals[3].summary, link: newVals[3].link },
                { key: 5, title: newVals[4].summary, link: newVals[4].link }
            ]
        })
    }

    //api call
    React.useEffect(() => {
        axios(
            {
                method: 'GET',
                url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
                params: { lang: 'en', media: 'True' },
                headers: {
                    'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
                    'x-rapidapi-key': '0bff5bf751msh8ca7443f72a2cd9p1d3968jsn812b53fee950'
                }
            }).then((resp) => {//handle response
                const data = resp.data.articles
                console.log((data))
                handleNews(data)
            }).catch((error) => { //uh oh
                console.log(error)
            })
    }, []); //end api work


    //react component
    return (
        <div className="sidebar">
            <h1 className="box-heading">News Feed</h1> <hr />
            <ul>
                {newsData.map((item, index) => {
                    return (
                        <li>
                            <a className="news-links" href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a><hr id="news-horiz-line"></hr>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

export default Sidebar;