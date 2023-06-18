import cn from 'classnames';
import {
  Form,
  Formik,
  FormikHelpers
} from 'formik';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../assets/style/InitialForm.module.scss";
import styleBtn from "../assets/style/purpleBtn.module.scss";
import { EmailInput } from './EmailInput';
import { PhoneInput } from './PhoneInput';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setInitInfo } from '../store/reducers/FormSlice';
import { InitHeader } from './InitHeader';

interface Values {
  phone: string;
  email: string;
}

interface Errors {
  phone?: string;
  email?: string;
}

export const InitialForm: FC<{}> = ({ }) => {

  const formData = useAppSelector(state => ({ email: state.formReducer.email, phone: state.formReducer.phone }))
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const validation = (values: Values) => {

    const errors: Errors = {};
    if (!values.phone) {
      errors.phone = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const submit = (values: Values, actions: FormikHelpers<Values>) => {
    dispatch(setInitInfo(values))
    actions.setSubmitting(false);
    navigate('/create')
  }

  return (
    <main className={style.main}>
      <InitHeader />
      <Formik
        initialValues={formData}
        validate={validation}
        onSubmit={submit}
      >
        {({ errors, values, handleSubmit }) => (

          <Form onSubmit={handleSubmit}>
            <PhoneInput label={'Номер телефона'} name={'phone'} placeholder={'+7 999 999-99-99'}
              type={'tel'} />

            <EmailInput label={'Email'} name={'email'} placeholder={'tim.jennings@example.com'}
              type={'email'} />
            <button type={'submit'} className={cn(styleBtn.purpleBtn, style.main__subBtn)}>Начать</button>
          </Form>
        )}
      </Formik>
    </main>
  )
}
