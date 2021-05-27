import { UnverifiedDoctorsItem } from "../UnverifiedDoctorsItem/UnverifiedDoctorsItem";

export const UnverifiedDoctorsList: React.FC<any> = ({ doctors }) => {
    // const doctors: any = [
    //     {
    //         id: 1,
    //         name: "Никита",
    //         surname: "Назанов",
    //         sent: "2021-04-06",
    //         isVerified: false,
    //     },
    //     {
    //         id: 2,
    //         name: "Олег",
    //         surname: "Бочкарев",
    //         sent: "2021-04-06",
    //         isVerified: false,
    //     },
    //     {
    //         id: 3,
    //         name: "Николай",
    //         surname: "Синичкин",
    //         sent: "2021-04-06",
    //         isVerified: false,
    //     },
    // ];
    return (
        <>
            {doctors.map((doctor: any) => (
                <UnverifiedDoctorsItem
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.user.name}
                    surname={doctor.user.surname}
                    sent={doctor.sent}
                    isVerified={doctor.isVerified}
                />
            ))}
        </>
    );
};
