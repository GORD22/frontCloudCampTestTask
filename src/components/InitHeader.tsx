import React, { FC } from "react";
import style from "../assets/style/InitHeader.module.scss"
import userIcon from "../assets/img/userIcon.png"
const resume = require("../assets/resourses/resume.pdf")

export const InitHeader: FC<{}> = () => {


    return (
        <header className={style.header}>
            <img src={userIcon} alt="userIcon" className={style.userIcon}/>
            <div className={style.userInfo}>
                <h2 className={style.userName}>Никита Андреянов</h2>
                <ul className={style.navList}>
                    <li className={style.navList__item}>
                        <a href="https://t.me/G_O_R22">Telegram</a>
                    </li>
                    <li className={style.navList__item}>
                        <a type="" href="https://github.com/GORD22">GitHub</a>
                    </li>
                    <li className={style.navList__item}>
                        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
