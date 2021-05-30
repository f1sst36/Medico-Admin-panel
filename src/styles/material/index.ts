import { createMuiTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const globalTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1400,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#5ea1f0',
            dark: '#2d85ec',
        },
        secondary: {
            main: '#2d85ec',
        },
        error: {
            main: '#e34242',
        },
        warning: {
            main: '#f9c84d',
        },
        success: {
            main: '#2ab841',
        },
        text: {
            primary: '#2d85ec',
            secondary: '#5a5f6f',
            hint: '#bdbfc6',
            disabled: '#bdbfc6',
        },
        background: {
            default: '#f6f9fc',
            dark: '#5a5f6f',
            blue: '#5ea1f0',
        },
        other: {
            main: '#eceff9',
        },
    },
    typography: {
        allVariants: {
            color: '#192035',
        },
        h1: {
            fontSize: 52,
            fontWeight: 500,
            lineHeight: '66px',
            [breakpoints.down('sm')]: {
                fontSize: 38,
                lineHeight: '49px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 24,
                lineHeight: '32px',
            },
        },
        h2: {
            fontSize: 42,
            fontWeight: 400,
            lineHeight: '56px',
            [breakpoints.down('sm')]: {
                fontSize: 32,
                lineHeight: '46px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 24,
                lineHeight: '35px',
            },
        },
        h3: {
            fontSize: 28,
            fontWeight: 500,
            lineHeight: '36px',
            [breakpoints.down('sm')]: {
                fontSize: 24,
                lineHeight: '32px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 20,
                lineHeight: '28px',
            },
        },
        h4: {
            fontSize: 20,
            fontWeight: 400,
            lineHeight: '26px',
            color: '#fff',
            [breakpoints.down('sm')]: {
                fontSize: 18,
                lineHeight: '22px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 14,
                lineHeight: '18px',
            },
        },
        h5: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '28px',
            [breakpoints.down('sm')]: {
                fontSize: 16,
                lineHeight: '24px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 14,
                lineHeight: '20px',
            },
        },
        h6: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '18px',
            [breakpoints.down('xs')]: {
                fontSize: 10,
                lineHeight: '14px',
            },
        },
        body1: {
            fontSize: 18,
            fontWeight: 300,
            lineHeight: '28px',
            [breakpoints.down('sm')]: {
                fontSize: 16,
                lineHeight: '24px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 14,
                lineHeight: '18px',
            },
        },
        body2: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: '28px',
            [breakpoints.down('sm')]: {
                fontSize: 16,
                lineHeight: '24px',
            },
            [breakpoints.down('xs')]: {
                fontSize: 14,
                lineHeight: '18px',
            },
        },
        fontFamily: 'Rubik, sans-serif',
    },
});

export const theme = createMuiTheme(
    {
        overrides: {
            MuiContainer: {
                root: {
                    paddingLeft: 20,
                    paddingRight: 20,
                },
            },
        },
    },
    globalTheme
);
