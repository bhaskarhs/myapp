import React from 'react'

export interface InputLableProps {
    labelName: string,
    type: string,
    inputRequired?: boolean
    inputClassName?: string,
    labelClassName?: string,
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string,
    value: string

}

const InputLable = ({ value, labelName, type, inputRequired, labelClassName, inputClassName, onchange, name }: InputLableProps) => {
    return (
        <React.Fragment>
            <label className={labelClassName}>{labelName}</label>
            <input value={value} type={type} required={inputRequired} className={inputClassName} onChange={onchange} name={name} />
        </React.Fragment>
    )
}

export default InputLable