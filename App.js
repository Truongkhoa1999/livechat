// import { StatusBar } from 'expo-status-bar';
import {   View } from 'react-native';
import { styles } from './style/AppStyle';
// firebase SDK 
// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'


// firebase hooks

import { useAuthState } from 'react-firebase-hooks/auth';



const auth = firebase.auth()

export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}


