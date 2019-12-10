import React, {Component} from 'react'; 
import ReactDataGrid from 'react-data-grid'
import AddCrew from '../../AddCrew'
import AddTalent from '../../AddTalent';
import AddShootLocation from '../../AddShootLocation'


class CreateCallSheet extends Component { 

    state = {
        crew: [], 
        talent: [], 
        shootLocations: []
    }

    addToCallSheetCrew = crew => {
        this.setState({
            crew: [...this.state.crew, crew]
        })
    }
    addToCallSheetTalent = talent => {
        this.setState({
            talent: [...this.state.talent, talent]
        })
    }
    addToCallSheetLocation = shootLocations => {
        this.setState({
            shootLocations: [...this.state.shootLocations, shootLocations]
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <AddCrew addToCallSheetCrew={this.addToCallSheetCrew}/>
                <AddTalent addToCallSheetTalent={this.addToCallSheetTalent}/>             
                <AddShootLocation addToCallSheetLocation={this.addToCallSheetLocation}/>
                <button>create CallSheet</button>
            </div>
        )
    }
    // state = { 
    //    "crew": { 
    //         "department": '',
    //         "position": '', 
    //         "contact": { 
    //             "name": '', 
    //             "phoneNum": '', 
    //             "email": ''
    //         }   
    //     }, 
    //     "client": { 
    //         "agency": '', 
    //         "name": '', 
    //         "phoneNum": ''
    //     }, 
    //     "talent": { 
    //         "talentId": '', 
    //         "avatar": '',
    //         "role": '', 
    //         "isBgTalent": '', 
    //         "callTimes": { 
    //             "pickUp": '', 
    //             "call": '', 
    //             "onSet": ''
    //         } , 
    //         "contact": { 
    //             "name": '', 
    //             "phoneNum": '', 
    //             "email": ''
    //         }
    //     }, 
    //     "schedule": { 
    //         "time": '', 
    //         "sceneNum": '', 
    //         "description": '', 
    //         "DorN": ''
    //     }, 
    //     "shootLocations": { 
    //         "name": '', 
    //         "address": '', 
    //         "phoneNum": '', 
    //         "parking": '', 
    //         "parkingNotes": '', 
    //         "nearestHospital": { 
    //             "name": '', 
    //             "address": '', 
    //             "phoneNum": ''
    //         }
    //     },
    // }
    // handleChange = (e) => { 
    //     this.setState({
    //         [e.currentTarget.name]: e.currentTarget.value
    //     })
    // }

    // handleChangeCrew = e => {
    //     // check if it needs to be stored in contact
    //     this.setState({
    //             ...this.state,
    //             crew: {
    //                 ...this.state.crew,
    //                 contact: {
    //                     ...this.state.crew.contact,
    //                     [e.target.name]: e.target.value
    //                 }
    //             }
    //     })
    //     this.setState({
    //         ...this.state,
    //         crew: {
    //             ...this.state.crew,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.addCallSheet(this.state)
    // }

    // render(){
    //     return(
    //     <div className="Create-CallSheet-Container">
        
            
    //     <h4>Create a New CallSheet</h4>
    //         <form onSubmit={this.handleSubmit}>
    //             <segment className="create-client">
    //                 <label><strong>Client Overview</strong></label><br/>
    //                 <label>Client Name</label>
    //                 <input 
    //                     type="text" 
    //                     name="client.agency" 
    //                     placeholder="Agency Name"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Client Rep.</label>
    //                 <input 
    //                     type="text" 
    //                     name="client.name" 
    //                     placeholder="Client Rep Name"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Client Phone</label>
    //                 <input 
    //                     type="text" 
    //                     name="client.phoneNum" 
    //                     placeholder="Client Phone #"
    //                     onChange={this.handleChange}
    //                 />
    //             </segment><br/>

    //             <segment className="create-talent">
    //                 <label><strong>Talent</strong></label><br/>
    //                 <label>Talent Id</label>  
    //                 <input 
    //                     type="text" 
    //                     name="talent.talentId" 
    //                     placeholder="Talent Id #"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Talent Avatar</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.avatar" 
    //                     placeholder="place avatar url here"
    //                     onChange={this.handleChange}
    //                 />
    //                  <label>Role</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.role" 
    //                     placeholder="role"
    //                     onChange={this.handleChange}
    //                 /><br/>
    //                  <label>Background Talent?</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.isBgTalent" 
    //                     placeholder="Is Background Talent?"
    //                     onChange={this.handleChange}
    //                 /><br/>
    //                 <label><strong>--Talent Call Times--</strong></label><br/>
    //                 <label>Talent Pick Up Time</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.callTimes.pickUp" 
    //                     placeholder="Pick Up Time"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label> Talent Call Time</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.callTimes.call" 
    //                     placeholder="Call Time"
    //                     onChange={this.handleChange}
    //                 />
    //                   <label>Talent On Set Time</label>
    //                 <input 
    //                     type="text" 
    //                     name="talent.callTimes.onSet"
    //                     placeholder="On Set Time"
    //                     onChange={this.handleChange}
    //                 /><br/>
    //                 <label><strong>Talent Contact</strong></label><br/>
    //                 <label>Talent Name</label>
    //                 <input
    //                     type="text"
    //                     name="talent.contact.name"
    //                     placeholder="Talent Name"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Talent Phone Number</label>
    //                 <input
    //                     type="text"
    //                     name="talent.contact.phoneNum"
    //                     placeholder="Talent Phone #"
    //                     onChange={this.handleChange}
    //                 />
    //                   <label>Talent Email</label>
    //                 <input
    //                     type="text"
    //                     name="talent.contact.email"
    //                     placeholder="Talent Email"
    //                     onChange={this.handleChange}
    //                 />
    //             </segment><br/>

    //             <segment className="create-schedule">
    //                 <label><strong>Shooting Schedule</strong></label><br/>
    //                 <label>Schedule Time</label>
    //                 <input 
    //                     type="text" 
    //                     name="schedule.time" 
    //                     placeholder="Time"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Scene Number</label>
    //                 <input 
    //                     type="text" 
    //                     name="schedule.sceneNum" 
    //                     placeholder="Scene Number"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Scene Description</label>
    //                 <input 
    //                     type="text" 
    //                     name="schedule.description" 
    //                     placeholder="Scene Description"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Day or Night</label>
    //                 <input 
    //                     type="text" 
    //                     name="schedule.DorN" 
    //                     placeholder="Day/Night"
    //                     onChange={this.handleChange}
    //                 />
    //             </segment><br/>
    //             <segment className="shoot-location-overview"><strong>Shooting Location Overview</strong><br/>
    //                 <label>Location Name</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.name"
    //                     placeholder="Location Name"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Location Address</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.address"
    //                     placeholder="Location Address"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Location Phone Number</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.phoneNum"
    //                     placeholder="Location Phone #"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Parking Address</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.parking"
    //                     placeholder="Parking Address"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Parking Notes</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.parkingNotes"
    //                     placeholder="Parking Notes"
    //                     onChange={this.handleChange}
    //                 /><br/>
    //                 <label><strong>Hospital Info</strong></label><br/>
    //                 <label>Hospital Name</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.nearestHospital.name"
    //                     placeholder="Hospital Name"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Hospital Address</label>
    //                 <input
    //                     type="text"
    //                     name="shootLocations.nearestHospital.address"
    //                     placeholder="Hospital Address"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Hospital Phone Number</label>
    //                 <input
    //                     type="text"
    //                     name="shootingLocations.nearestHospital.phoneNum"
    //                     placeholder="Hospital Phone #"
    //                     onChange={this.handleChange}
    //                     />
    //             </segment><br/>
    //             <segment className="create-quickRefTimes">
    //                 <label>General Crew Call</label>
    //                 <input 
    //                     type='text'
    //                     name='quickRefTimes.crewCall'
    //                     placeholder="General Crew Call"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Shooting Call Time </label>
    //                 <input 
    //                     type='text'
    //                     name='quickRefTimes.shootingCall'
    //                     placeholder="Shooting Call Time"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Lunch Time</label>
    //                 <input 
    //                     type='text'
    //                     name='quickRefTimes.lunch'
    //                     placeholder="Lunch Time"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Second Meal Time</label>
    //                 <input 
    //                     type='text'
    //                     name='quickRefTimes.secondMeal'
    //                     placeholder="Second Meal"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Estimated Wrap Time</label>
    //                 <input 
    //                     type='text'
    //                     name='quickRefTimes.estimatedWrap'
    //                     placeholder="Estimated Wrap time"
    //                     onChange={this.handleChange}
    //                 />
    //             </segment>
    //             <segment className="create-dayCount">
    //                 <label>Total Days</label>
    //                 <input 
    //                     type="text"
    //                     name="dayCount.totalDays"
    //                     placeholder="total days"
    //                     onChange={this.handleChange}
    //                 />
    //                 <label>Day Out of Days</label>
    //                     <input 
    //                     type="text"
    //                     name="dayCount.totalDays"
    //                     placeholder="total days"
    //                     onChange={this.handleChange}
    //                 />
    //             </segment>
    //             <button type='Submit'>Create CallSheet</button>
    //         </form>
    //     </div>    
    //     )
// }
}

export default CreateCallSheet;