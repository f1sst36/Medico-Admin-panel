import React from 'react';
import './TextField.scss';

interface Params {
    label?: string;
    placeholder?: string;
    fullWidth?: boolean;
    className?: string;
    type?: string;
}

export const TextField: React.FC<Params> = ({
    label = '',
    placeholder = '',
    fullWidth = false,
    className,
    type = 'text',
    ...props
}) => {
    return (
        <div className={['text-field', className].join(' ')}>
            <label className="text-field__label">{label}</label>
            <input
                className={
                    fullWidth
                        ? 'text-field__input text-field__input_full-width'
                        : 'text-field__input'
                }
                type={type}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};
