import React, {Component} from 'react';
import CreateCrew from '../CreateCrew';

class CrewContainer extends Component {
    state={
        "crew": [{
            "department": '',
            "position": '', 
            "contact": { 
                "name": '', 
                "phoneNum":'', 
                "email": ''
            }   
        }]
    }
    componentDidMount(){
        this.getCrew()
    }

    getCrew = async () => { 
        try {
            const crews = await fetch('/callsheets'
            ,{ 
                credentials: 'include', 
                method: 'GET'
            });
            const parsedCrews = await crews.json();
            console.log(parsedCrews)
            this.setState({
                crews: parsedCrews.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    addCrew = async (crew) => { 
        console.log(crew)
        try { 
            const createdCrewResponse = await fetch('/callsheets'
            , {
                method: 'POST',
                credentials: 'include', 
                body: JSON.stringify(crew),
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            console.log(createdCrewResponse)
            const parsedResponse = await createdCrewResponse.json();
            console.log(parsedResponse, ' this is the resssssponse')
        } catch(err) {
            console.log(err)
            console.log(crew)
        }
    }
    deleteCrew = async (_id) => { 
        console.log(_id)
        const deleteCrewResponse = await fetch(`/callsheets/'${_id}`
        , {
            method: 'DELETE',
            credentials: 'include'
        });
        const deleteCrewParsed = await deleteCrewResponse.json();
        console.log(deleteCrewResponse)
        this.setState({
            crews: this.state.crews.filter((crew) => crew._id !== _id)
        })
        console.log(deleteCrewParsed)
    }
    closeAndEdit = async (e) => {
        e.preventDefault(); 
        try { 
            const editResponse = await fetch(`/callsheets/${this.state.crewToEdit.id}`
            , { 
                method: 'PUT', 
                body: JSON.stringify(this.state.crewToEdit), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json();
            console.log(editResponseParsed, ' parsed edit')

            const newCrewArrayWithEdit = this.state.crews.map((crew) => { 
                if(crew._id === editResponseParsed.data.id){
                    crew = editResponseParsed.data
                }
                return crew
            });
            this.setState({ 
                showEditModal: false, 
                crews: newCrewArrayWithEdit
            });
              
        } catch (err){ 
            console.log(err)
        }
    }
    openAndEdit = (crewFromTheList) => { 
        console.log(crewFromTheList, ' crewToEdit'); 
        this.setState({
            showEditModal: true, 
            crewToEdit: { 
                ...crewFromTheList
            }
        })
    }
    handleEditChange = (e) => { 
        this.setState({
            crewToEdit: { 
                ...this.state.crewToEdit, 
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    render(){
        return(
            <div>
                I'm the crew container 
                <CreateCrew addCrew={this.addCrew}/>
            </div>
        )
    }
}

export default CrewContainer