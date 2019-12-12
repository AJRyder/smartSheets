import React, {Component} from 'react'

class AddDayCount extends Component { 
    state={
        dayCount: { 
           totalDays: '', 
           dOOD: ''
        }
    }

    handleChange = e => { 
        this.setState({
            ...this.state,
            dayCount: { 
                ...this.state.dayCount, 
                [e.target.name]: e.target.value
            }
        })
    }
    addDayCount = (e) => {
        e.preventDefault()
        this.props.addToCallSheetDayCount(this.state.dayCount)
        this.setState({
            dayCount: { 
                totalDays: '', 
                dOOD: ''
             }
        })
    }
    render() {
        const { dayCount } = this.state
        return (
            <form onSubmit={this.addDayCount}>
                <input
                    type='text'
                    name='dOOD'
                    value={dayCount.dOOD}
                    placeholder="Day out of Days"
                    onChange={this.handleChange}
                />
                <input
                   type='text'
                   name='totalDays'
                   value={dayCount.totalDays}
                   placeholder="Total Days"
                   onChange={this.handleChange}
               /><br/>
                <button className="DataBtn" type='submit'>Add Day Count</button>
            </form>
        )
    }
}

export default AddDayCount