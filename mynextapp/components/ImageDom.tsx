import React, { VFC } from 'react';
import Image from 'next/image'
import { css } from "@emotion/react"

type Props = {
  imgData: {
    src: string
    alt: string
  }
}

export const ImageDom: VFC<Props> = ({ imgData }) => {
  return (
    <>
      <Image src={imgData.src} alt={imgData.alt} width={360} height={240} layout={"fixed"} />
      <img src={imgData.src} />
    </>
  );
};
