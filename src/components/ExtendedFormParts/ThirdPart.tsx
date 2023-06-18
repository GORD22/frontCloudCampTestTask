import { FC, useEffect, useRef, useState } from "react";
import { Field, FormikErrors, useField } from "formik";
import cn from 'classnames'
import { Errors, Values } from "../ExtendedForm";
import style from '../../assets/style/ExtendedForm.module.scss';
import customTIStyle from '../../assets/style/CustomTextInput.module.scss'
import purpleBtn from "../../assets/style/purpleBtn.module.scss";
import tBtn from "../../assets/style/tranparentBtn.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setAbout } from "../../store/reducers/FormSlice";

interface Props {
    values: Values
    onBackClick: (values: Values) => void
    errors: FormikErrors<Errors>
    aboutValue: string
}

export const ThirdPart: FC<Props> = ({ values, onBackClick, errors, aboutValue }) => {
    const [symbolCount, setSymbolCount] = useState(0)
    const [newAbout, setNewAbout] = useState(aboutValue)
    const dispatch = useAppDispatch()

    const changeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const str = e.target.value
        setSymbolCount(str.replace(/\s/g, '').length)
        setNewAbout(str)
    }

    const onAboutSave = () => {
        dispatch(setAbout(newAbout))
    }

    useEffect(() => {
        setNewAbout(aboutValue)
    }, [aboutValue])

    return (
        <div>
            <label htmlFor={'about'} className={customTIStyle.inputLabel}>
                About
            </label>
            <div className={style.textareaWrapper}>
                <Field className={style.textarea} component={'textarea'} name={'about'} onBlur={onAboutSave}
                    onChange={changeTextarea} maxLength={200} placeholder={'Placeholder'} value={newAbout}/>
                <span className={style.symbolCount}>{symbolCount}</span>
            </div>
            <label htmlFor={'about'} className={customTIStyle.tip}>Tip</label>
            {errors.about ? (
                <div className={style.error}>{errors.about}</div>
            ) : null}
            <div className={style.btnsBlock}>
                <button type={'button'} className={cn(tBtn.blueBtn, style.main__subBtn)}
                    onClick={() => onBackClick(values)}>Назад</button>
                <button type={'submit'} className={cn(purpleBtn.purpleBtn, style.main__subBtn)}>Отправить</button>
            </div>
        </div>
    )
}