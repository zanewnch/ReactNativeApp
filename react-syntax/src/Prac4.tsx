import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import { setName, setAge } from "./redux/counterSlice";

// prac4 是練習redux 

// Define the shape of your state
interface State {
  counter: number;
  user: {
    name: string;
    age: number;
  };
}

export default function Prac4(props: any) {
  const dispatch = useDispatch();

  const count = useSelector((state: State) => state.counter);
  const user = useSelector((state: State) => state.user);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(parseInt(e.target.value)));
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div>
      <input 
        type="text" 
        value={user.name} 
        onChange={handleNameChange} 
        placeholder="Name"
      />
      <input 
        type="number" 
        value={user.age} 
        onChange={handleAgeChange} 
        placeholder="Age"
      />
    </div>
    </>
  );
}