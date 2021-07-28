import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex justify-between p-5 bg-green-500 text-2xl font-bold text-white">
            <div><Link to="/">Home page</Link></div>
            <div className="flex">
                <div className="mx-5"><Link to="/user-page">User profile</Link></div>
                <div className="mx-5"><Link to="/items-page">Items we sell</Link></div>
            </div>
        </div>
    );
}

export default NavBar;