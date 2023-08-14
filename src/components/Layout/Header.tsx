import  { FC, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'


const Header: FC = () => {
    const location = useLocation()
    console.log(location);

    return (
        <div className='w-full bg-white px-12 pt-8 pb-4'>
            <nav className='flex flex-row justify-between align-middle'>
                <section className='flex flex-row align-middle'>
                    <NavLink to={"/"} className={"text-sm font-light"}>
                    <img src={process.env.PUBLIC_URL +'/logo.png' } className='w-[30px] bg-blend-screen'/>
                    </NavLink>
                    <Link to={"/"} className={`${location.pathname === '/' ? "text-black font-medium" : "text-gray-500 font-normal"} px-8  text-sm`}>Dashboard </Link>
                    <Link to={"/file_upload"} className={`${location.pathname === '/file_upload' ? "text-black font-medium" : "text-gray-500 font-normal"}  text-sm`}>Process File </Link>

                </section>
                <section className='flex-2'>
                    <DropdownMenu />

                </section>
            </nav>

        </div>
    )
}


const DropdownMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center align-middle gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                >
                    {"Surya"}
                    <svg
                        className={`-mr-1 h-5 w-5 text-gray-400 ${menuOpen ? 'transform rotate-180' : ''
                            }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                
                >
                    <div className="py-1" role="none">
                        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                        <NavLink to={"/profile"} className="text-gray-700 block px-4 py-2 text-sm">Profile </NavLink>
                        <button className="text-gray-700 block px-4 py-2 text-sm">logout</button>

                    </div>
                </div>
            )}
        </div>
    );
};


export default Header