import firebase from '@react-native-firebase/app';
import '@firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiJMhowJEXHfdswIcnK2_uEL_R4-TzX6Q',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://kuddie.firebaseio.com',
  projectId: 'kuddie',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:601645727259:android:5b940d5bd3e6f4301c82be',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
