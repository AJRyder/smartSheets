import React, {Component} from 'react'

class AddClient extends Component { 
    state={
        client: { 
            agency: '', 
            name: '', 
            phoneNum: ''
        }
    }

    handleChange = e => { 
        this.setState({
            ...this.state,
            client: { 
                ...this.state.client, 
                [e.target.name]: e.target.value
            }
        })
    }
    addClient = (e) => {
        e.preventDefault()
        this.props.addToCallSheetClient(this.state.client)
        this.setState({
            client: { 
                agency: '', 
                name: '', 
                phoneNum: ''
            }
        })
    }
    render() {
        const { client } = this.state
        return (
            <form onSubmit={this.addClient}>
                <input
                   type='text'
                   name='agency'
                   value={client.agency}
                   placeholder="Agency Name"
                   onChange={this.handleChange}
               />
                <input
                    type='text'
                    name='name'
                    value={client.name}
                    placeholder="Client/Rep Name"
                    onChange={this.handleChange}
                />
                 <input
                    type='text'
                    name='phoneNum'
                    value={client.phoneNum}
                    placeholder="Client/Rep Phone #"
                    onChange={this.handleChange}
                />
                <button type='submit'>Add Client Info</button>
            </form>
        )
    }
}

export default AddClient