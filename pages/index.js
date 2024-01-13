import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
      </Head>
  
          <main className={styles.main}>
            <div className={styles.loginContainer}>
              <img src="/images/twitterlogo.webp" alt="Twitter Logo" className={styles.logo} />
              <form className={styles.loginForm}>
                <input type="text" placeholder="Username or email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log in with Twitter</button>
              </form>
            </div>
          </main>
        </div>

  );
}
