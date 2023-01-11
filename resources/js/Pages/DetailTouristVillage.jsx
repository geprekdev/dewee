import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function DetailTouristVillage() {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="py-12 min-h-screen container">
                <div className="flex gap-10">
                    <div className="w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Bromo"
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold">Nama</h3>
                            <p className="text-gray-600">
                                Taman Nasional Merbabu
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold">Alamat</h3>
                            <p className="text-gray-600">
                                Suroteleng, Kec. Selo, Kabupaten Boyolali, Jawa
                                Tengah
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold">Deskripsi</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Perferendis debitis inventore
                                temporibus? Doloremque, quod repudiandae! Qui
                                ullam rem nihil. Voluptates obcaecati cum
                                distinctio nisi doloremque natus fugit?
                                Possimus, maiores ipsum!
                            </p>
                        </div>

                        <div className="mb-5 border-b">
                            <h3 className="text-lg font-semibold">
                                Daya Tarik
                            </h3>
                            <ul>
                                <li>- Medekatkan Diri</li>
                                <li>- Keindahan Alam</li>
                                <li>- Kesunyian Alam</li>
                            </ul>
                        </div>

                        <button className="px-2 py-1 bg-slate-300 rounded-sm hover:bg-slate-400">
                            Lokasi
                        </button>
                    </div>
                </div>

                <div className="mt-14">
                    <h2 className="text-xl font-semibold">
                        Rekomendasi UMKM dan Ekraf
                    </h2>

                    <div className="flex gap-10">
                        <div className="max-w-[300px]">
                            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                                <img
                                    alt="Office"
                                    src="https://images.unsplash.com/photo-1634871572365-8bc444e6faea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <a href="#">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Satae
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Animi,
                                            consequuntur
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
                                    src="https://images.unsplash.com/photo-1634871572365-8bc444e6faea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-4 sm:p-6">
                                    <a href="#">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Satae
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Animi,
                                            consequuntur
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
        </>
    );
}
