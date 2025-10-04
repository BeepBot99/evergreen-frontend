export default function Navbar() {
    return (
        <div className="p-3 pb-0">
            <nav className="navbar bg-base-200 rounded-box">
                <div className="btn btn-ghost text-xl gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-primary" viewBox="0 0 14 14">
                        <path fill="currentColor" fill-rule="evenodd"
                              d="M6.888.288a.25.25 0 0 1 .223 0c1.734.864 3.303 2.424 4.154 4.202a.63.63 0 0 1-.083.678a.8.8 0 0 1-.625.285h-.512c-.14 0-.231.07-.27.144c-.038.07-.036.151.03.226c.947 1.05 1.61 2.002 2.478 3.498c.263.453-.06.943-.533 1.026a28 28 0 0 1-3.812.408c-.077.003-.133.074-.133.15v2.283a.75.75 0 0 1-1.5 0v-2.282c0-.075-.054-.145-.13-.147a28 28 0 0 1-3.926-.412c-.472-.083-.796-.573-.533-1.026c.869-1.496 1.531-2.448 2.478-3.498c.067-.075.069-.156.03-.226c-.039-.074-.13-.144-.27-.144h-.512a.8.8 0 0 1-.625-.285a.63.63 0 0 1-.083-.678c.851-1.778 2.42-3.338 4.154-4.202"
                              clip-rule="evenodd"/>
                    </svg>
                    Evergreen
                </div>
                <div className="flex-1"></div>
                <div className="dropdown mr-5">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Theme
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul className="dropdown-content bg-base-300 w-30 rounded-box z-1 p-2 shadow-2xl">
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-ghost justify-start"
                                aria-label="Forest"
                                value="forest"/>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-ghost justify-start"
                                aria-label="Night"
                                value="night"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}