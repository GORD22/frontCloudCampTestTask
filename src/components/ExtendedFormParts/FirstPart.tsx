import React, { FC } from "react";
import cn from 'classnames'
import { CustomTextInput } from "../CustomTextInput";
import { SexSelect } from "../SexSelect";
import style from '../../assets/style/ExtendedForm.module.scss';
import purpleBtn from "../../assets/style/purpleBtn.module.scss";
import tBtn from "../../assets/style/tranparentBtn.module.scss";
import { Values } from "../ExtendedForm";

interface Props {
    sex: string
    values: Values
    onBackClick: (values: Values) => void
    onContinueClick: (values: Values) => void
}


export const FirstPart: FC<Props> = ({sex, values, onBackClick, onContinueClick}) => {


    return (
        <>
            <CustomTextInput label="Nickname" name="nickname" placeholder="Placeholder" tip={true} />
            <CustomTextInput label="Name" name="name" placeholder="Placeholder" tip={true} />
            <CustomTextInput label="Sername" name="sername" placeholder="Placeholder" tip={true} />
            <SexSelect label="Sex" name="sex" placeholder="Не выбрано" sex={sex} type="text" tip={true} />
            <div className={style.btnsBlock}>
                <button type={'button'} className={cn(tBtn.blueBtn, style.main__subBtn)}
                    onClick={() => onBackClick(values)}>Назад</button>
                <button type={'button'} className={cn(purpleBtn.purpleBtn, style.main__subBtn)}
                    onClick={() => onContinueClick(values)}>Далее</button>
            </div >
        </>
    )
}