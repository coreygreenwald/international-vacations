import React, { Component } from 'react';
import axios from 'axios';
import CountrySelect from './CountrySelect';
import intersection from '../utils/intersection';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            selectedCountries: [],
            numCountries: 2
        }
        this.increaseNumCountries = this.increaseNumCountries.bind(this);
    }

    componentDidMount(){
        axios.get('/api/nationalities')
            .then(({ data: countries }) => {
                this.setState({ countries });
                console.log(this.state.countries);
            })
    }

    increaseNumCountries(e){
        e.preventDefault();
        this.setState({
            numCountries: this.state.numCountries + 1
        })
    }

    checkIntersection(e){
        e.preventDefault();
        e.stopPropagation();
    }

    render(){
        let arr = [];
        for(let i = 0; i < this.state.numCountries; i++){
            arr.push(<CountrySelect key={i} selectorId={i} countries={this.state.countries}/>)
        }
        return (
            <div className="main">
                <form className="main-form">
                    { arr }
                    <button className="main-form-add" onClick={this.increaseNumCountries}>ADD NATIONALITY</button>
                    <br></br>
                    <button type="submit" onSubmit={this.checkIntersection}>CHECK COUNTRIES</button>
                </form>
            </div>
        )
    }
}