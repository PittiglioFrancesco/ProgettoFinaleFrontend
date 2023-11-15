import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    setPassword("");
  };

  return (
    <div className="login col-12">
      <div className="row justify-center">
        <h2>Uglygram</h2>
      </div>
      <div className="row justify-center">
        <Card style="col-2">
          <form onSubmit={submitHandler}>
            <Input
              type="text"
              value={email}
              onChange={onChangeEmail}
              placeholder="Email"
            />
            <Input
              type="password"
              value={password}
              onChange={onChangePassword}
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
