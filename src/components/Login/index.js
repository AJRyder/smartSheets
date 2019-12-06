import React, { Component } from 'react'
import { doSignInWithEmailAndPassword } from '../../firebase/firebase'
import { auth } from 'firebase'
import * as ROUTES from '../../constants/routes'

class Login extends Component {
    state = {
        email: '',
        password: '',
        passwordTwo: '',
        error: null
    }
    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })
    onSubmit = e => {
        const { email, password } = this.state
        e.preventDefault()
        doSignInWithEmailAndPassword(email, password)
        .then(authUser => { 
            this.props.history.push(ROUTES.HOME)
        })
        .catch(error => { 
            this.setState({error})
        })
    }
    render() {
        const { email, password, passwordTwo, error } = this.state
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            email === ''
        return (
            <div>
                <h1>LOGIN</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='email' value={email} placeholder="EMAIL" onChange={this.onChange}/>
                    <input type='password' name='password' value={password} placeholder="PASSWORD" onChange={this.onChange}/>
                    <input type='password' name='passwordTwo' value={passwordTwo} placeholder="VERIFY PASSWORD" onChange={this.onChange}/>
                    <input type='submit' value='submit' disabled={isInvalid}/>
                    {error && <p>{error.message}</p>}
                </form>
            </div>
        )
    }
}
export default Login