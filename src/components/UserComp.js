import {useEffect, useLayoutEffect} from 'react'

const UserComp = () => {
    useEffect(() => {
        return () => {
            let link = document.getElementById('users_link');
            link.remove();
        }
    });

    useLayoutEffect(() => {
        const grab = document.querySelector('head');
        const link = document.createElement("link");
        const att = document.createAttribute("href");
        const rel = document.createAttribute("rel");
        const id = document.createAttribute("id");

        att.value = "http://localhost:8080/users.css";
        rel.value = "stylesheet";
        id.value = "users_link";

        link.setAttributeNode(rel);
        link.setAttributeNode(att);
        link.setAttributeNode(id);

        grab.append(link);
    }, [])


    return ( <div className="main_back">Hi stanley, this is the user page</div> );
}
 
export default UserComp;