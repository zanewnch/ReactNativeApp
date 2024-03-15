// 試試看redux
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

export default function Prac4(props: any) {
  const count = useSelector((state:any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
