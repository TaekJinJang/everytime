import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const HeaderTitle = styled.span`
  color: #454545;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  line-height: 56px;
  padding-left: 8px;
`;
const Logo = styled.img`
  width: 30px;
  height: 32px;
  vertical-align: middle;
  cursor: pointer;
`;

function BoardViews(props) {
  return (
    <Container>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Link to={props.link}>
            <Logo src={logo} alt="logo" />
          </Link>
          <HeaderTitle>SM UCC</HeaderTitle>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 px-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="px-2" href="#action1">
                ddd
              </Nav.Link>
              <Nav.Link className="px-2" href="#action2">
                Link
              </Nav.Link>
              <Nav.Link className="px-2" href="#" disabled>
                Link
              </Nav.Link>
              <NavDropdown
                title="게시판"
                id="navbarScrollingDropdown"
                className="px-2"
              >
                <NavDropdown.Item href="#action3">자유게시판</NavDropdown.Item>
                <NavDropdown.Item href="#action4">ㅁㅁ게시판</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">익명게시판</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default withRouter(BoardViews);
