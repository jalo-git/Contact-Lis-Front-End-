import React from 'react';  
import addContactList from './component/addContactList';  
import contactList from './component/contactList';  
import editContactList from './component/editContactList'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/addContactList'} className="nav-link">Add Contact</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/contactList'} className="nav-link">Contact List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/addContactList' component={addContactList} />  
          <Route path='/edit/:id' component={editContactList} />  
          <Route path='/contactList' component={contactList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App;   