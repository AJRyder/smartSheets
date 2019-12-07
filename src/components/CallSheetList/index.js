import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

import {CALLSHEETS} from '../../constants/routes'

function CallSheets(props) {
    const callSheets = props.callSheets.map((callsheet) => {
        return( 
            <div key={callsheet.id}></div>
                <div className="CallSheetContent">
                    
                </div>
        )
    })
 }
    

export default CallSheets