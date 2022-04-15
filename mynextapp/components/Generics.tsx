import { VFC } from 'react'

function copy<T>(value: T) {
  return value
}
console.log(copy<string>("hello"))



export const Generics: VFC = () => {
  return (
    <div>
      genericsをなぜ使うのか
      - 引数をanyとすると、使用する際に型保管が効かない。
      - 使用する際に、型アサーション(asを使う) で無理やり変換すれば使える。
      - stringやnumberといったシンプルなものなら大丈夫だが、objectの場合、内包するkeyとvalueの方を全部記載する必要があり、辛い。
      - 汎用的につい書いたい関数に対し、型も引数として一緒に渡せばさっきまでの辛みが解消される。これを実行できるのがGenericsである。
    </div>
  )
}
