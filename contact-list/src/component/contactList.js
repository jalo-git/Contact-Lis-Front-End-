import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class ContactList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {contact: []};  
    }  
    componentDidMount(){  
      // debugger;  
      axios.get("http://localhost:4000/")  
        .then(response => {  
          this.setState({ contact: response.data });  
          // debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.contact.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Contact List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>
                <th>ID</th>  
                <th>Name</th>  
                <th>Email Address</th>  
                <th>Contact Number</th>  
                <th>Location</th>
                <th>Registered Date</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  