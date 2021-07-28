import {useEffect, useLayoutEffect} from 'react'

const HomeComp = () => {
    useEffect(() => {
        return () => {
            let link = document.getElementById('home_link');
            link.remove();
        }
    });

    useLayoutEffect(() => {
        const grab = document.querySelector('head');
        const link = document.createElement("link");
        const att = document.createAttribute("href");
        const rel = document.createAttribute("rel");
        const id = document.createAttribute("id");

        att.value = "http://localhost:8080/home.css";
        rel.value = "stylesheet";
        id.value = "home_link";

        link.setAttributeNode(rel);
        link.setAttributeNode(att);
        link.setAttributeNode(id);

        grab.append(link);
    }, [])

    return (
        <div className="main_back">Welcome to the home page</div>
    );
}
 
export default HomeComp;