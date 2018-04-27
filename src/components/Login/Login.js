import React, { Component } from "react";
import { Row, Input, Container } from "react-materialize";
import "./Login.css";

class Login extends Component {
  
    render() {
        return (
            <Container>
                <div class="pads">
                    <Row>
                        <Input placeholder="username" s={6} label="First Name" />
                        <Input type="password" label="password" s={6} />
                        <button className="btn waves-effect waves-light red" type="submit" name="action">
                        Login
                        </button>
                    </Row>
                </div>
            </Container>
      )
    }
}

export default Login;
