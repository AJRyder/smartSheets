import React, {Component} from 'react'

class AddQuickRefTimes extends Component { 
    state={
        quickRefTimes: { 
            crewCall: '', 
            shootingCall: '', 
            lunch: '', 
            secondMeal: '', 
            estimatedWrap: ''
        }
    }

    handleChange = e => { 
        this.setState({
            ...this.state,
            quickRefTimes: { 
                ...this.state.quickRefTimes, 
                [e.target.name]: e.target.value
            }
        })
    }
    addQuickRefTimes = (e) => {
        e.preventDefault()
        this.props.addToCallSheetQuickRefTimes(this.state.quickRefTimes)
        this.setState({
            quickRefTimes: { 
                crewCall: '', 
                shootingCall: '', 
                lunch: '', 
                secondMeal: '', 
                estimatedWrap: ''
            }
        })
    }
    render() {
        const { quickRefTimes } = this.state
        return (
            <form onSubmit={this.addQuickRefTimes}>
                <input
                   type='text'
                   name='crewCall'
                   value={quickRefTimes.crewCall}
                   placeholder="General Crew Call"
                   onChange={this.handleChange}
               />
                <input
                    type='text'
                    name='shootingCall'
                    value={quickRefTimes.shootingCall}
                    placeholder="General Shooting Call"
                    onChange={this.handleChange}
                />
                 <input
                    type='text'
                    name='lunch'
                    value={quickRefTimes.lunch}
                    placeholder="Lunch Time"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='secondMeal'
                    value={quickRefTimes.secondMeal}
                    placeholder="2nd Meal"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='estimatedWrap'
                    value={quickRefTimes.estimatedWrap}
                    placeholder="Est. Wrap Time"
                    onChange={this.handleChange}
                />
                <button type='submit'>Add Reference Times</button>
            </form>
        )
    }
}

export default AddQuickRefTimes