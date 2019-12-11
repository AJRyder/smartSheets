import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowClient = ({client}) => {
    const columns = [{
        dataField: 'agency',
        text: 'Agency Name'
      },{
        dataField: 'name',
        text: 'Client/Rep Name'
      },{
        dataField: 'phoneNum',
        text: 'Rep/Agency Phone #'
      }
    ];
    

    return (
        <div className="CallSheet-Data">
            <h2>Agency Info</h2>
            <BootstrapTable 
                keyField='id' 
                data={ client } 
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

export default ShowClient