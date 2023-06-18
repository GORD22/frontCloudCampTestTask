import { useField } from "formik";
import React, { FC } from "react";
import style from "../assets/style/ContactInput.module.scss";

interface Props {
    label: string;
    type: string;
    name: string;
    placeholder: string;
}

export const PhoneInput: FC<Props> = ({ label, type, name, placeholder }) => {

    const [field, meta] = useField({ type, name })
    const PATTERN = /\D/g;

    const getInputNumbersValue = (value: string) => {
        return value.replace(PATTERN, '')
    }

    const onHandlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target

        let inputNumbersValue = getInputNumbersValue(input.value)
        let formattedInputValue = ''

        if (!inputNumbersValue) {
            return input.value = ''
        }

        if (/[0-9]/g.exec(inputNumbersValue[0])) {
            formattedInputValue = inputNumbersValue.length === 1 ? '+7' + inputNumbersValue : '+7'

            if (inputNumbersValue.length > 2) {
                formattedInputValue += ` (${inputNumbersValue.substring(1, 4)}`
            }

            if (inputNumbersValue.length >= 5) {
                formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`
            }

            if (inputNumbersValue.length >= 8) {
                formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`
            }

            if (inputNumbersValue.length >= 10) {
                formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`
            }
        }

        input.value = formattedInputValue
    }

    return (
        <div className={style.inputWrpper}>
            <label htmlFor={name} className={style.contactLabel}>
                {label}
            </label>
            <input className={style.contactInput} {...field} type={type} name={name} placeholder={placeholder} maxLength={18} 
                onInput={onHandlePhoneInput} />
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    )
}