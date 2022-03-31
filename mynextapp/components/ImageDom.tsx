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
      <Image src={imgData.src} alt={imgData.alt} />
      <img src="https://iconbu.com/wp-content/uploads/2019/09/01-12.png" />
    </>
    );
};
