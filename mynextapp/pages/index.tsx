import type { NextPage } from 'next'
import PageHead from './Head'
import { Footer } from '../components/Footer'

const snsArray: string[] = ["A", "B"]

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <Footer sns={snsArray} id={30} />
    </>
  )
}

export default Home
