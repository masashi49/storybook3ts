import type { NextPage } from 'next'
import { VFC } from 'react'
import { css } from "@emotion/react"

const styles = {
  padding: (size: number) => css`
    padding: ${size / 10}rem;
  `,
  baseInner: css`
    border: 1px solid #000;
  `,
}

// 親
const Oya: NextPage = () => {
  return (
    <div css={[styles.baseInner, styles.padding(6)]}>
      <Kodomo>
        子供で表示するテキスト
      </Kodomo>
    </div>
  )
}

// 子供
type Props = {
  children: React.ReactNode // or ReactChild or ReactText or string()
}
const Kodomo = ({ children }: Props) => {
  return <span>{children}</span>
}

export default Oya
