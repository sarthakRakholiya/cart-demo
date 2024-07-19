// ***** start - imports from package *****
import React, { useCallback, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { useRouter } from "next/router";
// ***** end - imports from package *****

// ***** start - imports from files *****
import CustomSVG from "../Common/CustomSVG";
import { countQuantity } from '@/utils/utils';
// ***** end - imports from files *****

const Header = ({ cartData }) => {

  // ***** start - define variables *****
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  // ***** end - define variables *****

  // ***** start - toggle navigation in mobile screen *****
  const toggle = () => setIsOpen(!isOpen);
  // ***** end - toggle navigation in mobile screen *****

  // ***** start - redirect to home page *****
  const onPushOnHomeScreen = useCallback(() => {
    router.push('/')
  }, [router])
  // ***** end - redirect to home page *****

  // ***** start - redirect to cart page *****
  const onPushOnCartScreen = useCallback(() => {
    router.push('/cart')
  }, [router])
  // ***** end - redirect to cart page *****

  return (
    <header>
      <Container>
        <Navbar light expand="md">
          <NavbarBrand onClick={onPushOnHomeScreen}>HOMELY.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ms-auto">
              <NavItem>
                <NavLink onClick={onPushOnHomeScreen}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onPushOnHomeScreen}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onPushOnHomeScreen}>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onPushOnHomeScreen}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onPushOnCartScreen}>
                  <div className="cart-icon">
                    <CustomSVG icon="icon-cart" />
                    <div className="quantity-number">
                      {countQuantity(cartData)}
                    </div>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onPushOnHomeScreen} className="user-icon-container">
                  <div className="user-icon">
                    <CustomSVG icon="icon-user" />
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;