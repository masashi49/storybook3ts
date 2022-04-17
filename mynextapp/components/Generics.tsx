import { VFC } from 'react'

function copy<T, U>(value: T, ai: U) {
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


export const Generics: VFC = () => {
  return (
    <div>
      genericsをなぜ使うのか
      <ul>
        <li>- 汎用的に使いたい関数に対し、型も引数として一緒に渡せば下記の辛みが解消される。これを実行できるのがGenericsである。</li>
        <li>- 引数をanyとすると、使用する際に型保管が効かない。</li>
        <li>- 使用する際に、型アサーション(asを使う) で無理やり変換すれば使える。</li>
        <li>- stringやnumberといったシンプルなものなら大丈夫だが、objectの場合、内包するkeyとvalueの方を全部記載する必要があり、辛い。</li>
      </ul>
    </div>
  )
}
