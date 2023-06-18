import cn from 'classnames';
import { Field, FieldArray } from "formik";
import { FC } from "react";
import { CustomTextInput } from "../CustomTextInput";
import { Values } from "../ExtendedForm";
import style from '../../assets/style/ExtendedForm.module.scss';
import purpleBtn from "../../assets/style/purpleBtn.module.scss";
import tBtn from "../../assets/style/tranparentBtn.module.scss";
import secPartStyle from "../../assets/style/SecondPart.module.scss"
import cart from "../../assets/img/svg/cart.svg"
import plus from "../../assets/img/svg/plus.svg"

interface Props {
    values: Values
    onBackClick: (values: Values) => void
    onContinueClick: (values: Values) => void
}


export const SecondPart: FC<Props> = ({ values, onBackClick, onContinueClick }) => {


    return (
        <>
            <FieldArray
                name="advantages"
                render={arrayHelpers => (
                    <div>
                        {values.advantages.map((advant, index) => (
                            <div key={index} className={secPartStyle.fieldArrayContainer} >
                                <CustomTextInput name={`advantages.${index}`}
                                    placeholder="Placeholder" />
                                <button className={secPartStyle.deleteBtn} type="button"
                                    onClick={() => arrayHelpers.remove(index)}>
                                    <img src={cart} alt="cart" />
                                </button>
                            </div>
                        ))}
                        {<button className={secPartStyle.addBtn} type="button" onClick={() => arrayHelpers.push('')}>
                            <img src={plus} alt="plus" />
                        </button>}
                    </div>
                )}
            />
            <div className={secPartStyle.clickerContainer}>
                <div id='checkbox-group'>Checkbox group</div>
                <div className={secPartStyle.clickerWrapper} role="group" aria-labelledby="checkbox-group">
                    <label>
                        <Field type="checkbox" name="checkbox" value={"1"} />
                        1
                    </label>
                    <label>
                        <Field type="checkbox" name="checkbox" value={"2"} />
                        2
                    </label>
                    <label>
                        <Field type="checkbox" name="checkbox" value={"3"} />
                        3
                    </label>
                </div>
            </div>

            <div className={secPartStyle.clickerContainer}>
                <div id="my-radio-group">Radio group</div>
                <div className={secPartStyle.clickerWrapper} role="group" aria-labelledby="my-radio-group">
                    <label>
                        <Field type="radio" name="radio" value={"1"} />
                        1
                    </label>
                    <label>
                        <Field type="radio" name="radio" value={"2"} />
                        2
                    </label>
                    <label>
                        <Field type="radio" name="radio" value={"3"} />
                        3
                    </label>
                </div>
            </div>
            <div className={style.btnsBlock}>
                <button type={'button'} className={cn(tBtn.blueBtn, style.main__subBtn)}
                    onClick={() => onBackClick(values)}>Назад</button>
                <button type={'button'} className={cn(purpleBtn.purpleBtn, style.main__subBtn)}
                    onClick={() => onContinueClick(values)}>Далее</button>
            </div>
        </>
    )
}