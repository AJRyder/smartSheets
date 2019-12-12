import React, { Component } from 'react'

class AddSchedule extends Component { 
    state={ 
        schedule: { 
            time: '', 
            sceneNum: '', 
            description: '', 
            DorN: ''
        }
    }

    handleChange = e => { 
        this.setState({
            ...this.state,
            schedule: { 
                ...this.state.schedule, 
                [e.target.name]: e.target.value
            }
        })
    }
    addSchedule = (e) => {
        e.preventDefault()
        this.props.addToCallSheetSchedule(this.state.schedule)
        this.setState({
            schedule: { 
                time: '', 
                sceneNum: '', 
                description: '', 
                DorN: ''
            }
        })
    }
    render() {
        const { schedule } = this.state
        return (
            <form onSubmit={this.addSchedule}>
                <input
                   type='text'
                   name='time'
                   value={schedule.time}
                   placeholder="Schedule Time"
                   onChange={this.handleChange}
               />
                <input
                    type='text'
                    name='sceneNum'
                    value={schedule.sceneNum}
                    placeholder="Scene Number"
                    onChange={this.handleChange}
                />
                 <input
                    type='text'
                    name='description'
                    value={schedule.description}
                    placeholder="Location Description"
                    onChange={this.handleChange}
                />
                 <input
                    type='text'
                    name='DorN'
                    value={schedule.DorN}
                    placeholder="D/N?" 
                    onChange={this.handleChange}
                /><br/>
                <button className="DataBtn" type='submit'>Add Schedule Item</button>
            </form>
        )
    }
}
export default AddSchedule

