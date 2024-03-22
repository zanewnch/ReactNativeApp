import { Tabs } from "expo-router";
import {Stack} from "expo-router";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <>
      {/* <Tabs /> */}
      <Slot/>
      {/* <Stack/> */}
    </>
  );
}
