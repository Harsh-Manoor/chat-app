import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyAKGRssxY4OW9um6RlSbbQ1Fh_lgdWfoPs',
  authDomain: 'chat-web-app-4ee4c.firebaseapp.com',
  databaseURL: 'https://chat-web-app-4ee4c.firebaseio.com',
  projectId: 'chat-web-app-4ee4c',
  storageBucket: 'chat-web-app-4ee4c.appspot.com',
  messagingSenderId: '167319830934',
  appId: '1:167319830934:web:419e220f9fdcd15ea25db7',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BBIWk8ihln-_oHSfFrgLu6fOKbV-8M-TyduC2iHApz6iD1cbjXFWvnv5njzRos6cRPcB_Ddal_kXUEWtCXX3VLw'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
