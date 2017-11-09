import React, { Component } from 'react';
import axios from 'axios';
import CountrySelect from './CountrySelect';
import intersection from '../utils/intersection';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: {},
            selectedCountries: [],
            intersection: []
        }
        this.selectCountry = this.selectCountry.bind(this);
        this.checkIntersection = this.checkIntersection.bind(this);
    }

    componentDidMount(){
        axios.get('/api/nationalities')
            .then(({ data: countries }) => {
                this.setState({ countries });
            })
    }

    selectCountry(country){
        let selectedCountries = this.state.selectedCountries.slice();
        selectedCountries.push(country); 
        this.setState({
            selectedCountries
        })
    }

    checkIntersection(e){
        e.preventDefault();
        let boundState = this.state;
        let intersect = intersection(boundState.selectedCountries.map(country => boundState.countries[country]));
        this.setState({
            intersection: intersect
        })
        
    }

    render(){
        return (
            <div className="main">
                <div className="main-form">
                    <CountrySelect countries={Object.keys(this.state.countries)} selectCountry={this.selectCountry}/>
                    <ul>
                    {
                        this.state.selectedCountries.map(country => {
                            return (<li key={country}>{country}</li>)
                        })
                    }
                    </ul>
                    <br></br>
                    <button onClick={this.checkIntersection}>CHECK COUNTRIES</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.intersection.map(country => (<li key={country}>{country}</li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}