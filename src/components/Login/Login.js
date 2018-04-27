import React, { Component } from "react";
import { Row, Input, Container, Card } from "react-materialize";
import "./Login.css";

class Login extends Component {
  
    render() {
        return (
            <Container>
                <div class="space">
                    <Row>
                        <Card className="grey lighten-5">
                            <Input placeholder="username" s={6} label="First Name" />
                            <Input type="password" label="password" s={6} />
                            <button className="btn waves-effect waves-light red" type="submit" name="action">
                            Login
                            </button>
                        </Card>
                    </Row>
                </div>
            </Container>
      )
    }
}

export default Login;
