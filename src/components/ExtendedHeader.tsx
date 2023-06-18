import { FC, useEffect, useState } from "react";
import style from "../assets/style/ExtendedHeader.module.scss";
import cn from 'classnames'

export const ExtendedHeader: FC<{ formCounter: number }> = ({ formCounter }) => {
    const steps = [1, 2, 3]
    const [currentStep, setCurrentStep] = useState(1)

    useEffect(() => {
        if (formCounter > currentStep) {
            setCurrentStep(formCounter)
        }
    }, [formCounter])

    return (
        <header className={style.header}>
            <div className={style.progress}>
                {steps.map((s, i) => (
                    <div key={i} className={cn(style.stepWrapper, currentStep >= s ? style.active : '',
                        currentStep > s ? '' : '')}>
                        <div className={cn(style.step, currentStep >= s ? style.activeStep : '',
                            currentStep > s ? style.compliteStep : '')}>
                        </div>
                        <span>{s}</span>
                    </div>
                ))}
            </div>
        </header>
    )
}
