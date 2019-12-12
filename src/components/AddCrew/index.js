import React, { Component } from 'react'

class AddCrew extends Component {
    state ={
        department: '',
        position: '', 
        contact: { 
                name: '', 
                phoneNum:'', 
                email: ''
            }   
    }

    handleChangeContact = e => {
        this.setState({
                ...this.state, 
                contact: {
                    ...this.state.contact, 
                    [e.target.name]: e.target.value
                }
            })
    }
    handleChange = e => {
        this.setState({
            ...this.state,
                [e.target.name]: e.target.value
            })
    }


    addCrew = (e) => {
        e.preventDefault()
        this.props.addToCallSheetCrew(this.state)
        this.setState({
            crew: {
                department: '',
                position: '', 
                contact: { 
                    name: '', 
                    phoneNum:'', 
                    email: ''
                }   
            }
        })
    }

    render() {
        const { crew } = this.state
        return (
            <form onSubmit={this.addCrew}>
                <input 
                    type='text' 
                    name="department" 
                    value={this.state.department}
                    placeholder="department"
                    onChange={this.handleChange}
                />
                  <input 
                    type='text' 
                    name="position" 
                    value={this.state.position}
                    placeholder="crew position"
                    onChange={this.handleChange}
                />
                    <input 
                    type='text' 
                    name="name" 
                    value={this.state.contact.name}
                    placeholder="crew name"
                    onChange={this.handleChangeContact}
                /> 
                   <input 
                    type='text' 
                    name="phoneNum" 
                    value={this.state.contact.phoneNum}
                    placeholder="crew phone #"
                    onChange={this.handleChangeContact}
                />
                   <input 
                    type='text' 
                    name="email" 
                    value={this.state.contact.email}
                    placeholder="crew email"
                    onChange={this.handleChangeContact}
                />
                <button className="DataBtn" type='submit'>Add Crew Member</button>
            </form>
        )
    }
}

export default AddCrew