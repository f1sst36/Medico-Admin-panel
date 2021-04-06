import { UnverifiedDoctorsItem } from "../UnverifiedDoctorsItem/UnverifiedDoctorsItem";

export const UnverifiedDoctorsList: React.FC = () => {
    const doctors: any = [
        {
            id: 1,
            name: "Никита",
            surname: "Назанов",
            specialties: ["Хирург", "Терапевт"],
            sent: "2021-04-06",
            isVerified: false,
        },
        {
            id: 2,
            name: "Олег",
            surname: "Бочкарев",
            specialties: ["Хирург"],
            sent: "2021-04-06",
            isVerified: false,
        },
        {
            id: 3,
            name: "Николай",
            surname: "Синичкин",
            specialties: ["Стоматолог", "Хирург"],
            sent: "2021-04-06",
            isVerified: false,
        },
    ];
    return (
        <>
            {doctors.map((doctor: any) => (
                <UnverifiedDoctorsItem
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.name}
                    surname={doctor.surname}
                    specialties={doctor.specialties}
                    sent={doctor.sent}
                    isVerified={doctor.isVerified}
                />
            ))}
        </>
    );
};
