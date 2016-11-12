import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDmoWCc7mwN02lTBrp0mKmh8oeu_k86C5U',
  authDomain: 'delanylong.firebaseapp.com',
  databaseURL: 'https://delanylong.firebaseio.com',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.database().ref()
export const entity = db.child('entity')
export const user = entity.child('OrderTrackUser')
