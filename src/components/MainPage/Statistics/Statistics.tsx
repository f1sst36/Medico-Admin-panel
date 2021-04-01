import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { StatisticsBlock } from "../StatisticsBlock/StatisticsBlock";
import "./Statistics.scss";

export const Statistics: React.FC = () => {
    return (
        <div className="statistics">
            <Typography variant="h4">Пользователи</Typography>
            <Grid container>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={"sdgsgs"} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={"sdgsgs"} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={"sdgsgs"} />
                </Grid>
                <Grid md={3} item>
                    <StatisticsBlock count={123} label={"sdgsgs"} />
                </Grid>
            </Grid>
        </div>
    );
};
