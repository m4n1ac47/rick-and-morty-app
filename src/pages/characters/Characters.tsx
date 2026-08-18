import { useState } from 'react'

import { Search } from '@assets/icons'
import { Logo } from '@assets/images'
import {
  Input,
  type ISelectOption,
  Select,
  StatusIndicator,
  type TIndicatorStatus
} from '@components'

import classes from './Characters.module.scss'

const mockOptionsSpecies: Array<ISelectOption<string>> = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' }
]

const mockOptionsStatus: Array<ISelectOption<TIndicatorStatus>> = [
  { label: 'Active', value: 'active' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
]

const Characters = () => {
  const [species, setSpecies] = useState<string>()
  const [status, setStatus] = useState<TIndicatorStatus>()
  const [search, setSearch] = useState('')

  return (
    <div className={classes.page}>
      <div className={classes.logo_wrapper}>
        <Logo />
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }}
      >
        <Select
          value={species}
          onChange={(value) => setSpecies(value)}
          placeholder='Species'
          options={mockOptionsSpecies}
        />
        <Select
          value={status}
          onChange={setStatus}
          placeholder='Status'
          options={mockOptionsStatus}
          renderOption={(option) => (
            <>
              <span>{option.label}</span>{' '}
              <StatusIndicator status={option.value} />
            </>
          )}
        />
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }}
      >
        <Select
          size='small'
          value={species}
          onChange={(value) => setSpecies(value)}
          placeholder='Species'
          options={mockOptionsSpecies}
        />
        <Select
          size='small'
          value={status}
          onChange={setStatus}
          placeholder='Status'
          options={mockOptionsStatus}
          renderOption={(option) => (
            <>
              <span>{option.label}</span>{' '}
              <StatusIndicator status={option.value} />
            </>
          )}
        />
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }}
      >
        <Input
          icon={<Search />}
          placeholder='Uncontrolled'
          defaultValue='Rick Sanchez'
          onChange={(value) => setSearch(value)}
        />
        <Input
          size='small'
          icon={<Search />}
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder='Filter by name...'
        />
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start'
        }}
      >
        <Input
          icon={<Search />}
          variant='outlined'
          placeholder='Filter by name...'
          value={search}
          onChange={(value) => setSearch(value)}
        />
        <Input
          size='small'
          icon={<Search />}
          variant='outlined'
          placeholder='Uncontrolled'
          defaultValue='Some character'
        />
      </div>
    </div>
  )
}

export default Characters
