import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login, signup } from "../../features/slices/authSlice";

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSignIn = () => {
    const userId = {
      name: values.name,
      password: values.password,
    };

    // Assuming you have a list of registered users in your state or props
    const registeredUsers = [
      { name: "Sushrut", password: "Sush@123" },
      { name: "user2", password: "password2" },
      // Add more registered users as needed
    ];

    // Check if the user is registered. If not, toggle to Sign Up view
    const isUserRegistered = registeredUsers.some(
      (user) =>
        user.name.toLowerCase() === userId.name.toLowerCase() &&
        user.password === userId.password
    );

    if (!isUserRegistered) {
      setIsSignUp(true);
    } else {
      dispatch(login(userId));
    }
  };

  const handleSignUp = () => {
    const newUser = {
      name: values.name,
      password: values.password,
      confirmPassword: values.confirmPassword,
      phoneNumber: values.phoneNumber,
    };

    dispatch(signup(newUser));

    // Optionally, you can reset the form fields or perform any other actions
    setValues(initialState);
  };

  const toggleView = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen relative">
      <Card className="w-96 bg-gray-300 rounded-md shadow-md relative z-10">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center rounded-t-md relative z-20"
        >
          <Typography variant="h3" color="white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-6 relative z-20">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          {isSignUp && (
            <React.Fragment>
              <Input
                label="Confirm Password"
                size="lg"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={onChange}
              />
              <Input
                label="Phone Number"
                size="lg"
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={onChange}
              />
            </React.Fragment>
          )}
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => (isSignUp ? handleSignUp() : handleSignIn())}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <div className="text-center mt-2">
            <Typography variant="body2" color="gray">
              {isSignUp ? "Already Registered? " : "Not Registered? "}
              <Button variant="text" color="gradient" onClick={toggleView}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </Button>
            </Typography>
          </div>
        </CardFooter>
      </Card>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-40 rounded-md z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="curve"></div>
      </div>
    </div>
  );
};

export default Login;
