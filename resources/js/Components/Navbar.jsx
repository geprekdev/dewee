export default function Navbar() {
    return (
        <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto max-w-screen-xl pt-5 px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-slate-600" href="/">
                            <img src="/Logo.png" width={80} alt="d" />
                        </a>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Site Nav" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        Desa Wisata
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="#"
                                    >
                                        Ekonomi Kreatif
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="#"
                                    >
                                        UMKM
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
