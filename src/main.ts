import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXLvCgy05BatUcqu3fWerKFsfgbCOJEUo",
  authDomain: "web-app-sample-fb4a1.firebaseapp.com",
  databaseURL: "https://web-app-sample-fb4a1.firebaseio.com",
  projectId: "web-app-sample-fb4a1",
  storageBucket: "web-app-sample-fb4a1.appspot.com",
  messagingSenderId: "1003613378354",
  appId: "1:1003613378354:web:d1058de914fe971a7fa92b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION);

createApp(App).use(store).use(router).mount('#app')
