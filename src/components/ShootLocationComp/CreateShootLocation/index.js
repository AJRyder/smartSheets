import React, {Component} from 'react'; 
import ShootLocationContainer from '../ShootLocationContainer';

class CreateShootLocation extends Component { 
    state={ 
        "shootLocations": { 
            "name": '', 
            "address": '', 
            "phoneNum": '', 
            "parking": '', 
            "parkingNotes": '', 
            "nearestHospital": { 
                "name": '', 
                "address": '', 
                "phoneNum": ''
            }
        }
    }
    handleChangeShootLocation = e => { 
        this.setState({
            ...this.state, 
            shootLocations: {
                ...this.state.shootLocations, 
                nearestHospital: { 
                    ...this.state.shootLocations.nearestHospital, 
                    [e.target.name]: e.target.value
                }
            }
        })
        this.setState({
            ...this.state, 
            shootLocations: { 
                ...this.state.shootLocations,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => { 
        e.preventDefault()
        this.props.addShootLocation(this.state)
    }
    render(){
        return(
            <div className="Create-ShootLocation-Container">
                <h4>Create a New Shoot Location</h4>
                <form onSubmit={this.handleSubmit}>
                    <segment className='create-location'>
                    <label>Location Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Location Name"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Location Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Location Address"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Location Phone Number</label>
                        <input
                            type="text"
                            name="phoneNum"
                            placeholder="Location Phone #"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Parking Address</label>
                        <input
                            type="text"
                            name="parking"
                            placeholder="Parking Address"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Parking Notes</label>
                        <input
                            type="text"
                            name="parkingNotes"
                            placeholder="Parking Notes"
                            onChange={this.handleChangeShootLocation}
                        /><br/>
                        <label><strong>Hospital Info</strong></label><br/>
                        <label>Hospital Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Hospital Name"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Hospital Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Hospital Address"
                            onChange={this.handleChangeShootLocation}
                        />
                        <label>Hospital Phone Number</label>
                        <input
                            type="text"
                            name="phoneNum"
                            placeholder="Hospital Phone #"
                            onChange={this.handleChangeShootLocation}
                            />
                    </segment>
                    <button type='Submit'>Create Shoot Location</button>
                </form>
            </div>
        )
}}

export default CreateShootLocation