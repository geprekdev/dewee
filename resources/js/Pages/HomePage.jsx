import { Link, Head, InertiaLink } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <section className="container">
                <header className="mb-40 lg:flex lg:items-center">
                    <div className="mx-auto max-w-3xl text-center mt-[20vh]">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Desa Wisata, Ekonomi Kreatif, dan UMKM
                        </h1>
                        <div className="mt-8 w-full flex flex-wrap justify-center gap-4">
                            <div className="pt-2 relative mx-auto text-gray-600">
                                <input
                                    className="border-2  bg-white h-10 px-5 pr-16 rounded-lg text-sm  focus:border-none focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-5 mr-4"
                                >
                                    <svg
                                        className="text-gray-600 h-4 w-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 56.966 56.966"
                                        style={{
                                            enableBackground:
                                                "new 0 0 56.966 56.966",
                                        }}
                                        xmlSpace="preserve"
                                        width="512px"
                                        height="512px"
                                    >
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <h1 className="text-2xl font-semibold mb-5">
                        Teratas Minggu Ini
                    </h1>
                    <div className="flex justify-evenly">
                        <div className="max-w-[400px] hover:shadow-xl ">
                            <InertiaLink
                                href="/desawisata"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 240,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Taman Nasional Merbabu
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Magelang
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Status
                                                </p>
                                                <p className="font-medium">
                                                    Buka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InertiaLink>
                        </div>
                        <div className="max-w-[400px] hover:shadow-xl #172249]">
                            <InertiaLink
                                href="/desawisata"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 125,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Danau Toba
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Toba
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Status
                                                </p>
                                                <p className="font-medium">
                                                    Buka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InertiaLink>
                        </div>
                        <div className="max-w-[400px] hover:shadow-xl #172249]">
                            <InertiaLink
                                href="/desawisata"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 75,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Pura Ulun Danu Bratan
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Bali
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Status
                                                </p>
                                                <p className="font-medium">
                                                    Buka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InertiaLink>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h1 className="text-2xl font-semibold mb-5">
                        Produk UMKM Unggulan
                    </h1>
                    <div className="flex justify-evenly">
                        <div className="max-w-[400px] hover:shadow-xl #172249]">
                            <a
                                href="#"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://images.unsplash.com/photo-1634871572365-8bc444e6faea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 20,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Sate Ayam
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Semarang
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Jam Buka
                                                </p>
                                                <p className="font-medium">
                                                    15:00 - 24:00
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="max-w-[400px] hover:shadow-xl #172249]">
                            <a
                                href="#"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://pariwisataindonesia.id/wp-content/uploads/2020/05/Pusat-Oleh-oleh-semarang.jpg"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 125,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Oleh-oleh khas Surakarta
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Semarang
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Status
                                                </p>
                                                <p className="font-medium">
                                                    Buka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="max-w-[400px] hover:shadow-xl #172249]">
                            <a
                                href="#"
                                className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                            >
                                <img
                                    alt="Home"
                                    src="https://jejakpiknik.com/wp-content/uploads/2021/08/toko-oleh-oleh-haji-di-tangerang.jpg"
                                    className="h-56 w-full rounded-md object-cover"
                                />
                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">
                                                {">"} Rp 50,000.00
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="sr-only">Address</dt>
                                            <dd className="font-medium">
                                                Kue Tradisional
                                            </dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Kota
                                                </p>
                                                <p className="font-medium">
                                                    Bandung
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg>
                                            <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                                <p className="text-gray-500">
                                                    Status
                                                </p>
                                                <p className="font-medium">
                                                    Buka
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
