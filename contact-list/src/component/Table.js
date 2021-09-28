import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  DeleteContact = () => {
    axios.delete('http://localhost:5000?id=' + this.props.obj.Id)
      .then(json => {
        if (json.data.Status === 'Delete') {
          alert('Record deleted successfully!!');
        }
      })
  }
  render() {
    return (
      <tr>
      <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.email}
        </td>
        <td>
          {this.props.obj.phone}
        </td>
        <td>
          {this.props.obj.location}
        </td>
        <td>
          {this.props.obj.date}
        </td>
        <td>
          <Link to={"/view/" + this.props.obj.Id} className="btn btn-primary">View</Link>
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.Id} className="btn btn-success">Edit</Link>
        </td>
        <td>
          <button type="button" onClick={this.DeleteContact} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Table;