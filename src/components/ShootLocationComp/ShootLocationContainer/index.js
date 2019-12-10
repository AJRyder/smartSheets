import React, {Component} from 'react'
import CreateShootLocation from '../CreateShootLocation'

class ShootLocationContainer extends Component { 
    state={ 
        "shootLocations": { 
            "name": '', 
            "address": '', 
            "phoneNum": '', 
            "parking": '', 
            "parkingNotes": '', 
            "nearestHospital": { 
                "name": '', 
                "address": '', 
                "phoneNum": ''
            }
        }
    }
    componentDidMount(){
        this.getShootLocation()
    }
    getShootLocation = async () => {
        try { 
            const shootLocations = await fetch('/callsheets'
            ,{
                credentials: 'include', 
                method: 'GET'
            });
            const parsedShootLocations = await shootLocations.json();
            console.log(parsedShootLocations)
            this.setState({
                shootLocations: parsedShootLocations.data
            })
        } catch(err) {
            console.log(err)
        }
    }
    addShootLocation = async (shootLocation) => {
        console.log(shootLocation)
        try { 
            const createdShootLocationResponse = await fetch('/callsheets'
            , {
                method: 'POST', 
                credentials: 'include', 
                body: JSON.stringify(shootLocation), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            console.log(createdShootLocationResponse)
            const parsedResponse = await createdShootLocationResponse.json()
            console.log(parsedResponse, ' this is the response')
        } catch(err) {
            console.log(err)
            console.log(crew)
        }
    }
    deleteShootLocation = async (_id) => { 
        console.log(_id)
        const deleteShootLocationResponse = await fetch(`/callsheets/${_id}`
        , {
            method: 'DELETE', 
            credentials: 'include'
        });
        const deleteShootLocationParsed = await deleteShootLocationResponse.json();
        console.log(deleteShootLocationResponse)
        this.setState({
            shootLocations: this.state.shootLocations.filter((crew) => crew._id !== _id)
        })
        console.log(deleteShootLocationParsed)
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try { 
            const editResponse = await fetch(`/callsheets/${this.state.shootLocationToEdit.id}`
            , { 
                method: 'PUT', 
                body: JSON.stringify(this.state.shootLocationToEdit), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json();
            console.log(editResponseParsed, ' parsed edit')

            const newShootLocationArrayWithEdit = this.state.shootLocation.map((shootLocation) => { 
                if(crew._id === editResponseParsed.data.id){
                    crew = editResponseParsed.data
                }
                return shootLocation
            });
            this.setState({ 
                showEditModal: false, 
                shootLocations: newShootLocationArrayWithEdit
            });
              
        } catch (err){ 
            console.log(err)
        }
    }
    openAndEdit = (shootLocationFromTheList) => { 
        console.log(shootLocationFromTheList, ' shootLocationToEdit'); 
        this.setState({
            showEditModal: true, 
            shootLocationToEdit: { 
                ...shootLocationFromTheList
            }
        })
    }
    handleEditChange = (e) => { 
        this.setState({
            shootLocationToEdit: { 
                ...this.state.shootLocationToEdit, 
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    render(){
        return(
            <div>
                I'm the Shooting Location container 
                <CreateShootLocation addShootLocation={this.addShootLocation}/>
            </div>
        )
    }
}

export default ShootLocationContainer