import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios";
import { UnverifiedDoctorsList } from "../components/DoctorsPage/UnverifiedDoctorsList/UnverifiedDoctorsList";

export const DoctorsPage: React.FC = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        if (!doctors.length) {
            axiosInstance({
                method: "get",
                url: "doctor/unverified",
            })
                .then((data) => {
                    console.log(data.data);
                    setDoctors(data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [doctors]);

    return <UnverifiedDoctorsList doctors={doctors} />;
};
