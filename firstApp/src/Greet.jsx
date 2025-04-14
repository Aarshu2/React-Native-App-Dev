import PropTypes from 'prop-types'; 

function Greet({ isLoggedIn = false, username = "Guest" }) {
    const welcomeMessage = <h2 className="welcomeMsg">Welcome {username}</h2>;
    const loginPrompt = <h2 className="loginPrompt">Log in</h2>;
    return isLoggedIn ? welcomeMessage : loginPrompt;
  }
  

Greet.propTypes = { 
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

// Greet.defaultProps = {
//     isLoggedIn: false,
//     username: "Guest"
// }

export default Greet