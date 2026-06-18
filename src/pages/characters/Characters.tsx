import { useState } from 'react'

import { Logo } from '@assets/images'
import {
  type ISelectOption,
  Select,
  StatusIndicator,
  type TIndicatorStatus
} from '@components'

import classes from './Characters.module.css'

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
          fullWidth
          value={species}
          onChange={(value) => setSpecies(value)}
          placeholder='Species'
          options={mockOptionsSpecies}
        />
        <Select
          fullWidth
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
    </div>
  )
}

export default Characters
