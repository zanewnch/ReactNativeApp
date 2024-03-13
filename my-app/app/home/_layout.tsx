import { Slot } from "expo-router";
import Header from "./Header";
import { Stack } from 'expo-router';
export default function HomeLayout() {
  return (
    // Slot 就等於是 vue 的 <router-view> tag👍
    <>
      <Header />
      <Slot />
      {/* <Stack /> */}
    </>
  );
}
