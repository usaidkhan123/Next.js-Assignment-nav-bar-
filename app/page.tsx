import styles from "./ui.module.css";


const Homepage = () => {
  return (
    <div>
      <h1 className={styles.heading}>Welcome To Our Website</h1>
      <ul className={styles.navbar}>
        <li><a href="homepage">HomePage</a></li>
        <li><a href="aboutus   ">AboutUs</a></li>
        <li><a href="services">Sevices</a></li>
        <li><a href="contacts">Contacts</a></li>  
      </ul>
    </div>
  )
}
export default Homepage ;