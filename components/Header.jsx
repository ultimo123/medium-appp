import Image from "next/image"
import logo from "../public/static/logo.png"

const Header = () => {
  const styles = {
    wrapper: "",
    content: "",
    logoContainer: "",
    bannerNav: "",
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} height={40} width={200} />
        </div>

        <div className={styles.bannerNav}>
          <p>Our Story</p>
          <p>Membership</p>
          <p>Sign In</p>
          <div>
            <p>Get Started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
