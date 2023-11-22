import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../utils/AuthContext";

const Login = () => {

  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: loginForm.current[0].value,
      password: loginForm.current[1].value,
    };

    loginUser(loginData);
  };

  return (
    <div className="login col-12">
      <div className="row justify-center">
        <h2>Uglygram</h2>
      </div>
      <div className="row justify-center">
        <Card style="col-2">
          <form ref={loginForm} onSubmit={submitHandler}>
            <Input
              type="text"
              placeholder="Email"
            />
            <Input
              type="password"
              placeholder="Password"
            />
            <div className="row justify-center">
              <Button type="submit" color="blue">
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <p className="row justify-center">
        Non sei iscritto? <Link to="/signup">Registrati</Link>
      </p>
    </div>
  );
};

export default Login;
