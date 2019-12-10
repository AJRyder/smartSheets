import React, {Component} from 'react'; 

class CreateProductionForm extends Component { 
    state = { 
        info: {
            title: '', 
            mediaType: '', 
            logo: '' 
        },
    
        productionCo: { 
            name: '', 
            address: '', 
            phoneNum: '', 
            logo: ''
        },
    
        pointOfContact: { 
            name: '', 
            phoneNum: '', 
        },
        callSheetList: []
    }
    handleChange = (e) => { 
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addProduction(this.state)
    }
    render() {
        return(
            <div className="Create-Production-Container">
            <h4>Create a New Production</h4>
            <form onSubmit={this.handleSubmit}>
                <segment className="create-production">
                    <label><strong>Production Overview</strong></label><br/>
                    <label>Production Title</label>
                    <input 
                        type="text" 
                        name="info.title" 
                        placeholder="Production Title"
                        onChange={this.handleChange}
                    />
                    <label>Media Type aka feature, music video, etc.</label>
                    <input 
                        type="text" 
                        name="info.mediaType" 
                        placeholder="Production Type"
                        onChange={this.handleChange}
                    />
                    <label>Production Logo/Graphic</label>
                    <input 
                        type="text" 
                        name="info.logo" 
                        placeholder="Production Logo/Graphic URL"
                        onChange={this.handleChange}
                    />
                </segment>

                <segment className="Production Co Data">
                    <label>Production Co. Name</label>   
                    <input 
                        type="text" 
                        name="productionCo.name"
                        placeholder="Production Co. Name"
                        onChange={this.handleChange}
                    />
                    <label>Production Co. Address</label>   
                    <input 
                        type="text" 
                        name="productionCo.address"
                        placeholder="Production Co. Address"
                        onChange={this.handleChange}
                    />
                    <label>Production Co. Phone</label>   
                    <input 
                        type="text" 
                        name="productionCo.phone"
                        placeholder="Production Co. Phone #"
                        onChange={this.handleChange}
                    />
                    <label>Production Co. Name</label>   
                    <input 
                        type="text" 
                        name="productionCo.logo"
                        placeholder="Production Co. Logo URL"
                        onChange={this.handleChange}
                    />
                </segment>  
                <segment className="PoC">
                    <label>Point of Contact</label>
                    <input
                        type="text"
                        name="pointOfContact.name"
                        placeholder="Company's Point of Contact"
                        onChange={this.handleChange}
                    />
                    <label>PoC Phone #</label>
                    <input
                        type="text"
                        name="pointOfContact.phoneNum"
                        placeholder="POC Phone #"
                        onChange={this.handleChange}
                    />
                </segment>
                <button type='Submit'>Create Production</button>
            </form>
        </div>
        )
    }
}


export default CreateProductionForm