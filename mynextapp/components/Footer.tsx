import { VFC } from 'react'
import { Genericsssss } from './Generics'

type Props = {
  sns: string[],
  id: number
}

export const Footer: VFC<Props> = ({ sns, id }) => {
  return (
    <footer>
      <ul>
        {sns.map((text, index) =>
          <li key={index}>{text}</li>
        )}
      </ul>
      {id}

      <Genericsssss />
    </footer>
  )
}
