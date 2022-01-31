import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Employees from '../components/Employees'
import Jobs from '../components/JOBS'

export default function Home() {
  return (
    <div>
      <Jobs/>
      <Employees/>
    </div>
  )
}
