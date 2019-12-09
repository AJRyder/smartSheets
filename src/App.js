import React, { Component } from 'react';
import Sidebar from "react-sidebar";


import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassWord from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'

import CallSheetList from './components/CallSheetList'
import CallSheetContainer from './components/CallSheetContainer'

import ProductionContainer from './components/ProductionContainer'
import ProductionList from './components/ProductionList';

import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth, doSignOut, doSignInWithEmailAndPassWord } from './firebase/firebase'

import './App.css';

class App extends Component {
  state = { 
    message: '', 
    currentUser: null, 
    file: null  
  }
  addProfilePicture = event => {
    doAddFile(event.target.files[0])
      .then(file => file.ref.getDownloadURL())
      .then(async url => {
        const updatedUser = await fetch(`auth/users/${this.state.currentUser._id}`, {
        method: 'PUT', 
        body: JSON.stringify({ imgUrl: url }), 
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      console.log(this.state.currentUser._id)
      const updatedUserJSon = await updatedUser.json()
      this.doSetCurrentUser(updatedUserJSon)
    })
  }

  async componentDidMount() { 
    const message= await fetch('/hello')
    const messageJson = await message.json()
    this.setState({message: messageJson.message})
    auth.onAuthStateChanged(authUser => { 
      authUser
      ? this.setState({currentUser: {
        displayName: authUser.email}
      })
      : this.setState({ currentUser: null })
    })     
  }

  doSetCurrentUser = currentUser => { 
    this.setState({
      currentUser
    })
  }
  render() {
    const { currentUser } = this.state

    return (
      <div className="App">
        <NavBar />
        {
          currentUser
          ? <div>
              {currentUser.displayName}
              <button onClick={doSignOut}>Sign Out</button>
              <img src={currentUser.imgUrl} />
            </div>
            
          : null
        }
        <h1>Hello {this.state.message}!</h1>
        <h1>Hey Dude!</h1>
     

        <input type='file' onChange={this.addProfilePicture} accept='image/*'/>
        <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
        <CallSheetList callSheets={[]}/>
        <ProductionList productions={[]}/>

        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>}/>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.RESETPWD} component={ResetPassword}/>
          <Route exact path={ROUTES.SIGN_UP} component={SignUpWithEmailPassWord}/>

          <Route exact path={ROUTES.CALLSHEETS} component={CallSheetList}/>
          <Route exact path={ROUTES.PRODUCTIONS} component={ProductionList}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
