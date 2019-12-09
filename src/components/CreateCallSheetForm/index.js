import React, {Component} from 'react'; 

class CreateCallSheet extends Component { 
    state = { 
        crew: { 
            department: '',
            position: '', 
            contact: { 
                name: '', 
                phoneNum: '', 
                email: ''
            }   
        }, 
        client: { 
            agency: '', 
            name: '', 
            phoneNum: ''
        }, 
        talent: { 
            talentId: '', 
            avatar: '',
            role: '', 
            isBgTalent: null, 
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
        }, 
        schedule: { 
            time: '', 
            sceneNum: '', 
            description: '', 
            DorN: ''
        }, 
        shootLocations: { 
            name: '', 
            address: '', 
            phoneNum: '', 
            parking: '', 
            parkingNotes: '', 
            nearestHospital: { 
                name: '', 
                address: '', 
                phoneNum: ''
            }
        },
    }
    handleChange = (e) => { 
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render(){
        return(
        <div className="Create-CallSheet-Container">
            <h4>Create a New CallSheet</h4>
            <form onSubmit={(e) => this.props.addCallSheet(e, this.state)}>
                <segment className="create-crew">
                    <label><strong>Crew Overview</strong></label><br/>
                    <label>Department</label>
                    <input 
                        type="text" 
                        name="department" 
                        value={this.state.crew.department} placeholder="Crew Department"
                    />
                    <label>Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        value={this.state.crew.department}
                        placeholder="Crew Position"
                    />
                    <label>Crew Call Time</label>
                    <input 
                        type="text"
                        name="callTimes"
                        value={this.state.crew.callTimes}
                        placeholder="Call Time"
                    />    
                    <label>--Crew Contact Info--</label><br/>
                    <label>Crew Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.crew.contact.name}
                        placeholder="Crew Name"
                    />
                    <label>Crew Phone</label>
                    <input 
                        type="text" 
                        name="phoneNum" 
                        value={this.state.crew.contact.phone}
                        placeholder="Crew Phone #"
                    />
                    <label>Crew Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.crew.contact.email}
                        placeholder="Crew Email"
                    />
                </segment>

                <segment className="create-client">
                    <label><strong>Client Overview</strong></label><br/>
                    <label>Client Name</label>
                    <input 
                        type="text" 
                        name="Position" 
                        value={this.state.client.agency}
                        placeholder="Agency Name"
                    />
                    <label>Client Rep.</label>
                    <input 
                        type="text" 
                        name="Position" 
                        value={this.state.client.name}
                        placeholder="Client Rep Name"
                    />
                    <label>Client Phone</label>
                    <input 
                        type="text" 
                        name="Position" 
                        value={this.state.client.phoneNum}
                        placeholder="Client Phone #"
                    />
                </segment>

                <segment className="create-talent">
                    <label><strong>Talent</strong></label><br/>
                    <label>Talent Id</label>  
                    <input 
                        type="text" 
                        name="talentId" 
                        value={this.state.talent.talentId}
                        placeholder="Talent Id #"
                    />
                    <label>Talent Avatar</label>
                    <input 
                        type="text" 
                        name="avatar" 
                        value={this.state.talent.avatar}
                        placeholder="place avatar url here"
                    />
                     <label>Role</label>
                    <input 
                        type="text" 
                        name="role" 
                        value={this.state.talent.role}
                        placeholder="role"
                    />
                     <label>Background Talent?</label>
                    <input 
                        type="checkbox" 
                        name="isBgTalent" 
                        value={this.state.talent.isBgTalent}
                        placeholder=""
                    />
                    <label>--Talent Call Times--</label><br/>
                    <label>Pick Up Time</label>
                    <input 
                        type="text" 
                        name="pickUp" 
                        value={this.state.talent.callTimes.pickUp}
                        placeholder="Pick Up Time"
                    />
                      <label> Call Time</label>
                    <input 
                        type="text" 
                        name="call" 
                        value={this.state.talent.callTimes.call}
                        placeholder="Call Time"
                    />
                      <label>On Set Time</label>
                    <input 
                        type="text" 
                        name="onSet" 
                        value={this.state.talent.callTimes.onSet}
                        placeholder="On Set Time"
                    />
                </segment>    
                <segment className="create-schedule">
                    <label><strong>Shooting Schedule</strong></label><br/>
                    <label>Schedule Time</label>
                    <input 
                        type="text" 
                        name="time" 
                        value={this.state.schedule.time}
                        placeholder="Time"
                    />
                    <label>Scene Number</label>
                    <input 
                        type="text" 
                        name="sceneNum" 
                        value={this.state.schedule.sceneNum}
                        placeholder="Scene Number"
                    />
                    <label>Scene Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={this.state.schedule.description}
                        placeholder="Scene Description"
                    />
                    <label>Day or Night</label>
                    <input 
                        type="text" 
                        name="DorN" 
                        value={this.state.schedule.DorN}
                        placeholder="Day/Night"
                    />
                </segment>
                <segment className="shoot-location-overview"><strong>Shooting Location Overview</strong>
                    <label>Location Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.shootLocations.name}
                        placeholder="Location Name"
                    />
                    <label>Location Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.shootLocations.address}
                        placeholder="Location Address"
                    />
                    <label>Location Phone Number</label>
                    <input
                        type="text"
                        name="phoneNum"
                        value={this.state.shootLocations.phoneNum}
                        placeholder="Location Phone #"
                    />
                    <label>Parking Address</label>
                    <input
                        type="text"
                        name="parking"
                        value={this.state.shootLocations.parking}
                        placeholder="Parking Address"
                    />
                    <label>Parking Notes</label>
                    <input
                        type="text"
                        name="parkingNotes"
                        value={this.state.shootLocations.parkingNotes}
                        placeholder="Parking Notes"
                    />
                    <label><strong>Hospital Info</strong></label><br/>
                    <label>Hospital Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.shootLocations.nearestHospital.name}
                        placeholder="Hospital Name"
                    />
                    <label>Hospital Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.shootLocations.nearestHospital.address}
                        placeholder="Hospital Address"
                    />
                    <label>Hospital Phone Number</label>
                    <input
                        type="text"
                        name="phoneNum"
                        value={this.state.shootLocations.nearestHospital.phoneNum}
                        placeholder="Hospital Phone #"
                        />
                </segment>
                <button type='Submit'>Create CallSheet</button>
            </form>
        </div>    
        )
}}

export default CreateCallSheet;