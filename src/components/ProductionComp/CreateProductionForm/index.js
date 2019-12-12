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
                    <label>Production Title</label><br/>
                    <input 
                        type="text" 
                        name="info.title" 
                        placeholder="Production Title"
                        onChange={this.handleChange}
                    /><br/>
                    <label>Media Type aka feature, music video, etc.</label><br/>
                    <input 
                        type="text" 
                        name="info.mediaType" 
                        placeholder="Production Type"
                        onChange={this.handleChange}
                    /><br/>
                    <label>Production Logo/Graphic</label><br/>
                    <input 
                        type="text" 
                        name="info.logo" 
                        placeholder="Production Logo/Graphic URL"
                        onChange={this.handleChange}
                    /><br/>
                </segment>

                <segment className="Production Co Data">
                    <label>Production Co. Name</label> <br/>  
                    <input 
                        type="text" 
                        name="productionCo.name"
                        placeholder="Production Co. Name"
                        onChange={this.handleChange}
                    /><br/>
                    <label>Production Co. Address</label> <br/>  
                    <input 
                        type="text" 
                        name="productionCo.address"
                        placeholder="Production Co. Address"
                        onChange={this.handleChange}
                    /><br/>
                    <label>Production Co. Phone</label> <br/>  
                    <input 
                        type="text" 
                        name="productionCo.phone"
                        placeholder="Production Co. Phone #"
                        onChange={this.handleChange}
                    /><br/>
                    <label>Production Co. Name</label>  <br/> 
                    <input 
                        type="text" 
                        name="productionCo.logo"
                        placeholder="Production Co. Logo URL"
                        onChange={this.handleChange}
                    /><br/>
                </segment>  
                <segment className="PoC">
                    <label>Point of Contact</label><br/>
                    <input
                        type="text"
                        name="pointOfContact.name"
                        placeholder="Company's Point of Contact"
                        onChange={this.handleChange}
                    /><br/>
                    <label>PoC Phone #</label><br/>
                    <input
                        type="text"
                        name="pointOfContact.phoneNum"
                        placeholder="POC Phone #"
                        onChange={this.handleChange}
                    /><br/>
                </segment>
                <button type='Submit'>Create Production</button>
            </form>
        </div>
        )
    }
}


export default CreateProductionForm