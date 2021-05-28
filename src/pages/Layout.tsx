import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Header, Navigation } from '../components';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        // flex: '1 0 auto',
        minHeight: 'calc(100vh - 73px)',
    },
    children: {
        width: '100%',
        backgroundColor: theme.palette.background.default,
        padding: 24,
    },
}));

export const Layout: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Grid direction={'column'} container>
                <Grid md={12} item>
                    <Header />
                </Grid>
                <Grid md={12} item>
                    {/* <Grid container> */}
                    {/* <Grid md={2} item> */}
                    <main className={classes.main}>
                        <Navigation />
                        <section className={classes.children}>{children}</section>
                    </main>
                    {/* </Grid>
                        <Grid md={10} item> */}
                    {/* </Grid> */}
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </>
    );
};
