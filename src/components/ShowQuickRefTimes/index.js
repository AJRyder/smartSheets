import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowQuickRefTimes = ({ quickRefTimes }) => {
    const columns = [{
        dataField: 'crewCall',
        text: 'Crew Call Time'
      },{
        dataField: 'shootingCall',
        text: 'Shooting Call Time'
      },{
        dataField: 'lunch',
        text: 'Lunch Time'
      },{
        dataField: 'secondMeal',
        text: '2nd Meal'
      },{
        dataField: 'estimatedWrap',
        text: 'Estimated Wrap Time'
      }
    ];

    return (
        <div className="CallSheet-Data">
            <h2>Quick Call Times</h2>
            <BootstrapTable 
                keyField='id' 
                data={ quickRefTimes } 
                columns={ columns } 
                cellEdit={ cellEditFactory({ 
                    mode: 'click',
                    blurToSave: true,
                    afterSaveCell: (oldValue, newValue, row) => {console.log(oldValue, newValue, row)} 
                })  
                    } />

        </div>
    )
}

export default ShowQuickRefTimes