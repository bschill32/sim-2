import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }

    getAllHouses = () => {
        axios.get('/api/homes/').then(results => {
            this.setState({
                houses: results.data
            })
        }).catch(err => {
            console.log('Error on frontend', err)
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/homes/${id}`).then(results => {
            this.setState({
                houses: results.data
            })
        })
    }

    componentDidMount() {
        this.getAllHouses()
    }
    
    render() {
        console.log(this.props)
        let allHouses = this.state.houses.map((e, i) => {
            return (
                <div>
                    <House 
                        key={i}
                        name={e.name}
                        address={e.address}
                        city={e.city}
                        state={e.state}
                        zip={e.zip}>
                    </House>
                    <button onClick={() => this.deleteHouse(e.id)}>Delete Property</button>
                </div>
            )
        })

        return(
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {allHouses}
            </div>
        )
    }
}

export default Dashboard