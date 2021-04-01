import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Header, Navigation } from "../components";

const useStyles = makeStyles((theme) => ({
    children: {
        backgroundColor: theme.palette.background.default,
    },
}));

export const Layout: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Grid direction={"column"} container>
                <Grid md={12} item>
                    <Header />
                </Grid>
                <Grid md={12} item>
                    <Grid container>
                        <Grid md={2} item>
                            <Navigation />
                        </Grid>
                        <Grid md={10} item>
                            <main className={classes.children}>{children}</main>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
