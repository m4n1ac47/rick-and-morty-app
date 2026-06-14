import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import { Caret } from '@assets/icons'

import classes from './Select.module.css'

export interface IOption<T> {
  label: string
  value: T
}

interface ISelectOption<T> {
  value: T
  label: string
}

interface ISelectProps<T> {
  fullWidth?: boolean
  placeholder?: string
  options: ISelectOption<T>[]
  size?: 'small' | 'large'
  value?: T
  onChange?: (value: T) => void
  renderOption?: (option: ISelectOption<T>) => ReactNode
}

const selectSizeClasses = {
  small: classes.select_size_small,
  large: classes.select_size_large
}

const Select = <T,>({
  fullWidth,
  placeholder,
  options,
  size = 'large',
  value,
  onChange,
  renderOption
}: ISelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [value, options])

  const handleSelect = (value: T): void => {
    onChange?.(value)
    setIsOpen(false)
  }

  return (
    <div
      ref={selectRef}
      className={[
        classes.select,
        selectSizeClasses[size],
        fullWidth && classes.select_fullWidth
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type='button'
        className={classes.select__trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>
          {selectedOption ? (
            <span className={classes.select__placeholder}>
              {renderOption
                ? renderOption(selectedOption)
                : selectedOption.label}
            </span>
          ) : (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
        </span>
        <Caret
          className={`${classes.select__caret} ${isOpen ? classes.select__caret_open : ''}`}
        />
      </button>
      {isOpen && (
        <ul className={classes.select__dropdown}>
          {options.map((option) => (
            <li
              key={String(option.value)}
              className={classes.select__option}
              onClick={() => handleSelect(option.value)}
            >
              {renderOption ? (
                renderOption(option)
              ) : (
                <span>{option.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
