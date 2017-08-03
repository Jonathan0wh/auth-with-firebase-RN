import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyDMf9SdFnjUQOiaY7ml_UI_OLPpewWAJhM',
      authDomain: 'auth-react-native-eaf23.firebaseapp.com',
      databaseURL: 'https://auth-react-native-eaf23.firebaseio.com',
      projectId: 'auth-react-native-eaf23',
      storageBucket: 'auth-react-native-eaf23.appspot.com',
      messagingSenderId: '493800122809'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        <LoginForm />
      </View>
    );
  }
}
