import type { NextPage } from 'next'
import { Featured } from '../components/Featured'
import { Header } from '../components/Header'
import MainLayout from '../components/MainLayout'
import { RecentPosts } from '../components/RecentPosts'
import s from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home page'>
     <div className={s.home}>
            <Header/>
            <RecentPosts/>
            <Featured/>
     </div>
    </MainLayout>
  )
}

export default Home
