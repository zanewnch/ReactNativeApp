// http://localhost:8081/
import { View } from "react-native";
import { Link } from "expo-router";
/* 每一個directory 就是一個router,  然後child router 會繼承parent router 的_layout.tsx   像我在home 的_layout.tsx 有設置<Header/>  , 那child router 也都會有 <Header/> 就跟vue <router-view/>概念一樣 */
export default function App() {
  return (
    <View>
      <div>child router test</div>
    </View>
  );
}
