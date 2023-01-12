export default function Footer() {
    return (
        <footer aria-label="Site Footer" className="container mt-10">
            <hr />

            <div className="mx-auto max-w-md mt-10">
                <strong className="block text-center text-xl font-medium text-gray-900 sm:text-3xl">
                    Dapatkan tawaran terbaik melalui Surel
                </strong>
                <form className="mt-6">
                    <div className="relative max-w-lg">
                        <label className="sr-only" htmlFor="email">
                            {" "}
                            Email{" "}
                        </label>
                        <input
                            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:outline-none focus:border-none"
                            id="email"
                            type="email"
                            placeholder="Surel-anda@mail.co"
                        />
                        <button
                            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full   border-[#172249] px-5 py-3 text-sm font-medium text-gray-800 hover:text-white transition hover:bg-[#070c1f]"
                            type="button"
                        >
                            Langganan
                        </button>
                    </div>
                </form>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img src="/Logo.png" alt="Logo" width={50} />
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Hak Cipta © 2023 | DeWee
                    </p>
                </div>
            </div>
        </footer>
    );
}
