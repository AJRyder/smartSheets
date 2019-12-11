import React, {Component} from 'react'; 
import AddCrew from '../../AddCrew';
import AddTalent from '../../AddTalent';
import AddShootLocation from '../../AddShootLocation';
import AddSchedule from '../../AddSchedule';
import AddClient from '../../AddClient';
import ShowCrew from "../../ShowCrew";

class CreateCallSheet extends Component { 

    state = {
            crew: [], 
            talent: [], 
            shootLocations: [], 
            schedule: [], 
            client: []
    }

    getCallsheet = async(e) => {
        console.log("button is working")
        const findCallsheet = await (await fetch(`/callsheets`)).json()
        console.log(findCallsheet)
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
            shootLocations: [...this.state.shootLocations, shootLocations.shootLocations]
        })
    }
    addToCallSheetSchedule = schedule => { 
        this.setState({
            schedule: [...this.state.schedule, schedule]
        })
    }
    addToCallSheetClient = client => { 
        this.setState({
            client: [...this.state.client, client]
        })
    }

    doAddCallSheet = async () => {
        const callsheet = await fetch(`/callsheets`, {
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
    }
    render() {
        console.log(this.state)
            
            return (
                
            <div>
                <div className="CrewDisplay">
                    {/* {
                        this.state.crew.map(c => {
                           return <div>{c.department}{c.position}</div>         
                        })
                    } */}
                    <ShowCrew crew={this.state.crew} />
                </div>
                {/* <div className="CrewDisplay">
                    {
                        this.state.crew.map(c => {
                           return <div>{c.crew.position}</div>               
                        })
                    }
                </div> */}
                {/* <div className="CrewDisplay">
                    {
                        this.state.crew.map(c => {
                           return <div>{c.contact.name}{c.contact.phoneNum}{c.contact.email}</div>                             
                        })
                    }
                </div> */}
         
                    <AddCrew addToCallSheetCrew={this.addToCallSheetCrew}/>
                    <AddTalent addToCallSheetTalent={this.addToCallSheetTalent}/>             
                    <AddShootLocation addToCallSheetLocation={this.addToCallSheetLocation}/>
                    <AddSchedule addToCallSheetSchedule={this.addToCallSheetSchedule}/>
                    <AddClient addToCallSheetClient={this.addToCallSheetClient}/>
                <form onSubmit={(e) => this.props.addCallSheet(e, this.state)}>
                    <button type="submit">create CallSheet</button>
                </form>
                {/* <button onClick={this.doAddCallSheet}>Test</button> */}
            </div>
        )
    }

}

export default CreateCallSheet;