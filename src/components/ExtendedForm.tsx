import { Form, Formik, FormikHelpers } from "formik";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../assets/style/ExtendedForm.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { FormState, setExtendedForm } from '../store/reducers/FormSlice';
import { FirstPart } from './ExtendedFormParts/FirstPart';
import { SecondPart } from './ExtendedFormParts/SecondPart';
import { ThirdPart } from './ExtendedFormParts/ThirdPart';
import { ExtendedHeader } from './ExtendedHeader';
import { createPortal } from 'react-dom'
import { ModalWindow } from "./ModalWindow";
import { userAPI } from "../services/UserService";

export interface Values {
    nickname: string
    name: string
    sername: string
    advantages: string[]
    checkbox: number[]
    radio: string
    sex: string
    about: string
}
export interface Errors {
    nickname?: string
    name?: string
    sername?: string
    advantages?: string[]
    checkbox?: number[]
    radio?: string
    about?: string
    sex?: string
}

export const ExtendedForm: FC = () => {
    const [formCounter, setFormCounter] = useState(1)

    const formData = useAppSelector(state => ({
        nickname: state.formReducer.nickname,
        name: state.formReducer.name,
        sername: state.formReducer.sername,
        advantages: state.formReducer.advantages,
        checkbox: state.formReducer.checkbox,
        radio: `${state.formReducer.radio}`
    }))

    const contactData = useAppSelector(state => ({
        phone: state.formReducer.phone,
        email: state.formReducer.email
    }))

    const [addNewInfo, {}] = userAPI.useAddNewUserInfoMutation()

    const [showModal, setShowModal] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const sex = useAppSelector(state => state.formReducer.sex)
    const about = useAppSelector(state => state.formReducer.about)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const validation = (values: Values) => {

        const errors: Errors = {};
        if (!values.nickname) {
            errors.nickname = 'Required';
        } else if (values.nickname.length > 30) {
            errors.nickname = 'Maximum length exceeded'
        } else if (/[^\w\s]/gi.test(values.nickname)) {
            errors.nickname = 'Invalid format'
        }
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 50) {
            errors.name = 'Maximum length exceeded'
        }
        else if (
            /[^A-Za-zА-Яа-яЁё]/.test(values.name)
        ) {
            errors.name = 'Invalid format';
        }
        if (!values.sername) {
            errors.sername = 'Required';
        } else if (values.sername.length > 50) {
            errors.sername = 'Maximum length exceeded'
        }
        else if (
            /[^A-Za-zА-Яа-яЁё]/.test(values.sername)
        ) {
            errors.sername = 'Invalid format';
        }
        return errors;
    }

    const onBackClick = (values: Values) => {
        dispatch(setExtendedForm({ ...values, radio: +values.radio }))
        formCounter === 1 ? navigate('/') : setFormCounter(prev => prev - 1)
    }

    const onContinueClick = (values: Values) => {
        dispatch(setExtendedForm({ ...values, radio: +values.radio }))
        setFormCounter(prev => prev + 1)
    }

    const submit = async (values: Values, actions: FormikHelpers<Values>) => {
        const formatedValues = {...values, sex: sex, about: about, radio: +values.radio}
        await addNewInfo({...formatedValues, ...contactData} as FormState)

    }

    return (
        <main className={style.main}>
            <ExtendedHeader formCounter={formCounter} />
            {showModal && createPortal(
                <ModalWindow isSuccess={isSuccess} setShowModal={setShowModal}/>,
                document.body)}
            <Formik
                initialValues={{ ...formData, sex, about }}
                validate={validation}
                onSubmit={submit}
            >
                {({ errors, values, handleSubmit, isValid }) => (
                    <Form onSubmit={e => {
                        if (isValid) {
                            handleSubmit(e)
                            setShowModal(true)
                            setIsSuccess(true)
                        } else {
                            setShowModal(true)
                            setIsSuccess(false)
                        }
                    }}>
                        {
                            formCounter === 1 ?
                                <FirstPart sex={sex} values={values} onBackClick={onBackClick}
                                    onContinueClick={onContinueClick} /> :
                                formCounter === 2 ?
                                    <SecondPart values={values} onBackClick={onBackClick}
                                        onContinueClick={onContinueClick} /> :
                                    <ThirdPart values={values} onBackClick={onBackClick} errors={errors}
                                        aboutValue={about} />
                        }
                    </Form>
                )}
            </Formik>
        </main>
    )
}