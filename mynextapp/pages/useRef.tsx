import type { NextPage } from 'next'
import { VFC, useRef, useEffect, Children, forwardRef, HTMLAttributes } from 'react'

const Oya: NextPage = () => {
  return (
    <div>
      <RefChild />
    </div>
  )
}

const RefChild = () => {
  const ref = useRef<HTMLButtonElement>(null!)

  const catchRef = () => {
    console.log(ref.current) // FancyButton
  }
  const fancyEvent = () => {
    console.log("You clicked on the pink circle!")
  }
  return (
    <>
      <button onClick={catchRef}>親ボタン</button>
      <FancyButton ref={ref} type="submit"><span>子供ボタン</span></FancyButton>
      <FancyDiv fancyEvent={fancyEvent}>fancyDiv</FancyDiv>
    </>
  )
}

type FancyButtonElementType = HTMLButtonElement | null
type FancyButtonProps = JSX.IntrinsicElements['button']

const FancyButton = forwardRef<FancyButtonElementType, FancyButtonProps>((
  props,
  ref
) => {
  return (
    <div>
      <button ref={ref} data-fancy='fancy2'{...props} />
    </div>
  )
})

FancyButton.displayName = 'FancyButton'


type FfancyDivProps = {
  fancyEvent: VoidFunction,
  children:string
}

const FancyDiv: VFC<FfancyDivProps> = (
  { fancyEvent ,children }
) => {
  return <div data-fancy='fancy2'><span onClick={fancyEvent}>{children}</span></div>
}







export default Oya
