import { Logo } from '@assets/images'
import { CharacterCard, type ICharacterCard } from '@widgets'

import classes from './Characters.module.scss'

const charactersMock: Array<ICharacterCard> = [
  {
    id: 1,
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
      <div
        className={classes.logo_wrapper}
        style={{ marginBottom: 25 }}
      >
        <Logo />
      </div>
      {charactersMock.map((item) => (
        <CharacterCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default Characters
