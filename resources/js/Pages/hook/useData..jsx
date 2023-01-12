import { useState } from "react";

const touristVillages = [
    {
        slug: "merbabu",
        name: "Taman Nasional Merbabu",
        address: "jl. Pegangsaan Timur nomor 56.",
        description: "Lorem",
        attraction: "",
        city: "",
        location: "",
    },
];
const umkm = [];
const ekraf = [];

export default function useData(type = "") {
    const [data, setData] = useState();

    if (type == "touristVillages") {
        setData(touristVillages);
    } else if (type == "umkm") {
        setData(umkm);
    } else {
        setData(ekraf);
    }

    return [data, setData];
}
