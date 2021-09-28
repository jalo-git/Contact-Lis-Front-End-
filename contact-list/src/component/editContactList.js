import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../component/addContactList'

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            location: '',
            date: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    location: response.data.location,
                    date: response.data.date
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Id: this.props.match.params.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            date: this.state.date,

        };
        axios.post('http://localhost:4000/', obj)
            .then(res => console.log(res.data));
        this.props.history.push('/contactList')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Contact List</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.name} placeholder="Enter Full Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="EmailAdd" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email Address" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Phone" sm={2}>Contact Number</Label>
                            <Col sm={10}>
                                <Input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Enter Contact Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Location" sm={2}>Location</Label>
                            <Col sm={10}>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Choose your Location</option>
                            <option value="1" onChange={this.handleChange} value={this.state.date}>Cebu</option>
                            <option value="2" onChange={this.handleChange} value={this.state.date}>Manila</option>
                          </select>
                                
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Date" sm={2}>Registered Date</Label>
                            <Col sm={10}>
                                <Input type="text" name="date" onChange={this.handleChange} value={this.state.date} placeholder="Registered Date" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }

}

export default Edit;