import React, {Component} from 'react'; 

import AddCrew from '../../AddCrew';
import AddTalent from '../../AddTalent';
import AddShootLocation from '../../AddShootLocation';
import AddSchedule from '../../AddSchedule';
import AddClient from '../../AddClient';
import AddQuickRefTimes from '../../AddQuickRefTimes';
import AddDayCount from '../../AddDayCount';

import ShowCrew from "../../ShowCrew";
import ShowTalent from '../../ShowTalent';
import ShowSchedule from '../../ShowSchedule';
import ShowShootLocation from '../../ShowShootLocation';
import ShowClient from '../../ShowClient';
import ShowQuickRefTimes from '../../ShowQuickRefTimes';
import ShowDayCount from '../../ShowDayCount';

class CreateCallSheet extends Component { 

    state = {
            crew: [], 
            talent: [], 
            shootLocations: [], 
            schedule: [], 
            client: [], 
            quickRefTimes: '', 
            dayCount: ''
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
    addToCallSheetQuickRefTimes = quickRefTimes => {
        this.setState({
            quickRefTimes: [...this.state.quickRefTimes, quickRefTimes]
        })
    }
    addToCallSheetDayCount = dayCount => { 
        this.setState({
            dayCount: [...this.state.dayCount, dayCount]
        })
    }

    doAddCallSheet = async () => {
        const callsheet = await fetch(`/callsheets`, {
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
              },
        })
    }
    render() {
        console.log(this.state)
            
            return (
                
            <div>
                <form onSubmit={(e) => this.props.addCallSheet(e, this.state)}>
                    <button className="SubmitBtn" type="submit">Create CallSheet</button>
                </form>
                <div className="CallSheetDisplay table-striped">
                    <div>
                        <ShowDayCount dayCount={this.state.dayCount}/>
                        <AddDayCount addToCallSheetDayCount={this.addToCallSheetDayCount}/>
                    </div>
                        <ShowQuickRefTimes quickRefTimes={this.state.quickRefTimes}/>
                        <AddQuickRefTimes addToCallSheetQuickRefTimes={this.addToCallSheetQuickRefTimes}/>
                    <div>
                        <ShowClient client={this.state.client}/>
                        <AddClient addToCallSheetClient={this.addToCallSheetClient}/>
                    </div>
                    <div>
                        <ShowShootLocation shootLocations={this.state.shootLocations}/>
                        <AddShootLocation addToCallSheetLocation={this.addToCallSheetLocation}/>
                    </div>
                    <div>
                        <ShowSchedule schedule={this.state.schedule}/>
                        <AddSchedule addToCallSheetSchedule={this.addToCallSheetSchedule}/>
                    </div>
                    <div>
                        <ShowCrew crew={this.state.crew} />
                        <AddCrew addToCallSheetCrew={this.addToCallSheetCrew}/>
                    </div>
                    <div>
                        <ShowTalent talent={this.state.talent}/>
                        <AddTalent addToCallSheetTalent={this.addToCallSheetTalent}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateCallSheet;