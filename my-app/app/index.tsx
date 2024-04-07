// http://localhost:8081/
import { View } from "react-native";
import { Link } from "expo-router";
// import TrackPlayer from 'react-native-track-player';
// import { playbackService } from './musicPlayerServices';

// TrackPlayer.registerPlaybackService(()=>playbackService)


export default function App() {
  return (
    <View>
      <Link href="/about">About</Link>
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}
