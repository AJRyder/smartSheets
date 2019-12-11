import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowSchedule = ({schedule}) => {
    const columns = [{
        dataField: 'time',
        text: 'Time'
      },{
        dataField: 'sceneNum',
        text: 'Scene #'
      },{
        dataField: 'description',
        text: 'Description'
      },{
        dataField: 'DorN',
        text: 'D/N?'
      },
    ];
    

    return (
        <div>
            <h2>Schedule</h2>
            <BootstrapTable 
                keyField='id' 
                data={ schedule } 
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

export default ShowSchedule