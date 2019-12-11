import React, {Component} from 'react'; 
import AddCrew from '../../AddCrew';
import AddTalent from '../../AddTalent';
import AddShootLocation from '../../AddShootLocation';
import AddSchedule from '../../AddSchedule';
import AddClient from '../../AddClient';
import ShowCrew from "../../ShowCrew";
import ShowTalent from '../../ShowTalent'
import ShowSchedule from '../../ShowSchedule'
import ShowShootLocation from '../../ShowShootLocation'
import ShowClient from '../../ShowClient'

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
                <div className="CallSheetDisplay">
                    <ShowClient client={this.state.client}/>
                    <AddClient addToCallSheetClient={this.addToCallSheetClient}/>
                    <ShowShootLocation shootLocations={this.state.shootLocations}/>
                    <AddShootLocation addToCallSheetLocation={this.addToCallSheetLocation}/>
                    <ShowSchedule schedule={this.state.schedule}/>
                    <AddSchedule addToCallSheetSchedule={this.addToCallSheetSchedule}/>
                    <ShowCrew crew={this.state.crew} />
                    <AddCrew addToCallSheetCrew={this.addToCallSheetCrew}/>
                    <ShowTalent talent={this.state.talent}/>
                    <AddTalent addToCallSheetTalent={this.addToCallSheetTalent}/>
                </div>
                <form onSubmit={(e) => this.props.addCallSheet(e, this.state)}>
                    <button type="submit">create CallSheet</button>
                </form>
            </div>
        )
    }

}

export default CreateCallSheet;