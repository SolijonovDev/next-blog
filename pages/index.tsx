import type { NextPage } from 'next'
import { Featured } from '../components/Featured'
import { Header } from '../components/Header'
import MainLayout from '../components/Layout'
import { RecentPosts } from '../components/RecentPosts'

const Home: NextPage = () => {
  return (
    <MainLayout title='Home page'>
      <div>
        <Header />
        <RecentPosts />
        <Featured />
      </div>
    </MainLayout>
  )
}

export default Home
