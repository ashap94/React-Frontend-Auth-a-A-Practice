import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import SignUp from "./signup";

// nothing needed from state, therefore no msp needed

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: userForm => dispatch(createNewUser(userForm))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
