import React, { Component } from 'react';
import Restaurants from './Restaurants'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'

import SignIn from './SignIn'
import AddMenuItem from './AddMenuItem'
import Logout from './Logout'
import SingUp from './SingUp'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import { Menu } from 'semantic-ui-react'

  const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease'
  };
  
  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
  };

class Header extends Component {

    handleLoggedInStatus(){
        // var newStatus=""
        // if(this.state.status=="Sign In")
        // newStatus="Logout"
        // else
        // newStatus="Sign In"
        
        // this.setState({
        //   status:newStatus
        // })
      }
      constructor(props){
        super(props)
        this.state={
          isLoggedIn: true
        }
        this.handleLoggedInStatus = this.handleLoggedInStatus.bind(this);
      }
    
    render() {
        const loggedInLinks = (
            <div>
            <Link className="navbar-brand" to="/add_menu_item">Add Menu Item</Link>{" "}
            <Link className="navbar-brand" to="/logout">Logout</Link>{" "}
            </div>
        )

        const loggedInRoutes = (
            <div>
            <Route  path="/add_menu_item" component={AddMenuItem} />
            <Route  path="/logout" component={Logout} />
            </div>
        )

        const loggedOutLinks = (
            <div>
            <Link className="navbar-brand" to="/signin">sign in</Link>{" "}
            <Link className="navbar-brand" to="/signup">signup</Link>{" "}
            </div>
        )

        const loggedOutRoutes = (
            <div>
            <Route  path="/signin" component={SignIn} />
            <Route  path="/signup" component={SingUp} />
            </div>
        )
        
        return (
        //     <Router>

        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="/">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
    
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //       <ul className="navbar-nav mr-auto">
                  
        //         <li className="nav-item active">
        //           <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="/">Link</a>
        //         </li>
        //         <li className="nav-item dropdown">
        //           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //             Dropdown
        //           </a>
        //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //             <a className="dropdown-item" href="/">Action</a>
        //             <a className="dropdown-item" href="/">Another action</a>
        //             <div className="dropdown-divider"></div>
        //             <a className="dropdown-item" href="/">Something else here</a>
        //           </div>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link disabled" href="/">Disabled</a>
        //         </li>
        //       </ul>
        //       <form className="form-inline my-2 my-lg-0">
        //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //       </form>
        //     </div>
        //   </nav>
        //   </Router>


            <div className='logo'>
                <Router>    
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* <link to="/">Home</link>{" "} */}
                        <Link className="navbar-brand" to="/restaurants">Restaurants</Link>{" "}
                        <Link className="navbar-brand" to="/contactus">ContactUs</Link>{" "}
                        <Link className="navbar-brand" to="/aboutus">AboutUs</Link>{" "}
                        <Link className="navbar-brand" to="/menu">Menu</Link>{" "}
                        {this.state.isLoggedIn? loggedInLinks : loggedOutLinks }

                    </nav>
                </div>
                
                {/* <Route exact path="/"  */}
                 <Route path="/restaurants" component={Restaurants} /> 
                 <Route path="/ContactUs" component={ContactUs} /> 
                 <Route path="/aboutus" component={AboutUs} />
                 
                 {/* <Route path="/SignIn" component={SignIn} /> */}
                 {this.state.isLoggedIn? loggedInRoutes: loggedOutRoutes}
         {/* <Route path="/contact" component={() => <ContactUs list={contact} />} /> */}
        {/* <Route path="/about_us" component={() => <AboutUs list={about_us} />} />  */}
        </Router>


          {/* <button onClick={(e)=>this.change(e)}> Sign In </button> */}

            </div>
                
                
        );
    }
}

export default Header;