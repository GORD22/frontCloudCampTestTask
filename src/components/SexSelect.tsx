import cn from "classnames";
import { useField } from "formik";
import { FC, useEffect, useRef, useState } from "react";
import style from '../assets/style/SexSelect.module.scss';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setSex } from "../store/reducers/FormSlice";

interface Props {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    tip?: boolean;
    sex: string
}

export const SexSelect: FC<Props> = ({ label, type, name, placeholder, tip, sex}) => {

    const [field, meta] = useField({ type, name })
    const [visible, setVisible] = useState(false)
    const sexValues = ['man', 'woman']
    const dispatch = useAppDispatch()

    const onSelect = (s: string) => {
        dispatch(setSex(s))
        setVisible(false)
    }

    return (
        <div className={style.inputWrpper}>
            <label htmlFor={name} className={style.inputLabel}>
                {label}
            </label>
            <input className={style.customInput} {...field} type={type} name={name} 
            placeholder={placeholder} readOnly value={sex}
            onClick={() => setVisible(prev => !prev)} />
            {
                tip ?
                    <label htmlFor={name} className={style.tip}>Tip</label> :
                    undefined
            }
            <ul className={cn(style.selectList, visible ? style.visible : '')}>
                {
                    sexValues.map(s =>
                        <li key={s} className={style.selectList__item} onClick={() => onSelect(s)}>{s}</li>
                    )
                }
            </ul>
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    )
}

