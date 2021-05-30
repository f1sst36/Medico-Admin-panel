import { Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { AuthForm } from './components';

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        height: '100vh',
        backgroundColor: theme.palette.background.default,
    },
}));

export const AuthPage = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.main} justify="center" alignItems="center" container>
            <Grid xs={11} md={6} lg={4} item>
                <AuthForm />
            </Grid>
        </Grid>
    );
};
