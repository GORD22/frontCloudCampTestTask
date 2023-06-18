import { useField } from 'formik';
import React, { FC } from 'react'
import style from '../assets/style/CustomTextInput.module.scss'

interface Props {
    label?: string;
    name: string;
    placeholder: string;
    tip?: boolean
}

export const CustomTextInput: FC<Props> = ({ label, name, placeholder, tip }) => {

    const [field, meta] = useField({ name })

    return (
        <div className={style.inputWrpper}>
            {
                label &&
                <label htmlFor={name} className={style.inputLabel}>
                    {label}
                </label>
            }
            <input className={style.customInput} {...field} type={'text'} name={name} placeholder={placeholder} />
            {
                tip ?
                    <label htmlFor={name} className={style.tip}>Tip</label> :
                    undefined
            }
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    )
}