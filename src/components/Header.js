import React, { Component } from 'react';
import Restaurants from './Restaurants'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Menu from './Menu'
import SignIn from './SignIn'
import AddMenuItem from './AddMenuItem'
import Logout from './Logout'
import SingUp from './SingUp'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

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
            <Link to="/add_menu_item">Add Menu Item</Link>{" "}
            <Link to="/logout">Logout</Link>{" "}
            </div>
        )

        const loggedInRoutes = (
            <div>
            <Route path="/add_menu_item" component={AddMenuItem} />
            <Route path="/logout" component={Logout} />
            </div>
        )

        const loggedOutLinks = (
            <div>
            <Link to="/signin">sign in</Link>{" "}
            <Link to="/signup">signup</Link>{" "}
            </div>
        )

        const loggedOutRoutes = (
            <div>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SingUp} />
            </div>
        )
        
        return (
            <div className='logo'>
                <Router>    
                <div>
                    <nav>
                        {/* <link to="/">Home</link>{" "} */}
                        <Link to="/restaurants">Restaurants</Link>{" "}
                        <Link to="/contactus">ContactUs</Link>{" "}
                        <Link to="/aboutus">AboutUs</Link>{" "}
                        <Link to="/menu">Menu</Link>{" "}
                        {this.state.isLoggedIn? loggedInLinks : loggedOutLinks }

                    </nav>
                </div>
                
                {/* <Route exact path="/"  */}
                 <Route path="/restaurants" component={Restaurants} /> 
                 <Route path="/ContactUs" component={ContactUs} /> 
                 <Route path="/aboutus" component={AboutUs} />
                 <Route path="/menu" component={Menu} />
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