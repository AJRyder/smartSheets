import React, {Component} from 'react'; 

class CreateTalent extends Component { 
    state={
        "talent": [{ 
            "talentId": '', 
            "avatar": '',
            "role": '', 
            "isBgTalent": '', 
            "callTimes": { 
                "pickUp": '', 
                "call": '', 
                "onSet": ''
            } , 
            "contact": { 
                "name": '', 
                "phoneNum": '', 
                "email": ''
            }
        }]
    }
    handleChangeTalent = e => { 
        this.setState({
            ...this.state, 
            talent: {
                
            }
        })
    }
}