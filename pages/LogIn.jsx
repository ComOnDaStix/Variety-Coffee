import styles from "../styles/Login.module.css"
const LogIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.login}>Login</h1>
        </div>
        <form className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
          <a href="#" className={styles.forgotPassword}>
            Forgot your password?
          </a>
         
        </form>
        
      </div>
      <button type="submit" className={styles.signInButton}>
            SIGN IN
          </button>
    </div>
  );
};

export default LogIn;