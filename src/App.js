import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './component/firebase/firebase.util';

import {Route,Routes} from 'react-router-dom' 

import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
  
  // class property
  unSubscribeFromAuth = null;

  componentDidMount(){

  const {setCurrentUser} = this.props;

   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          })
        })


      }
      else{
        setCurrentUser( userAuth );
      }

    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/signin' element={<SignInAndSignUpPage/>} />
      </Routes>
    </div>
  );
}
}

const mapDispatchToProps = dispatch=>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect (null, mapDispatchToProps) (App);
