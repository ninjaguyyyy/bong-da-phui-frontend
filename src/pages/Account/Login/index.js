import React from "react";
import GoogleLogin from "react-google-login";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Card, Form, Button } from "react-bootstrap";
import { authService } from "../../../services";

export default function Login() {
  const responseGoogle = async (response) => {
    console.log(response);
    const { user, tokens } = await authService.loginWithGoogle(
      response.tokenId
    );
    // console.log("🚀 ~ file: index.js ~ line 13 ~ responseGoogle ~ data", data);
    // if (tokens) {
    //   setAccessToken(tokens?.access.token);
    //   router.push("/");
    // }
  };
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  return (
    <Card className="wrapper login">
      <Card.Body>
        <img
          src={require("../../../assets/images/rocket.png")}
          alt="rocket"
          className="rocket-image"
        />
        <Card.Title className="title">Account Login</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              className="mb-4"
              id="username"
            />
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 submit">
            Login to your Account
          </Button>
        </Form>
        <p>Login with your Social Account</p>
        <div className="social-buttons">
          <Button variant="primary" className="fb">
            <FaFacebookF />
          </Button>

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button
                variant="danger"
                className="gg"
                onClick={renderProps.onClick}
              >
                <FaGoogle />
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={() => {}}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
