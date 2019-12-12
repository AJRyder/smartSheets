import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SignInWithGoogle from './components/SignInWithGoogle'
import SignUpWithEmailPassWord from './components/SignUpWithEmailPassword'
import Login from './components/Login'
import ResetPassword from './components/ResetPassword'

import CallSheetContainer from './components/CallSheetComps/CallSheetContainer'
import ProductionContainer from './components/ProductionComp/ProductionContainer'


import * as ROUTES from './constants/routes'
import { firebase, doAddFile, auth, doSignOut, doSignInWithEmailAndPassWord } from './firebase/firebase'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


class App extends Component {
    state = { 
      message: '', 
      currentUser: null, 
      file: null, 
    }


  // user login functions
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
        <div className="User-Info">
          {
            currentUser
            ? <div>
                {currentUser.displayName}
                <button onClick={doSignOut}>Sign Out</button>
                <img src={currentUser.imgUrl} />
              </div>
              
            : null
          }
          <input 
            type='file' 
            onChange={this.addProfilePicture} 
            accept='image/*'
          />
          <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
        </div>


        <Switch>
          <Route 
            exact path={ROUTES.HOME} 
            render={() => <div>
                            <h2>Welcome to SmartSheets</h2>
                          </div>}
          />
          <Route 
            exact path={ROUTES.LOGIN} 
            component={Login}
          />
          <Route 
            exact path={ROUTES.RESETPWD} 
            component={ResetPassword}
          />
          <Route 
            exact path={ROUTES.SIGN_UP} 
            component={SignUpWithEmailPassWord}
          />

          <Route 
            exact path={ROUTES.CALLSHEETS} 
            component={CallSheetContainer}
          />
          <Route 
            exact path={ROUTES.PRODUCTIONS} 
            component={ProductionContainer}
          />
        </Switch>  
      </div>
    );
  }
}

export default App;
