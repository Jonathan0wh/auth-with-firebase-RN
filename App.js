import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: false };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: null });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'}/>
        {this.renderContent()}
      </View>
    );
  }
}
