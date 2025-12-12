import { Link } from "react-router-dom";


export default function Navbar () {
    return (
        <nav className="p-4 shadow-md bg-violet-300">
            <ul className="flex justify-end items-center gap-2 font-bold">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink to="/owner">Owner</NavLink>
                </li>
            </ul>
        </nav>
    )
}