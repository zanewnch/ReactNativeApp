// 這邊練習 parent to child 
// 2. css object and inline css syntax
export default function Prac2(props: any) {
  //props 傳遞練習, 由parent 傳給child
  const title = props.title;
  const content = props.content;
  const children = props.children.main; // 這就是vue 的slot
  console.log(title);
  console.log(content);

  // 寫成 css object 做 inline css
  const testStyle = {
    backgroundColor: "blue",
  };
  return (
    // 寫class and inline css style
    <>
      <div
        className="class-name"
        style={{
          border: "solid 1px red",
          backgroundColor: "grey",
        }}
      >
        aaa
      </div>
      <div style={testStyle}>bbb</div>

      <div>{children}</div>
    </>
  );
}
