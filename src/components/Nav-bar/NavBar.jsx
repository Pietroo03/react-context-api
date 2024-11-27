import { NavLink } from "react-router-dom"
export default function NavBar() {

    return (
        <nav className="d-flex gap-4 fs-5">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>About</NavLink>
            <NavLink to='/posts' className='nav-link'>Posts</NavLink>
            <NavLink to='/create' className='nav-link'>Add Post</NavLink>

        </nav>

    )
}