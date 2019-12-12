import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowCrew = ({crew}) => {
    const columns = [
      {
        dataField: 'department',
        text: 'Department'
      },{
        dataField: 'position',
        text: 'Position'
      },{
        dataField: 'contact.name',
        text: 'Name'
      },{
        dataField: 'contact.phoneNum',
        text: 'Phone Number'
      },{
        dataField: 'contact.email',
        text: 'Email'
      }
    ];
    

    return (
      <div className="CallSheet-Data">
            <h2>Crew</h2>
            <BootstrapTable 
                keyField='id' 
                data={ crew } 
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

export default ShowCrew