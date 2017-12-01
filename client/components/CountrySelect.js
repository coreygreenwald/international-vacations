import React, { Component } from 'react';

export default class CountrySelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCountry: 'Afghan'
        }
        this.setCountry = this.setCountry.bind(this); 
    }

    setCountry(e){
        this.setState({
            selectedCountry: e.target.value
        })
    }

    render(){
        let { countries, selectCountry } = this.props;
        return (
            <div>
                <select name="countries" onChange={this.setCountry}>
                {
                    countries.map((country, index) => {
                        return (
                            <option key={index} value={country}>{country}</option>
                        )
                    })
                }
                </select>
                <button className="btn" onClick={() => selectCountry(this.state.selectedCountry)}>Add Nationality</button>
            </div>
        )
    }
}
