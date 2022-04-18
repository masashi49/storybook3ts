import { ComponentPropsWithoutRef, VFC } from 'react'
import { text } from 'stream/consumers';

export function copy<T, U>(value: T, ai: U) {
  return value
}
type Hoge = {
  aisatu: string;
}
const hello = {
  aisatu: "hello"
}

console.log(copy<Hoge, string>(hello, "hello"))
console.log(copy(hello, "hello")) // 型推論してくれる！


// genericsに型に制約を設けるには extends を設置する。
function copyss<T extends { aisatu: string }, U>(value: T, ai: U) {
  return value
}
console.log(copyss<Hoge, string>(hello, "hello"))

// keyof 演算子
// objedtの型に行います。
// objectのkeyを取り出してユニオンにする。
type K = keyof { name: string; age: number }

// Uの型は、Tの型のユニオンのどれか。("aisatu"がないとダメ)
function copysss<T extends { aisatu: string, age: number }, U extends keyof T>(value: T, key: U) {
  value[key]
  return value
}
copysss({ aisatu: "hello", age: 20 }, "aisatu");



class LightDatabase<T extends string | number | boolean> {
  private data: T[] = []
  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  get() {
    return this.data
  }
}
const stringLightDatabase = new LightDatabase<string>()

stringLightDatabase.add("Apple")
stringLightDatabase.add("Banana")
stringLightDatabase.add("Grape")

stringLightDatabase.remove("Banana")
console.log(stringLightDatabase.get())








// const Buttons = ({  children }) => {
//   return <button >{children}</button>
// }

type ButtonTypes = ComponentPropsWithoutRef<'button'> & {
  gcfhgvjh: string
}
type InputTypes = JSX.IntrinsicElements['input']

const Buttons: VFC<ButtonTypes> = ({ ...props }) => {
  const { gcfhgvjh } = props
  console.log(gcfhgvjh)
  return <button {...props} />
}
const Input: VFC<InputTypes> = ({ ...props }) => {
  return <input {...props} />
}
const Example = () => {
  const handleClick = () => alert('clicka')
  return (
    <>
      <Buttons type="submit" disabled={false} name="example" onClick={handleClick} gcfhgvjh="helaalo">テキスト</Buttons>
      <Input type="text" placeholder="0900" value="hello" data-stage="stage" />
    </>
  )
}




export const Genericsssss: VFC = () => {
  return (
    <div>
      genericsをなぜ使うのか
      <ul>
        <li>- 汎用的に使いたい関数に対し、型も引数として一緒に渡せば下記の辛みが解消される。これを実行できるのがGenericsである。</li>
        <li>- 引数をanyとすると、使用する際に型保管が効かない。</li>
        <li>- 使用する際に、型アサーション(asを使う) で無理やり変換すれば使える。</li>
        <li>- stringやnumberといったシンプルなものなら大丈夫だが、objectの場合、内包するkeyとvalueの方を全部記載する必要があり、辛い。</li>
      </ul>

      <Example />
    </div>
  )
}
