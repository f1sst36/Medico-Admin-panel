import { Typography } from '@material-ui/core';
import React from 'react';
import { Button, TextField } from '../../../../components';

import './AuthForm.scss';

export const AuthForm = () => {
    return (
        <div className="auth-form">
            <div className="auth-form__header">
                <div className="auth-form__header__label">
                    <Typography variant="h4">Админ-панель</Typography>
                </div>
            </div>
            <div className="auth-form__body">
                <TextField className="auth-form__body__text-field" placeholder="Логин" fullWidth />
                <TextField
                    className="auth-form__body__text-field"
                    placeholder="Пароль"
                    type="password"
                    fullWidth
                />
                <Button className="auth-form__body__button" fullWidth>
                    Войти
                </Button>
            </div>
        </div>
    );
};
