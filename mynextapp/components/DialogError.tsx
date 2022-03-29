import React, { VFC } from 'react';
import { DialogWrap } from './DialogWrap';

type Props = {
  error:string
}

/* ---------- 呼び出す側 ---------- */
export const DialogError: VFC<Props> = ({error}) => {
  return (
    <DialogWrap>
      {error}
    </DialogWrap>
  )
}
