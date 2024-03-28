import React, { ComponentProps, useId } from 'react'
import './Input.css'


type InputProps = ComponentProps<"input">

const Input: React.FC<InputProps> = (props: InputProps) => {
  const calculatedWidth = props.width ?? 20;
  const id = useId();
  return (
    <>
      <div className="mb-4 d-flex flex-column" style={{ width: `${calculatedWidth}%` }}>
        <label htmlFor={id}>{`${props.name && props.name[0].toUpperCase()}${props.name && props.name.split("").slice(1).join("")}`}</label>
        <input name={props.name} type={props.type} placeholder={props.placeholder} className={props.className} id={id} />
      </div>
    </>
  )
}

export default Input
