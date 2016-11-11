import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyDmoWCc7mwN02lTBrp0mKmh8oeu_k86C5U',
  authDomain: 'delanylong.firebaseapp.com',
  databaseURL: 'https://delanylong.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1021052903206',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.database()
export const user = db.ref('entity/OrderTrackUser')
