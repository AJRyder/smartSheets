import React, { Component } from 'react'

class AddShootLocation extends Component { 
    state = { 
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
        }
    }

    handleChangeHospital = e => { 
        this.setState({
            ...this.state, 
            shootLocations: { 
                ...this.state.shootLocations, 
                nearestHospital: {
                    ...this.state.shootLocations.nearestHospital,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    handleChange = e => { 
        this.setState({
            ...this.state, 
            shootLocations: { 
                ...this.state.shootLocations, 
                [e.target.name]: e.target.value
            }
        })
    }
    addShootLocation = (e) => { 
        e.preventDefault()
        this.props.addToCallSheetLocation(this.state)
        this.setState({
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
            }
        })
    }

    render() {
        const { shootLocations } = this.state
        return (
            <form onSubmit={this.addShootLocation}>
                <input
                    type='text'
                    name='name'
                    value={shootLocations.name}
                    placeholder="Location Name"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='address'
                    value={shootLocations.address}
                    placeholder="Location Address"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='phoneNum'
                    value={shootLocations.phoneNum}
                    placeholder="Location Phone #"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='parking'
                    value={shootLocations.parking}
                    placeholder="Nearby Parking"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='parkingNotes'
                    value={shootLocations.parkingNotes}
                    placeholder="Parking Notes"
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='name'
                    value={shootLocations.nearestHospital.name}
                    placeholder="Nearby Hospital"
                    onChange={this.handleChangeHospital}
                />
                 <input
                    type='text'
                    name='address'
                    value={shootLocations.nearestHospital.address}
                    placeholder="Hospital Address"
                    onChange={this.handleChangeHospital}
                />
                 <input
                    type='text'
                    name='phoneNum'
                    value={shootLocations.nearestHospital.phoneNum}
                    placeholder="Hospital Phone #"
                    onChange={this.handleChangeHospital}
                />
                <button type='submit'>Add Shoot Location</button>
            </form>
        )
    }
}

export default AddShootLocation