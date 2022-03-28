import { VFC } from 'react'

type Props = {
  sns: string[]
}

export const Footer = ({ sns }: Props) => {
  return (
    <footer>
      <ul>
        {sns.map((text, index) =>
          <li key={index}>{text}</li>
        )}
      </ul>
    </footer>
  )
}
