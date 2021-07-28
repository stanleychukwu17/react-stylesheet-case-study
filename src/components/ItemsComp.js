import {useEffect} from 'react'
import './items.css';

const ItemComp = () => {
    useEffect(() => {
        console.log('items selling comp now showing')
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