import styles from './page.module.css'
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import {Dark as DarkVariable} from "./Dark";


export default function Home() {
  return (
  <>
  <DarkVariable>
    <Navbar/>
    <Welcome/>
  </DarkVariable>
  </>
  )
}
