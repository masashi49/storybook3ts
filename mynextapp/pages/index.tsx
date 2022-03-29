import type { NextPage } from 'next'
import Link from 'next/link'
import PageHead from './Head'
import { Footer } from '../components/Footer'
import { DialogError } from '../components/DialogError'

const snsArray: string[] = ["A", "B"]

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <Footer sns={snsArray} id={30} />

      <br />
      <Link href="https://note.com/tabelog_frontend/n/n07b4077f5cf3">
        <a>ディレクトリ構成についてい考える</a>
      </Link>
      b<DialogError />a
    </>
  )
}

export default Home
