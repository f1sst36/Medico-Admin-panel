import "./UnverifiedDoctorsItem.scss";

interface IParams {
    id: Number;
    name: String;
    surname: String;
    specialties: Array<String>;
    sent: Date | String;
    isVerified: Boolean;
}

export const UnverifiedDoctorsItem: React.FC<IParams> = ({
    id,
    name,
    surname,
    specialties,
    sent,
    isVerified,
}) => {
    return (
        <div className="doctor-item">
            <b>{id + " "}</b>
            {name + " "}
            {surname + " "}
            {specialties + " "}
            {sent + " "}
            {isVerified ? "Подтвержден" : "Не подтвержден"}
        </div>
    );
};
