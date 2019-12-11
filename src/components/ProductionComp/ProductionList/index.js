import React, { Component } from 'react'


function ProductionList(props) {
    console.log(props, "this is the props")
    const productions = props.productions.map((production) => {
        return( 
            <div key={production.id}>
                <div className="Production-Content">
                    <div className="Production-Info">
                        <div>{production.info.title}</div>
                        <div>{production.info.mediaType}</div>
                        <div>{production.info.logo}</div>
                        <div>{production.info.days}</div>
                        <div>{production.info.dayOutOfDays}</div>
                    </div>
                    <div className="Production-Company">
                        <div>{production.productionCo.name}</div>
                        <div>{production.productionCo.address}</div>
                        <div>{production.productionCo.phone}</div>
                        <div>{production.productionCo.logo}</div>
                    </div>
                    <div className="Point-of-Contact">
                        <div>{production.pointOfContact.name}</div>
                        <div>{production.pointOfContact.phoneNum}</div>
                    </div>
                    <div className="quick-reference-times">
                        <div>{production.quickRefTimes.crewCall}</div>
                        <div>{production.quickRefTimes.shootingCall}</div>
                        <div>{production.quickRefTimes.lunch}</div>
                        <div>{production.quickRefTimes.secondMeal}</div>
                        <div>{production.quickRefTimes.estimatedWrap}</div>
                    </div>
                    <div className='extras'>
                        <button onClick={() => this.state.deleteProduction(production.id)}>Delete Production</button>
                         <button onClick={() => this.state.openAndEdit(production)}>Edit Production</button>
                    </div>
                    <div className="all-callsheets"></div>
                        <div>{production.callSheetList}</div>
                </div>
            </div>
        )
    })
    return (
        <div>
            { productions }
        </div>
    )
 }

export default ProductionList