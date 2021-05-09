import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './config'

//firebaseのプロジェクトの設定値を使ってfirebaseのアプリを初期化
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()