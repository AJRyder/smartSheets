import React, {Component} from 'react';
import CallSheetList from '../CallSheetList';
import CreateCallSheetForm from '../CreateCallSheetForm';


class CallSheetContainer extends Component { 
    state =  {
        callSheets: [], 
        callSheetToEdit: { 
            crew: { 
                department: '',
                position: '', 
                contact: { 
                    name: '', 
                    phoneNum: '', 
                    email: ''
                }   
            }, 
            client: { 
                agency: '', 
                name: '', 
                phoneNum: ''
            }, 
            talent: { 
                talentId: '', 
                avatar: '',
                role: '', 
                isBgTalent: null, 
                callTimes: { 
                    pickUp: '', 
                    call: '', 
                    onSet: ''
                } , 
                contact: { 
                    name: '', 
                    phoneNum: '', 
                    email: ''
                }
            }, 
            schedule: { 
                time: '', 
                sceneNum: '', 
                description: '', 
                DorN: ''
            }, 
            shootLocations: { 
                name: '', 
                address: '', 
                phoneNum: '', 
                parking: '', 
                parkingNotes: '', 
                nearestHospital: { 
                    name: '', 
                    address: '', 
                    phoneNum: ''
                }
            }, 
            showEditModal: false
        } 
    } //end of callsheet state

    componentDidMount(){
        this.getCallSheets();
    }

    getCallSheets = async () => { 
        try { 
            const callSheets = await fetch(process.env.REACT_APP_API_URL + '/auth/callsheets/'
            , { 
                credentials: 'include', 
                method: 'Get'
                });
                const parsedCallSheets = await callSheets.json(); 
                console.log(parsedCallSheets);
                this.setState({ 
                    callSheets: parsedCallSheets.data
                })
        } catch(err) {
            console.log(err);
        }
    }

    addCallSheet = async (e, callSheet) => { 
        e.preventDefault(); 
        console.log(callSheet);
        try { 
            const createdCallSheetResponse = await fetch(process.env.REACT_APP_API_URL + '/auth/callsheets/'
            , {
                method: 'POST', 
                credentials: 'include', 
                body: JSON.stringify(callSheet), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            }); 
            const parsedResponse = await createdCallSheetResponse.json(); 
            console.log(parsedResponse, ' this is response')
            this.setState({callSheets: [...this.state.callSheets, parsedResponse.data]})
        } catch(err) {
            console.log(err)
        }
    }
    deleteCallSheet = async (id) => {
        console.log(id)
        const deleteCallSheetResponse = await fetch(process.env.REACT_APP_API_URL + '/auth/callsheets/'+ id, {
                method: 'DELETE', 
                credentials: 'include'
            });
        const deleteCallSheetParsed = await deleteCallSheetResponse.json();
        console.log(deleteCallSheetResponse)    
        this.setState({callSheets: this.state.callSheets.filter((callSheet) => callSheet.id !== id )})
        console.log(deleteCallSheetParsed)
    }
    closeAndEdit = async (e) => {
        e.preventDefault(); 
        try { 
            const editResponse = await fetch(process.env.REACT_APP_API_URL + '/auth/callsheets/'+ this.state.callSheetToEdit.id, { 
                    method: 'PUT', 
                    body: JSON.stringify(this.state.callSheetToEdit), 
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                });
              
                const editResponseParsed = await editResponse.json();
                console.log(editResponseParsed, ' parsed edit')

                const newCallSheetArrayWithEdit = this.state.callSheets.map((callSheet) => { 
                    if(callSheet.id === editResponseParsed.data.id){
                        callSheet = editResponseParsed.data
                    }
                    return callSheet
                });
                this.setState({ 
                    showEditModal: false, 
                    callSheets: newCallSheetArrayWithEdit
                });
        } catch (err){ 
            console.log(err)
        }
    }
    openAndEdit = (callSheetFromTheList) => { 
        console.log(callSheetFromTheList, ' callSheetToEdit'); 
        this.setState({
            showEditModal: true, 
            callSheetToEdit: { 
                ...callSheetFromTheList
            }
        })
    }
    handleEditChange = (e) => { 
        this.setState({
            callSheetToEdit: { 
                ...this.state.callSheetToEdit, 
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    render(){
        return(
            <div>
                <CallSheetList callSheets={this.state.callSheets} deleteCallSheet={this.deleteCallSheet} openAndEdit={this.openAndEdit}/>
                <CreateCallSheetForm addCallSheet={this.addCallSheet}/>
                {/* <EditCallSheetModal 
                    handleEditChange={this.handleEditChange} 
                    open={this.state.showEditModal} 
                    callSheetToEdit={this.state.callSheetToEdit} 
                    closeAndEdit={this.closeAndEdit}
                /> */}
            </div> 

        )
    }
}
export default CallSheetContainer
