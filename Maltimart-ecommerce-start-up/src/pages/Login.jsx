import React, { useState } from 'react';
import Helmet from "./../components/Helmet/Helmet";
import "../components/Style/Style.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'levanhai@gmail.com' && password === '123456') {
 
      toast.success("Đăng nhập thành công");
      navigate('/home');
    } 
  }
  return (
    <Helmet>
      <div className="comtainer pt-5 pb-5">
        <div className="row ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ">
          <div className="form-login">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h4 className="login-title">Login</h4>
            <div className="row">
              <div className="col-md-12 col-12 mb-1">
                <label>Email Address*</label>
                <input
                  className="mb-0"
                  type="email"
                  placeholder="Email Address"
                  value={username} onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-12 mb-2 pt-3">
                <label>Password</label>
                <input
                  className="mb-0"
                  type="password"
                  placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)} 

                />
              </div>
              <div className="col-md-8">
                <div className="check-box d-inline-block ml-0 ml-md-2 mt-1">
                  <input type="checkbox" id="remember_me" />
                  <label htmlFor="remember_me">Remember me</label>
                </div>
              </div>
              
              <div className="col-md-12 pt-3 ">
                <button className="register-button mt-0" type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
          </div>
          <div className="col-lg-4"></div>
          
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
