import {useState, useCallback, useMemo} from "react";
import {ChildArea} from "./ChildArea"
import "./styles.css";

//memoとusecallbackを組み合わせて再レンダリングを最適化できる
export default function App() {
  const[text, setText] = useState("");
  const[open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = ()=> setOpen(!open);

  const onClickClose =useCallback(() => setOpen(false),[setOpen]);
  //変数の中の処理が複雑になっているときに使用すると良い
  const temp = useMemo(()=>1 + 3,[]);
  console.log(temp);
  
  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}
