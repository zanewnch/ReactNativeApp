// import { ActivityIndicator, StatusBar, View,Text } from "react-native";
// import React, { useEffect, useState } from "react";
// import { setupPlayer, addTrack } from "./musicPlayerServices";
// import { SafeAreaView } from "react-native-safe-area-context";
// export default function music() {
//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   async function setup() {
//     let isSetup = await setupPlayer();

//     if (isSetup) {
//       await addTrack();
//     }

//     setIsPlayerReady(isSetup);
//   }

//   useEffect(() => {
//     setup();
//   }, []);

//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView>
//         <ActivityIndicator />
//       </SafeAreaView>
//     );
//   }
//   return (
//     <SafeAreaView>
//       <StatusBar />
//       <Text>testing</Text>
//     </SafeAreaView>
//   );
// }
