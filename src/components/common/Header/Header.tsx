import { Typography } from "@material-ui/core";
import React from "react";

import "./Header.scss";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <Typography variant="h5">MEDICO</Typography>
        </header>
    );
};
