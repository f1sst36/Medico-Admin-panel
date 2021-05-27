import { Button } from "@material-ui/core";
import React from "react";
import "./UnverifiedDoctorsItem.scss";

interface IParams {
    id: Number;
    name: String;
    surname: String;
    sent: Date | String;
    isVerified: Boolean;
}

export const UnverifiedDoctorsItem: React.FC<IParams> = ({
    id,
    name,
    surname,
    sent,
    isVerified,
}) => {
    return (
        <div className="doctor-item">
            <div>
                <b>{id + " "}</b>
                {name + " "}
                {surname + " "}
                {/* {sent + " "} */}
                {isVerified ? "Подтвержден" : "Не подтвержден"}
            </div>

            <Button variant="outlined" color="primary">
                Подтвердить
            </Button>
        </div>
    );
};
