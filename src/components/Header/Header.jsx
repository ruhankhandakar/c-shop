import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/util";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { seelctCurrentUser } from "../../utils/userSelector";
import { selectCartHidden } from "../../utils/cartSelector";

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink
} from "./HeaderStyle";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <Link to="/contact">CONTACT</Link>
      {currentUser ? (
        <OptionLink as="div" to="" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/auth">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: seelctCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
