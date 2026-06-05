import classes from './Footer.module.css'

const ownerName = 'Filipp K'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__text}>Made with love by {ownerName}</p>
    </footer>
  )
}

export default Footer
