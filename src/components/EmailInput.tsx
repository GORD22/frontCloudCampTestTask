import { useField } from "formik";
import React, { FC } from "react";
import style from "../assets/style/ContactInput.module.scss";

interface Props {
    label: string;
    type: string;
    name: string;
    placeholder: string;
}

export const EmailInput: FC<Props> = ({ label, type, name, placeholder }) => {

    const [field, meta] = useField({ type, name })

    return (
        <div className={style.inputWrpper}>
            <label htmlFor={name} className={style.contactLabel}>
                {label}
            </label>
            <input className={style.contactInput} {...field} type={type} name={name} placeholder={placeholder}/>
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    )
}