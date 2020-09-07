import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import GlobalStyle from './Components/Style/GlobalStyle';
import ModalItem from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyCaJnYu_ugrDJ3WK7R1iJIllg5xt_RZHfc",
  authDomain: "mrdonalds-e7323.firebaseapp.com",
  databaseURL: "https://mrdonalds-e7323.firebaseio.com",
  projectId: "mrdonalds-e7323",
  storageBucket: "mrdonalds-e7323.appspot.com",
  messagingSenderId: "315326272298",
  appId: "1:315326272298:web:8d8430c44246fa4850c453",
  measurementId: "G-CNKX7M5WP5"
};

firebase.initializeApp(firebaseConfig);


function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </React.Fragment>
  );
}

export default App;
