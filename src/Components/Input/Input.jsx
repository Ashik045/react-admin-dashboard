/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Label } from 'recharts';
import './input.scss';

function Input(inpDetails) {
    const [focus, setFocus] = useState(false);
    const { lable, onChange, errorMsg, ...detail } = inpDetails;

    const handleBlur = () => {
        setFocus(true);
    };

    return (
        <div className="input_component">
            <Label>{lable}</Label>
            <input
                className="input_field"
                {...detail}
                onChange={onChange}
                onBlur={handleBlur}
                onFocus={() => detail.name === 'password' && setFocus(true)}
                focused={focus.toString()}
            />

            <span>{errorMsg}</span>
        </div>
    );
}

export default Input;
