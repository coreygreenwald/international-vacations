import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            countries: [],
            selectedCountries: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1> MAIN </h1>    
            </div>
        )
    }
}