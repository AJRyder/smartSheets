import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowDayCount = ({dayCount}) => {
    const columns = [{
        dataField: 'totalDays',
        text: 'Total Days'
      },{
        dataField: 'dOOD',
        text: 'Day Out of Days'
      }
    ];
    

    return (
        <div>
            <h2>Days</h2>
            <BootstrapTable 
                keyField='id' 
                data={ dayCount } 
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

export default ShowDayCount