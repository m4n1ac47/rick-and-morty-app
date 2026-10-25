import React from 'react'

import type { ISelectOption, TIndicatorStatus } from '@components'
import { Link } from 'react-router'

import { CheckMark, Close, Edit } from '@assets/icons'
import img from '@assets/images/rick-image.jpg'
import { Input, Select, StatusIndicator } from '@components'
import { classNames } from '@utils'

import './CharacterCard.scss'

export interface ICharacterCard {
  id: string | number
  name: string
  gender: string
  species: string
  location: string
  status: TIndicatorStatus
}

export interface ICharacterCardProps {
  item: ICharacterCard
  onChange?: (item: ICharacterCard) => void
}

const characterStatusOptions: Array<ISelectOption<TIndicatorStatus>> = [
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
]

const CharacterCard = ({
  item: initialItem,
  onChange
}: ICharacterCardProps) => {
  const [isEdit, setIsEdit] = React.useState(false)
  const [item, setItem] = React.useState(initialItem)

  const currentCharacterStatusOption =
    characterStatusOptions.find(
      (character) => character.value === item?.status
    ) || characterStatusOptions[2]

  const handleChangeName = (name: string) =>
    setItem((prevItem) => ({ ...prevItem, name }))
  const handleChangeLocation = (location: string) =>
    setItem((prevItem) => ({ ...prevItem, location }))
  const handleChangeStatus = (status: TIndicatorStatus) =>
    setItem((prevItem) => ({ ...prevItem, status }))

  const onSaveChanges = () => {
    setIsEdit(false)
    onChange?.(item)
  }

  const onDiscardChanges = () => {
    setItem(initialItem)
    setIsEdit(false)
  }

  return (
    <div
      className={classNames(
        'character-card',
        isEdit && 'character-card--editing'
      )}
    >
      <img
        className='character-card__image'
        src={img}
        alt='image'
      />
      <div className='character-card__info'>
        <div className='character-card__header'>
          {isEdit ? (
            <Input
              value={item.name}
              onChange={handleChangeName}
            />
          ) : (
            <Link
              className='character-card__name'
              to={`/characters/${item.id}`}
            >
              {item.name}
            </Link>
          )}
          <div className='character-card__actions'>
            {isEdit ? (
              <>
                <button
                  className='character-card__action-button'
                  onClick={onDiscardChanges}
                >
                  <Close className='character-card__icon' />
                </button>
                <button
                  className='character-card__action-button'
                  onClick={onSaveChanges}
                >
                  <CheckMark className='character-card__icon' />
                </button>
              </>
            ) : (
              <button
                className='character-card__action-button'
                onClick={() => setIsEdit(true)}
              >
                <Edit className='character-card__icon' />
              </button>
            )}
          </div>
        </div>
        <div className='character-card__options'>
          <div className='character-card__option'>
            <div className='character-card__option-title'>Gender</div>
            <span className='character-card__option-value'>{item.gender}</span>
          </div>
          <div className='character-card__option'>
            <div className='character-card__option-title'>Species</div>
            <span className='character-card__option-value'>{item.species}</span>
          </div>
          <div className='character-card__option'>
            <div className='character-card__option-title'>Location</div>
            {isEdit ? (
              <Input
                size='small'
                value={item.location}
                onChange={handleChangeLocation}
              />
            ) : (
              <span className='character-card__option-value'>
                {item.location}
              </span>
            )}
          </div>
          <div className='character-card__option'>
            <div className='character-card__option-title'>Status</div>
            {isEdit ? (
              <Select
                size='small'
                value={item.status}
                onChange={handleChangeStatus}
                options={characterStatusOptions}
                renderOption={(option) => (
                  <>
                    <span>{option.label}</span>{' '}
                    <StatusIndicator status={option.value} />
                  </>
                )}
              />
            ) : (
              <div className='character-card__status'>
                <span className='character-card__option-value'>
                  {currentCharacterStatusOption.label}
                </span>
                <StatusIndicator status={item.status} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
