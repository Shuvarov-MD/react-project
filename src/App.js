import React from 'react';
import NavBar from './Components/NavBar';
import Menu from './Components/Menu';
import GlobalStyle from './Components/GlobalStyle';
import ModalItem from './Components/ModalItem';
import Order from './Components/Order';

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </React.Fragment>
  );
}

export default App;
