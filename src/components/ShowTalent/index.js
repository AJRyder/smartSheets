import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowTalent = ({talent}) => {
    const columns = [{
        dataField: 'talentId',
        text: 'Cast ID #'
      },{
        dataField: 'avatar',
        text: 'Avatar'
      },{
        dataField: 'role',
        text: 'Role'
      },{
        dataField: 'isBgTalent',
        text: 'Is BG Talent?'
      },{
        dataField: 'callTimes.pickUp',
        text: 'Pick Up Time'
      },{
        dataField: 'callTimes.call',
        text: 'Call Time'
      },{
        dataField: 'callTimes.onSet',
        text: 'On Set Time'
      },{
        dataField: 'contact.name',
        text: 'Name'
      },{
        dataField: 'contact.phoneNum',
        text: 'On Set Time'
      },{
        dataField: 'contact.email',
        text: 'On Set Time'
      }
    
    ];
    

    return (
      <div className="CallSheet-Data">
            <h2>Talent</h2>
            <BootstrapTable 
                keyField='id' 
                data={ talent } 
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

export default ShowTalent