import React, {Component} from 'react'; 

class CreateCrew extends Component { 
    state={
        "crew": [{
            "department": '',
            "position": '', 
            "contact": { 
                "name": '', 
                "phoneNum": '', 
                "email": ''
            }  
        }]
    }
    handleChangeCrew = e => { 
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
        this.setState({
            ...this.state,
            crew: {
                ...this.state.crew,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => { 
        e.preventDefault()
        this.props.addCrew(this.state)
    }
    render(){
        return(
            <div className="Create-CallSheet-Container">
        
            <h4>Create a New CallSheet</h4>
            <form onSubmit={this.handleSubmit}>
                <segment className="create-crew">
                    <label><strong>Crew Overview</strong></label><br/>
                    <label>Department</label>
                    <input 
                        type="text" 
                        name="department" 
                        placeholder="Crew Department"
                        onChange={this.handleChangeCrew}
                    />
                    <label>Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        placeholder="Crew Position"
                        onChange={this.handleChangeCrew}
                    />
                    <label>Crew Call Time</label>
                    <input 
                        type="text"
                        name="callTimes"
                        placeholder="Call Time"
                        onChange={this.handleChangeCrew}
                    /><br/>    
                    <label><strong>Crew Contact Info</strong></label><br/>
                    <label>Crew Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Crew Name"
                        onChange={this.handleChangeCrew}
                    />
                    <label>Crew Phone</label>
                    <input 
                        type="text" 
                        name="phoneNum" 
                        placeholder="Crew Phone #"
                        onChange={this.handleChangeCrew}
                    />
                    <label>Crew Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Crew Email"
                        onChange={this.handleChangeCrew}
                    />
                </segment>
                <button type='Submit'>Create CallSheet</button>
            </form>
        </div>    
        )
}}
export default CreateCrew
