import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import styleBtn from '../assets/style/purpleBtn.module.scss'
import style from '../assets/style/ModalWindow.module.scss'
import complite from '../assets/img/svg/complite.svg'
import err from '../assets/img/svg/error.svg'
import cross from '../assets/img/svg/cross.svg'

export const ModalWindow: FC<{
    isSuccess: boolean,
    setShowModal: (toggle: boolean) => void
}> = ({ isSuccess, setShowModal }) => {
    const navigate = useNavigate()

    return (

        <div className={style.substrate}>
            <div className={style.modal}>
                <div className={cn(style.titleWrapper, isSuccess ? '' : style.titleWrapper_isnSuccess)}>
                    <h3 className={style.modal__title}>{isSuccess ? 'Форма успешно отправлена' : 'Ошибка'}</h3>
                    {
                        isSuccess ? undefined :
                            <button className={style.titleBtn} onClick={() => setShowModal(false)}>
                                <img src={cross} alt="cross" />
                            </button>
                    }
                </div>
                <img src={isSuccess ? complite : err} alt="complite" className={style.modal__status} />
                <div className={cn(style.btnWrapper, isSuccess ? '' : style.btnWrapper_isnSuccess)}>
                    {
                        isSuccess ?
                            <button type={'button'} className={cn(styleBtn.purpleBtn, style.main__subBtn)}
                                onClick={() => {
                                    navigate('/')
                                    setShowModal(false)
                                }}>На главную</button> :
                            <button type={'button'} className={cn(styleBtn.purpleBtn, style.main__subBtn)}
                                onClick={() => setShowModal(false)}>Закрыть</button>
                    }
                </div>
            </div>
        </div>
    )
}