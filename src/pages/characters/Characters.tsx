import { LogoImg } from '@assets'
import { CharacterCard, FilterPanel, type ICharacterCard } from '@widgets'

import classes from './Characters.module.scss'

const charactersMock: Array<ICharacterCard> = [
  {
    id: 1,
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    location: 'Earth',
    status: 'alive'
  },
  {
    id: 2,
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    location: 'Earth',
    status: 'alive'
  },
  {
    id: 3,
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    location: 'Earth',
    status: 'alive'
  },
  {
    id: 4,
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    location: 'Earth',
    status: 'alive'
  }
]

const Characters = () => {
  return (
    <div className={classes.page}>
      <div className={classes.logo_wrapper}>
        <LogoImg />
      </div>
      <FilterPanel />
      <div className={classes.items_wrapper}>
        {charactersMock.map((item) => (
          <CharacterCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Characters
