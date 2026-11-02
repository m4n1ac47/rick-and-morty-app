import { useState } from 'react'

import {
  CHARACTER_GENDERS_OPTIONS,
  CHARACTER_SPECIES_OPTIONS,
  CHARACTER_STATUS_OPTIONS,
  type TCharacterGender,
  type TCharacterSpecies,
  type TCharacterStatus
} from '@entities'

import { Search } from '@assets'
import { Input, Select } from '@components'

import classes from './FilterPanel.module.scss'

export const FilterPanel = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState<TCharacterStatus>()
  const [species, setSpecies] = useState<TCharacterSpecies>()
  const [gender, setGender] = useState<TCharacterGender>()

  return (
    <div className={classes.filterPanel}>
      <Input
        name='name'
        value={name}
        onChange={(value) => setName(value)}
        variant='outlined'
        placeholder='Filter by name...'
        icon={<Search />}
      />
      <Select
        value={species}
        onChange={(value) => setSpecies(value)}
        options={CHARACTER_SPECIES_OPTIONS}
        placeholder='Species'
      />
      <Select
        value={status}
        onChange={(value) => setStatus(value)}
        options={CHARACTER_STATUS_OPTIONS}
        placeholder='Status'
      />
      <Select
        value={gender}
        onChange={(value) => setGender(value)}
        options={CHARACTER_GENDERS_OPTIONS}
        placeholder='Gender'
      />
    </div>
  )
}
