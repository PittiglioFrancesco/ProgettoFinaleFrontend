import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeBirthdate = (event) => {
    setBirthdate(event.target.value);
  };
  
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
              value={username}
              onChange={onChangeUsername}
              placeholder="Username"
            />
            <Input
              type="date"
              value={birthdate}
              onChange={onChangeBirthdate}
              placeholder="Birthdate"
            />
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
                Registrati
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <p className="row justify-center">
        Sei già iscritto? <Link to="/signup">Login</Link>
      </p>
    </div>
  );
};

export default Register;
