import {useEffect} from 'react'
import './home.css';

const HomeComp = () => {
    useEffect(() => {
        console.log('home components now showing')
    }, [])

    return (
        <div className="main_back">Welcome to the home page</div>
    );
}
 
export default HomeComp;