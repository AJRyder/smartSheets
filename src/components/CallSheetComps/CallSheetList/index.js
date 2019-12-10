import React, { Component } from 'react'



function CallSheetList(props){
    console.log(props, "this is the props")
   const callSheets = props.callSheets.map((callSheet) => {
        return ( 
                
                <div key={callSheet.id}>
                   
                    <div className="CallSheet-Content">
                        <div className="Crew-Overview">
                            <div>{callSheet.crew.department}</div>
                            <div>{callSheet.crew.position}</div>
                            <div>{callSheet.crew.callTimes}</div>
                            <div className="Crew-Contact">
                                <div>{callSheet.crew.contact.name}</div>
                                <div>{callSheet.crew.contact.phoneNum}</div>
                                <div>{callSheet.crew.contact.email}</div>
                            </div>
                        </div>
                        <div className="Client-Overview">
                            <div>{callSheet.client.agency}</div>
                            <div>{callSheet.client.name}</div>
                            <div>{callSheet.client.phoneNum}</div>
                        </div>
                        <div className="Talent-Overview">
                            <div>{callSheet.talent.talentId}</div>
                            <div>{callSheet.talent.avatar}</div>
                            <div>{callSheet.talent.role}</div>
                            <div>{callSheet.talent.isBgTalent}</div>
                            <div className="Talent-CallTimes">
                                <div>{callSheet.talent.callTimes.pickUp}</div>
                                <div>{callSheet.talent.callTimes.call}</div>
                                <div>{callSheet.talent.callTimes.onSet}</div>
                            </div>
                            <div className="Talent-Contact">
                                <div>{callSheet.talent.contact.name}</div>
                                <div>{callSheet.talent.contact.phone}</div>
                                <div>{callSheet.talent.contact.email}</div>
                            </div>
                        </div>
                        <div className="Schedule-Overview">
                            <div>{callSheet.schedule.time}</div>
                            <div>{callSheet.schedule.sceneNum}</div>
                            <div>{callSheet.schedule.description}</div>
                            <div>{callSheet.schedule.DorN}</div>
                        </div>
                        <div className="Shoot-Locations-Overview">
                            <div>{callSheet.shootLocations.name}</div>
                            <div>{callSheet.shootLocations.address}</div>
                            <div>{callSheet.shootLocations.phoneNum}</div>
                            <div>{callSheet.shootLocations.parking}</div>
                            <div>{callSheet.shootLocations.parkingNotes}</div>
                            <div className="Shoot-Locations-Hospital-Overview">
                                <div>{callSheet.shootLocations.nearestHospital.name}</div>
                                <div>{callSheet.shootLocations.nearestHospital.address}</div>
                                <div>{callSheet.shootLocations.nearestHospital.phoneNum}</div>
                            </div>
                        </div>
                        <div classname="Quick-Reference-Times">
                            <div>{callSheet.quickRefTimes.crewCall}</div>
                            <div>{callSheet.quickRefTimes.shootingCall}</div>
                            <div>{callSheet.quickRefTimes.lunch}</div>
                            <div>{callSheet.quickRefTimes.secondMeal}</div>
                            <div>{callSheet.quickRefTimes.estimatedWrap}</div>
                        </div>
                        <div classname="Day-Count">
                            <div>{callSheet.dayCount.totalDays}</div>
                            <div>{callSheet.dayCount.dOOD}</div>
                        </div>
                    </div>
                    <div className='extras'>
                        <button onClick={() => this.state.deleteCallSheet(callSheet.id)}>Delete CallSheet</button>
                         <button onClick={() => this.state.openAndEdit(callSheet)}>Edit CallSheet</button>
                    </div>
                    
                </div>
            )
        })
        console.log(props, "this is the props")
        return (
            <div>
                Yo I'm the callsheetList
                { callSheets }
            </div>
    )
}


export default CallSheetList