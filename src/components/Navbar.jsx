import { Link } from "react-router-dom";


export default function Navbar () {
    return (
        <nav className="p-4 shadow-md bg-violet-300">
            <ul className="flex justify-end items-center gap-2 font-bold text-xl">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}