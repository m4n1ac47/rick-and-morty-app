import React, { useState } from 'react'

import type { ChangeEvent, ReactNode } from 'react'

import { Close } from '@assets/icons'
import { classNames } from '@utils'

import classes from './Input.module.css'

type TControlledInputProps = {
  value: string
  onChange: (value: string) => void
  defaultValue?: never
}
type TUncontrolledInputProps = {
  defaultValue?: string
  value?: undefined
  onChange?: (value: string) => void
}

type TInputValueProps = TControlledInputProps | TUncontrolledInputProps

interface IInputProps {
  id?: string
  name?: string
  placeholder?: string
  icon?: ReactNode
  isDisabled?: boolean
  isClearable?: boolean
  size?: 'medium' | 'small'
  variant?: 'standard' | 'outlined'
  className?: string
}

type TInputProps = IInputProps & TInputValueProps

const inputSizeClasses = {
  small: classes.input_size_small,
  medium: classes.input_size_medium
}

const inputVariantClasses = {
  outlined: classes.input_variant_outline,
  standard: classes.input_variant_standard
}

const Input: React.FC<TInputProps> = ({
  placeholder,
  id,
  name,
  className,
  value,
  defaultValue,
  icon,
  isClearable = true,
  isDisabled = false,
  onChange,
  size = 'medium',
  variant = 'standard'
}) => {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const currentValue = isControlled ? value : internalValue

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value

    if (!isControlled) {
      setInternalValue(next)
    }

    onChange?.(next)
  }

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('')
    }
    onChange?.('')
  }

  return (
    <div
      className={classNames(
        classes.input,
        inputSizeClasses[size],
        inputVariantClasses[variant],
        isDisabled && classes.input_disabled,
        isClearable && classes.input_clearable,
        className
      )}
    >
      {icon && <div className={classes.input__icon}>{icon}</div>}
      <input
        id={id}
        name={name}
        disabled={isDisabled}
        className={classNames(classes.input__field)}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
      />
      {currentValue && isClearable && (
        <button
          className={classes.input__clearButton}
          type='button'
          onClick={handleClear}
          disabled={isDisabled}
        >
          <Close />
        </button>
      )}
    </div>
  )
}

export default Input
