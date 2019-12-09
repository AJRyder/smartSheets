import React, {Component} from 'react'; 

class CreateProduction extends Component { 
    state = { 
        info: {
            title: '', 
            type: '', 
            logo: '',
            days: 0, 
            dayOutOfDays: 0, 
        },
    
        productionCo: { 
            name: '', 
            address: '', 
            phoneNum: '', 
            logo: ''
        },
    
        pointOfContact: { 
            name: '', 
            phoneNum: '', 
        },
    
        quickRefTimes: {
            crewCall: '', 
            shootingCall: '', 
            lunch: '', 
            secondMeal: '', 
            estimatedWrap: ''
        },

        callSheetList: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'CallSheets'
        }]
    }
    handleChange = (e) => { 
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render() {
        return(
            <div className="Create-Production-Container">
            <h4>Create a New Production</h4>
            <form onSubmit={(e) => this.props.addCallSheet(e, this.state)}>
                <segment className="create-production">
                    <label><strong>Production Overview</strong></label><br/>
                    <label>Production Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={this.state.info.title} 
                        placeholder="Production Title"
                    />
                    <label>Media Type aka feature, music video, etc.</label>
                    <input 
                        type="text" 
                        name="mediaType" 
                        value={this.state.info.mediaType} 
                        placeholder="Production Type"
                    />
                    <label>Production Logo/Graphic</label>
                    <input 
                        type="text" 
                        name="logo" 
                        value={this.state.info.logo} 
                        placeholder="Production Logo/Graphic URL"
                    />
                    <label>Total Days</label>
                    <input 
                        type="text" 
                        name="days" 
                        value={this.state.info.days} 
                        placeholder="Total Days"
                    />
                    <label>Day Out of Days</label>
                    <input 
                        type="text" 
                        name="dOOD" 
                        value={this.state.info.dOOD} 
                        placeholder="Total Days"
                    />
                </segment>

                <segment className="Production Co Data">
                    <label>Production Co. Name</label>   
                    <input 
                        type="text" 
                        name="name"
                        value={this.state.productionCo.name}
                        placeholder="Production Co. Name"
                    />
                    <label>Production Co. Address</label>   
                    <input 
                        type="text" 
                        name="address"
                        value={this.state.productionCo.address}
                        placeholder="Production Co. Addresss"
                    />
                    <label>Production Co. Phone</label>   
                    <input 
                        type="text" 
                        name="phone"
                        value={this.state.productionCo.phoneNum}
                        placeholder="Production Co. Phone #"
                    />
                    <label>Production Co. Name</label>   
                    <input 
                        type="text" 
                        name="logo"
                        value={this.state.productionCo.logo}
                        placeholder="Production Co. Logo URL"
                    />
                </segment>  
                <segment className="PoC">
                    <label>Point of Contact</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.pointOfContact.name}
                        placeholder="Company's Point of Contact"
                    />
                    <label>PoC Phone #</label>
                    <input
                        type="text"
                        name="phoneNum"
                        value={this.state.pointOfContact.phoneNum}
                        placeholder="Point of Contact Phone #"
                    />
                </segment>

                <segment className="quick-Reference-Times">
                    <label>General Call Time</label>
                    <input
                        type="text"
                        name="crewCall"
                        value={this.state.quickRefTimes.crewCall}
                        placeholder="General Call Time"
                    /> 
                    <label>Shooting Call Time</label>
                    <input
                        type="text"
                        name="shootingCall"
                        value={this.state.quickRefTimes.shootingCall}
                        placeholder="Shooting Call Time"
                    /> 
                    <label>Lunch</label>
                    <input
                        type="text"
                        name="lunch"
                        value={this.state.quickRefTimes.lunch}
                        placeholder="Lunch Time"
                    /> 
                    <label>2nd Meal Time</label>
                    <input
                        type="text"
                        name="secondMeal"
                        value={this.state.quickRefTimes.secondMeal}
                        placeholder="2nd Meal Time"
                    />   
                    <label>Est Wrap Time</label>
                    <input
                        type="text"
                        name="estimatedWrap"
                        value={this.state.quickRefTimes.estimatedWrap}
                        placeholder="Estimated Wrap Time"
                    /> 
                </segment>  
                <button type='Submit'>Create Production</button>
            </form>
        </div>
        )
    }
}


export default CreateProduction