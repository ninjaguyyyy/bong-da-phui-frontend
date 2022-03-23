import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Card, Form, Button } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, LoginMethods } from '../../../store/thunks';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, data: userInfo, isLogged } = useSelector((state) => state.user);

  const from = location.state?.from?.pathname || '/';

  const responseFacebook = async ({ userID, accessToken }) => {
    await dispatch(fetchUser({ method: LoginMethods.Facebook, userID, accessToken }));
    userInfo && navigate(from, { replace: true });
  };

  const responseGoogle = async ({ tokenId }) => {
    await dispatch(fetchUser({ method: LoginMethods.Google, tokenId }));
    userInfo && navigate(from, { replace: true });
  };

  return (
    <>
      {console.log({ isLogged })}
      {isLogged ? (
        <Navigate to="/" />
      ) : (
        <Card className="wrapper login">
          <Card.Body>
            <img src={require('../../../assets/images/rocket.png')} alt="rocket" className="rocket-image" />
            <Card.Title className="title">Account Login</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Username" className="mb-4" id="username" />
                <Form.Control type="password" placeholder="Password" id="password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 submit" disabled={loading}>
                Login to your Account
              </Button>
            </Form>
            <p>Login with your Social Account</p>
            <div className="social-buttons">
              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad
                callback={responseFacebook}
                render={(renderProps) => (
                  <Button variant="primary" className="fb" onClick={renderProps.onClick} disabled={loading}>
                    <FaFacebookF />
                  </Button>
                )}
              />

              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <Button variant="danger" className="gg" onClick={renderProps.onClick} disabled={loading}>
                    <FaGoogle />
                  </Button>
                )}
                onSuccess={responseGoogle}
                onFailure={() => {}}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
