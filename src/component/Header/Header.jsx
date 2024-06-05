import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (

        <header>

            {/* Header  */}

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipe Calories</a>

                            </li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Recipe Calories </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <a>Recipes</a>
                        </li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-between">
                        <div>
                            <label className="input h-8 input-bordered flex items-center gap-2">
                                <input type="text" className="grow " placeholder="Search" />
                            </label>
                        </div>
                        <div>
                            <button className='text-black bg-[#0BE58A] rounded-full p-1 text-xl ml-2'> <CgProfile></CgProfile></button>

                        </div>
                    </div>
                </div>
            </div>



        </header>

    );
};

export default Header;