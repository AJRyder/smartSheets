import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const ShowShootLocation = ({shootLocations}) => {
    const columns = [{
        dataField: 'name',
        text: 'Loc. Name'
      },{
        dataField: 'address',
        text: 'Loc. Address'
      },{
        dataField: 'phoneNum',
        text: 'Loc. Phone #'
      },{
        dataField: 'parking',
        text: 'Parking'
      },{
        dataField: 'parkingNotes',
        text: 'Parking Notes'
      },{
        dataField: 'nearestHospital.name',
        text: 'Nearest Hospital'
      },{
        dataField: 'nearestHospital.address',
        text: 'Hospital Address'
      },{
        dataField: 'nearestHospital.phoneNum',
        text: 'Hospital Phone #'
      },  
    ];
  

    return (
      <div className="CallSheet-Data">
            <h2>Shooting Locations</h2>
            <BootstrapTable 
                keyField='id' 
                data={ shootLocations } 
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

export default ShowShootLocation