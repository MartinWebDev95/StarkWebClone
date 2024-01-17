import styles from './Login.module.css'

const Login = ({ isMenuHidden, handleOpenMenu }) => {
  return (
    <div className={styles.login}>
      <a href="#">Log in</a>

      <button type="button">
        30-day free team trial
      </button>

      <button
        type="button"
        className={styles.buttonMenu}
        aria-hidden={isMenuHidden}
        onClick={handleOpenMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  )
}

export default Login