import { Typography } from "@material-ui/core";
import React from "react";

import "./StatisticsBlock.scss";

interface IParams {
    count: Number;
    label: String;
}

export const StatisticsBlock: React.FC<IParams> = ({ count, label }) => {
    return (
        <div className="statistics-block">
            <Typography align="center" variant="h2">{count}</Typography>
            <Typography align="center" variant="body2">{label}</Typography>
        </div>
    );
};
