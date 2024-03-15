// 這邊練習 useState and useEffect
// 2. conditional rendering(content)
import { useEffect, useState } from "react";
export default function Prac1(){
    // ref
  const [content, setContent] = useState("default value");

  // v-for
  let multiData = [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
  ];
  let listContent = multiData.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  // v-on event binding
  const testFunction = (e: any) => {
    // e is event content
    console.log("hello world", e);

    setIsCondition(!isCondition);
  };

  // v-if
  // 如果你只使用一個普通的變量來存儲 isCondition，那麼當你改變它的值時，React 不會知道它已經改變，並且不會重新渲染組件。這意味著即使 isCondition 的值已經改變，用戶界面也不會更新以反映這個變化。
  let [isCondition, setIsCondition] = useState(false);

  // 在 React 的 useEffect 鉤子中，你可以傳遞一個依賴陣列作為第二個參數。這個陣列告訴 React 這個 useEffect 鉤子的執行應該依賴於哪些狀態或道具的變化。
  useEffect(() => {
    if (isCondition) {
      setContent("conditionTrue");
    } else {
      setContent("conditionFalse");
    }
  }, [isCondition]);

  return (
    <>
      <div>
        <ul>{listContent}</ul>
      </div>

      <div>
        <button onClick={testFunction}>button event</button>
      </div>

      <div
      className="this-is-authentic-class-name"
      style={{
        border:"solid 1px red",
        width:"100px"
      }}
      >{content}</div>
    </>
  );
}