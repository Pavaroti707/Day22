// src/App.js
import React, { Component } from 'react';
import Table from "./Table"; // Add this line inside src/App.js file

class App extends Component{
    render() {
        return (
            <div className="container">
                <Table/>
            </div>
        )
    }
}

export default App;