import React, { Component } from 'react'
import ProductionList from '../ProductionList'
import CreateProductionForm from '../CreateProductionForm'


class ProductionContainer extends Component { 
    state = { 
        "productions": [], 
        "productionToEdit": { 
            "info": {
                "title": '', 
                "mediaType": '', 
                "logo": '',
                "days": '', 
                "dOOD": '', 
            },
        
            "productionCo": { 
                "name": '', 
                "address": '', 
                "phoneNum": '', 
                "logo": ''
            },
        
            "pointOfContact": { 
                "name": '', 
                "phoneNum": '', 
            },
        
            "quickRefTimes": {
                "crewCall": '', 
                "shootingCall": '', 
                "lunch": '', 
                "secondMeal": '', 
                "estimatedWrap": ''
            },
            "showEditModal": false
        }
    }
    componentDidMount(){
        this.getProductions(); 
    }
    getProductions = async () => { 
        try { 
            const productions = await fetch(process.env.REACT_APP_API_URL + '/productions/', {
                credentials: 'include', 
                method: 'GET'
            });
            const parsedProductions = await productions.json(); 
            console.log(parsedProductions)
            this.setState({
                productions: parsedProductions.data
            })
        } catch(err){
            console.log(err)
        }
    }
    addProduction = async (production) => {

        console.log(production)
        try { 
            const createdProductionResponse = await(process.env.REACT_APP_API_URL + '/productions', {
                method: 'POST', 
                credentials: 'include', 
                body: JSON.stringify(production),
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            const parsedResponse = await createdProductionResponse.json(); 
            console.log(parsedResponse, ' this is response')
            console.log(createdProductionResponse)
            this.setState({
                productions: [...this.state.productions, parsedResponse.data]
            })
        } catch(err) {
            console.log(err)
        }
    }
    deleteProduction = async (id) => {
        console.log(id)
        const deleteProductionResponse = await fetch(process.env.REACT_APP_API_URL + '/auth/productions/' + id, {
                                                        method: 'DELETE', 
                                                        credentials: 'include'
        });
        const deleteProductionParsed = await deleteProductionResponse.json(); 
        console.log(deleteProductionResponse)
        this.setState({
            productions: this.state.productions.filter((production) => production.id !== id)
        })
    }
    closeAndEdit = async (e) => { 
        e.preventDefault(); 
        try { 
            const editResponse = await fetch(process.env.REACT_APP_API_URL + '/auth/productions/' + this.state.productionToEdit.id, {
                method: 'PUT', 
                body: JSON.stringify(this.state.productionToEdit), 
                headers: { 
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json(); 
            console.log(editResponseParsed, ' parsed edit')

            const newProductionArrayWithEdit = this.state.productions.map((production) => {
                if(production.id === editResponseParsed.data.id){
                    production = editResponseParsed.data
                }
                return production
            });
            this.setState({
                showEditModal: false, 
                productions: newProductionArrayWithEdit
            });
        } catch(err){
            console.log(err)
        }
    }
    openAndEdit = (productionFromTheList) => { 
        console.log(productionFromTheList, ' productionToEdit'); 
        this.setState({
            showEditModal: true, 
            productionToEdit: { 
                ...productionFromTheList
            }
        })
    }
    handleEditChange = (e) => { 
        this.setState({
            productionToEdit: { 
                ...this.state.productionToEdit, 
                [e.currentTarget.name]: e.currentTarget.value
            }
        });
    }
    render(){ 
        return (
            <div>
                <ProductionList 
                    productions={this.state.productions} 
                    deleteProduction={this.deleteProduction} 
                    openAndEdit={this.openAndEdit} 
                />
                <CreateProductionForm 
                    addProduction={this.addProduction}
                />
                {/* <EditCallSheetModal 
                    handleEditChange={this.handleEditChange} 
                    open={this.state.showEditModal} 
                    productionToEdit={this.state.productionToEdit} 
                    closeAndEdit={this.closeAndEdit}
                /> */}
            </div>
        )
    }
}
export default ProductionContainer 
