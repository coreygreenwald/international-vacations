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
                <h1 className="main-title">International Couples: Vacation Planner</h1>
                <h1 className="main-caption">With you and your significant other (or friends) who have different nationalities, it can be difficult to plan a getaway. Use our application to select the nationality of each of your friends and find the countries where all of your passports are valid and no visas are needed!</h1>
                <div className="main-form">
                    <CountrySelect countries={Object.keys(this.state.countries)} selectCountry={this.selectCountry}/>
                    <ul className="main-form-selected">
                    {
                        this.state.selectedCountries.map(country => {
                            return (<div className="main-form-selected-option" key={country}>{country}</div>)
                        })
                    }
                    </ul>
                    <button className="btn" onClick={this.checkIntersection}>Where Can We Go?</button>
                </div>
                <div className="main-countries">
                    <ul>
                        {
                            this.state.intersection.map(country => (<div className="main-countries-selected-option" key={country}>{country}</div>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}