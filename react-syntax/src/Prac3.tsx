// 這邊練習 child to parent
// 2. conditional rendering(css)
import { useState } from "react";

export default function Prac3(props: any) {
  const handleActive = (status: any) => {
    // params value 是由child function傳進來的
    console.log("status", status);
  };

  return (
    <>
      <Detail ownProperty={handleActive}></Detail>
    </>
  );
}

function Detail(props: any) {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(true);
    // 把status 傳給parent
    props.ownProperty(status);
  };

  return (
    <div>
      {/* css 的conditional control */}
      <p
        style={{
          display: status ? "block" : "none",
        }}
      >
        content
      </p>
      <button onClick={handleClick}>button</button>
    </div>
  );
}
