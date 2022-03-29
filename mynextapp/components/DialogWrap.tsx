import React, { ReactNode, VFC } from 'react';

type Props = {
  children?: ReactNode;
}

export const DialogWrap: VFC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}
