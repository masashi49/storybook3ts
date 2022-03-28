import { VFC } from 'react'

type Props = {
  sns: string[],
  id:number
}

export const Footer = ({ sns, id }: Props) => {
  return (
    <footer>
      <ul>
        {sns.map((text, index) =>
          <li key={index}>{text}</li>
        )}
      </ul>
      {id}
    </footer>
  )
}
