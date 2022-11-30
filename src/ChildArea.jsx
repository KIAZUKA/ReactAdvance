//親の再レンダリング時に子供も起こさないようにするには
//memoでコンポーネントを囲む
import {memo} from "react";

const style ={
  width:"100%",
  height:"70px",
  backgroundColor:"red"
};

export const ChildArea = memo((props) =>{
  const {open, onClickClose} = props;
  console.log("childAreaがレンダリングされた!!");

  const data =[...Array(2000).keys()];
  data.forEach(()=>{
  console.log("...");
  });

  return(
    <>
    {open?(
    <div style={style}>
     <p>child</p>
     <button onClick={onClickClose}>close</button>
    </div>
    ) : null}
    </>
  );
});