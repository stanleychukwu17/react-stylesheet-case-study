import {useEffect, useLayoutEffect} from 'react'

const ItemComp = () => {
    useEffect(() => {
        return () => {
            let link = document.getElementById('items_link');
            link.remove();
        }
    });

    useLayoutEffect(() => {
        const grab = document.querySelector('head');
        const link = document.createElement("link");
        const att = document.createAttribute("href");
        const rel = document.createAttribute("rel");
        const id = document.createAttribute("id");

        att.value = "http://localhost:8080/items.css";
        rel.value = "stylesheet";
        id.value = "items_link";

        link.setAttributeNode(rel);
        link.setAttributeNode(att);
        link.setAttributeNode(id);

        grab.append(link);
    }, [])

    return (
        <div className="main_back">
            <div><h2>The men will be back home</h2></div>
            <div>Cost: $55.75;</div>
            <div><button>buy item</button></div>
        </div>
    );
}
 
export default ItemComp;