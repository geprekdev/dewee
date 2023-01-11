import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { useState } from "react";

export default function Umkm(props) {
    const [showModal, setShowModal] = useState(false);

    const data = {
        name: "",
        address: "",
        city: "",
        latitude: 0,
        longitude: 0,
        description: "",
        images: "",
        price: 0,
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    UMKM
                </h2>
            }
        >
            <Head title="Desa Wisata" />

            <div className="py-12 min-h-screen">
                <div className="container">
                    <div className="overflow-x-auto my-5 border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Nama
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Kota
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Lokasi
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 gorup bg-white">
                                <tr className="group-odd:bg-gray-50 group">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Angkulung
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        Jawa Barat
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bg-gray-500 p-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                                />
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex gap-2">
                                        <button
                                            className="px-3 py-1 text-white bg-orange-500 rounded hover:bg-orange-600"
                                            onClick={() => setShowModal(true)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                                            onClick={() =>
                                                confirm("Data aka terhapus")
                                            }
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group-odd:bg-gray-200 group">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        Tas Anyaman
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        Jawa Timur
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bg-gray-500 p-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                                                />
                                            </svg>
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex gap-2">
                                        <button
                                            className="px-3 py-1 text-white bg-orange-500 rounded hover:bg-orange-600"
                                            onClick={() => setShowModal(true)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                                            onClick={() =>
                                                confirm("Data aka terhapus")
                                            }
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={showModal}>
                <div className="p-5 ">
                    <table>
                        <tbody className="divide-y divide-gray-200 gorup bg-white">
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="name">
                                        Nama
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <TextInput id="name" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="address">
                                        Alamat
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <TextInput id="address" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="city">
                                        Kota
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <TextInput id="city" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="description">
                                        Deskripsi
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <TextInput id="description" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="images">
                                        Gambar
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <input type="file" id="images" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <InputLabel forInput="price">
                                        Harga
                                    </InputLabel>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <TextInput id="price" />
                                </td>
                            </tr>
                            <tr className="group-odd:bg-gray-50 group">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    <button
                                        className="px-2 py-1 bg-gray-200"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Batal
                                    </button>
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <button className="px-2 py-1 bg-green-200">
                                        Simpan
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
