import React, { Component } from 'react'

class AddCrew extends Component {
    state ={
        crew: {
            department: '',
            position: '', 
            contact: { 
                name: '', 
                phoneNum:'', 
                email: ''
            }   
        }
    }

    handleChangeContact = e => {
        this.setState({
            ...this.state, 
            crew: { 
                ...this.state.crew, 
                contact: {
                    ...this.state.crew.contact, 
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleChange = e => {
        this.setState({
            ...this.state,
            crew: {
                ...this.state.crew,
                [e.target.name]: e.target.value
            }
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
                    value={crew.department}
                    placeholder="department"
                    onChange={this.handleChange}
                />
                  <input 
                    type='text' 
                    name="position" 
                    value={crew.position}
                    placeholder="crew position"
                    onChange={this.handleChange}
                />
                    <input 
                    type='text' 
                    name="name" 
                    value={crew.contact.name}
                    placeholder="crew name"
                    onChange={this.handleChangeContact}
                /> 
                   <input 
                    type='text' 
                    name="phoneNum" 
                    value={crew.contact.phoneNum}
                    placeholder="crew phone #"
                    onChange={this.handleChangeContact}
                />
                   <input 
                    type='text' 
                    name="email" 
                    value={crew.contact.email}
                    placeholder="crew email"
                    onChange={this.handleChangeContact}
                />
                <button type='submit'>Add Crew Member</button>
            </form>
        )
    }
}

export default AddCrew