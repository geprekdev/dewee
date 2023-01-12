import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function DetailTouristVillage() {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="py-12 min-h-screen container">
                <hr />
                <h1 className="my-3 text-3xl">Desa Wisata</h1>

                <div className="flex gap-10">
                    <div className="w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Merbabu"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-suit-diamond"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838L6.848.613z" />
                                </svg>
                                Nama
                            </h3>
                            <p className="text-gray-600">
                                Taman Nasional Merbabu
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-geo-alt"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                Alamat
                            </h3>
                            <p className="text-gray-600">
                                Suroteleng, Kec. Selo, Kabupaten Boyolali, Jawa
                                Tengah
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-card-list"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                </svg>
                                Deskripsi
                            </h3>
                            <p className="text-gray-600">
                                Gunung Merbabu telah menjadi gunung api pasif
                                yang ada di Jawa Tengah dan DIY. Banyak sekali
                                desa setempat yang memanfaatkan sebagai Desa
                                Wisata
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-list-nested"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                                Daya Tarik
                            </h3>
                            <p>
                                Gunung Merbabu terdapat beberap hal yang
                                menarik:
                            </p>
                            <ul className="flex gap-5">
                                <li className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-check-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                    Medekatkan Diri
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-check-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                    Keindahan Alam
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-check-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                    Kesunyian Alam
                                </li>
                            </ul>
                            Kita bisa menikmati keindahan alam dan melepas
                            penat, apalagi Desa Wisata disekitar Gunung Merbabu
                            sangat terjamin kualitasnya
                        </div>

                        <h3 className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-map"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                                />
                            </svg>
                            Lokasi
                        </h3>

                        <div className="mapouter mt-3">
                            <div className="gmap_canvas">
                                <iframe
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=merbabu&t=&z=9&ie=UTF8&iwloc=&output=embed"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    width={390}
                                    height={327}
                                    frameBorder={0}
                                />
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: ".mapouter{position:relative;text-align:right;height:327px;width:390px;}",
                                    }}
                                />

                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: ".gmap_canvas {overflow:hidden;background:none!important;height:327px;width:390px;}",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <h2 className="text-xl font-semibold">
                        Rekomendasi UMKM dan Ekraf Di sekitar
                    </h2>

                    <div className="flex gap-10 mt-3">
                        <div className="max-w-[300px]">
                            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                <img
                                    alt="Office"
                                    src="https://images.unsplash.com/photo-1634871572365-8bc444e6faea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
                                    "
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <a href="#">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Sate Merbabu
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Sate yang dimasak langsung di
                                            kawasan Merbabu
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                                    >
                                        Lihat lebih lanjut
                                        <span
                                            aria-hidden="true"
                                            className="block transition group-hover:translate-x-0.5"
                                        >
                                            →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[300px]">
                            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                <img
                                    alt="Office"
                                    src="https://images.tokopedia.net/img/cache/700/product-1/2020/3/17/batch-upload/batch-upload_638ef61d-af06-4dd4-aedf-1aeb79567458"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <a href="#">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Kerajinan Sandal dari Rotan
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Sandal yang dibuat dari kerajinan
                                            tangan oleh masyarakat setempat
                                            dengan menggunakan rotan
                                        </p>
                                    </a>
                                    <a
                                        href="#"
                                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                                    >
                                        Lihat lebih lanjut
                                        <span
                                            aria-hidden="true"
                                            className="block transition group-hover:translate-x-0.5"
                                        >
                                            →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
