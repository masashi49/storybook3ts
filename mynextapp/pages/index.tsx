import type { NextPage } from 'next'
import { css } from "@emotion/react"
import Link from 'next/link'
import PageHead from './Head'
import { Footer } from '../components/Footer'
import { DialogError } from '../components/DialogError'


const snsArray: string[] = ["A", "B"]

const Home: NextPage = () => {
  return (
    <>
      <PageHead />
      <div css={container} >
        hello
      </div>
      <Footer sns={snsArray} id={30} />

      <br />
      <Link href="https://note.com/tabelog_frontend/n/n07b4077f5cf3">
        <a>ディレクトリ構成についてい考える</a>
      </Link>
      <DialogError error="アウト" />
    </>
  )
}

const container = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:#ccc;
`


export default Home
