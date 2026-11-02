import type { ISelectOption } from '@components'

import type {
  TCharacterGender,
  TCharacterSpecies,
  TCharacterStatus
} from './types'

export const CHARACTER_STATUS_OPTIONS: Array<ISelectOption<TCharacterStatus>> =
  [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' }
  ]

export const CHARACTER_SPECIES_OPTIONS: Array<
  ISelectOption<TCharacterSpecies>
> = [
  { label: 'Human', value: 'human' },
  { label: 'Alien', value: 'alien' },
  { label: 'Humanoid', value: 'humanoid' },
  { label: 'Animal', value: 'animal' },
  { label: 'Robot', value: 'robot' },
  { label: 'Cronenberg', value: 'cronenberg' },
  { label: 'Disease', value: 'disease' },
  { label: 'Unknown', value: 'unknown' }
]

export const CHARACTER_GENDERS_OPTIONS: Array<ISelectOption<TCharacterGender>> =
  [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Genderless', value: 'genderless' },
    { label: 'Unknown', value: 'unknown' }
  ]
