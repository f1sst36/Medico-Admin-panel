import { Button as MuiButton, ButtonProps, Theme, withStyles } from '@material-ui/core';
import React from 'react';

const CustomButton = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.blue,
        color: '#fff',
        padding: '10px 36px',
        borderRadius: 8,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}))(MuiButton);

interface Params {
    children: React.ReactNode;
}

export const Button: React.FC<Params & ButtonProps> = ({ children, ...props }) => {
    return (
        <CustomButton color="primary" variant="contained" disableElevation {...props}>
            {children}
        </CustomButton>
    );
};
