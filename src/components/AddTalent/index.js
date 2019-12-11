import React, { Component } from 'react'

class AddTalent extends Component { 
    state={
        talent: { 
            talentId: '', 
            avatar: '',
            role: '', 
            isBgTalent: '', 
            callTimes: { 
                pickUp: '', 
                call: '', 
                onSet: ''
            } , 
            contact: { 
                name: '', 
                phoneNum: '', 
                email: ''
            }
        }
    }

    handleChange = e => { 
        this.setState({
            ...this.state, 
            talent: {
                ...this.state.talent,
                [e.target.name]: e.target.value
            }
        })
    }

    handleChangeCallTimes = e => { 
        this.setState({
            ...this.state, 
            talent: { 
                ...this.state.talent, 
                callTimes: {
                    ...this.state.talent.callTimes, 
                    [e.target.name]: e.target.value
                }
            }
        }) 
    }

    handleChangeContact = e => {
        this.setState({
            ...this.state, 
            talent: { 
                ...this.state.talent, 
                contact: {
                    ...this.state.talent.contact, 
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    addTalent = (e) => {
        e.preventDefault()
        this.props.addToCallSheetTalent(this.state.talent)
        this.setState({
            talent: { 
                talentId: '', 
                avatar: '',
                role: '', 
                isBgTalent: '', 
                callTimes: { 
                    pickUp: '', 
                    call: '', 
                    onSet: ''
                } , 
                contact: { 
                    name: '', 
                    phoneNum: '', 
                    email: ''
                }
            }
        })
    }
    render(){
        const { talent } = this.state
        return (
            <form onSubmit={this.addTalent}>
                <input 
                    type='text'
                    name='talentId'
                    value={talent.talentId}
                    placeholder='Cast ID #'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='avatar'
                    value={talent.avatar}
                    placeholder='avatar pic'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='role'
                    value={talent.role}
                    placeholder='Role'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='isBgTalent'
                    value={talent.isBgTalent}
                    placeholder='Is Background Talent?'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='pickUp'
                    value={talent.callTimes.pickUp}
                    placeholder='Pick Up Time'
                    onChange={this.handleChangeCallTimes}
                />
                <input 
                    type='text'
                    name='call'
                    value={talent.callTimes.call}
                    placeholder='Call Time'
                    onChange={this.handleChangeCallTimes}
                />
                <input 
                    type='text'
                    name='onSet'
                    value={talent.callTimes.onSet}
                    placeholder='On Set Time'
                    onChange={this.handleChangeCallTimes}
                />
                <input 
                    type='text'
                    name='name'
                    value={talent.contact.name}
                    placeholder='Talent Name'
                    onChange={this.handleChangeContact}
                />
                <input 
                    type='text'
                    name='phoneNum'
                    value={talent.contact.phoneNum}
                    placeholder='Talent Phone #'
                    onChange={this.handleChangeContact}
                />
                <input 
                    type='text'
                    name='email'
                    value={talent.contact.email}
                    placeholder='Talent Email'
                    onChange={this.handleChangeContact}
                />
                <button type='submit'>Add Talent</button>
            </form>
        )
    }
}
export default AddTalent