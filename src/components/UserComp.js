import {useEffect} from 'react'
import './users.css';

const UserComp = () => {
    useEffect(() => {
        console.log('user comp now showing')
    }, [])
    return ( <div class="main_back">Hi stanley, this is the user page</div> );
}
 
export default UserComp;