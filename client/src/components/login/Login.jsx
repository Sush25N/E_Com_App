// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
// import "./login.css";
// import { useDispatch } from "react-redux";
// import { login, signup } from "../../features/slices/authSlice";

// const Login = () => {
//   const initialState = {
//     name: "",
//     password: "",
//     confirmPassword: "",
//     phoneNumber: "",
//     image: "",
//   };

//   const [values, setValues] = useState(initialState);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showWrongPasswordMessage, setShowWrongPasswordMessage] =
//     useState(false);
//   const dispatch = useDispatch();

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSignIn = () => {
//     const userId = {
//       name: values.name,
//       password: values.password,
//     };

//     const registeredUsers = [
//       { name: "Sushrut", password: "Sush@123" },
//       { name: "robin", password: "Robin@123" },
//       // Add more users
//     ];

//     const isUserRegistered = registeredUsers.some(
//       (user) =>
//         user.name.toLowerCase() === userId.name.toLowerCase() &&
//         user.password === userId.password
//     );

//     if (!isUserRegistered) {
//       setShowWrongPasswordMessage(true);
//     } else {
//       setShowWrongPasswordMessage(false);
//       dispatch(login(userId));
//     }
//   };

//   const handleSignUp = () => {
//     const newUser = {
//       name: values.name,
//       password: values.password,
//       confirmPassword: values.confirmPassword,
//       phoneNumber: values.phoneNumber,
//     };

//     dispatch(signup(newUser));

//     setValues(initialState);
//   };

//   const toggleView = () => {
//     setIsSignUp((prevIsSignUp) => !prevIsSignUp);
//     setShowWrongPasswordMessage(false); // Hide the message when switching between Sign Up and Sign In
//   };

//   return (
//     <div className="grid grid-cols-1 items-center justify-items-center h-screen relative">
//       <Card className="w-96 bg-gray-300 rounded-md shadow-md relative z-10">
//         <CardHeader
//           variant="gradient"
//           color="gray"
//           className="mb-4 grid h-28 place-items-center rounded-t-md relative z-20"
//         >
//           <Typography variant="h3" color="white">
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-6 relative z-20">
//           <Input
//             label="Name"
//             size="lg"
//             type="text"
//             name="name"
//             value={values.name}
//             onChange={onChange}
//           />
//           <Input
//             label="Password"
//             size="lg"
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={onChange}
//           />
//           {showWrongPasswordMessage && (
//             <Typography variant="body2" color="red" className="mt-1">
//               Incorrect password. Please try again.
//             </Typography>
//           )}
//           {isSignUp && (
//             <React.Fragment>
//               <Input
//                 label="Confirm Password"
//                 size="lg"
//                 type="password"
//                 name="confirmPassword"
//                 value={values.confirmPassword}
//                 onChange={onChange}
//               />
//               <Input
//                 label="Phone Number"
//                 size="lg"
//                 type="text"
//                 name="phoneNumber"
//                 value={values.phoneNumber}
//                 onChange={onChange}
//               />
//             </React.Fragment>
//           )}
//           <div className="-ml-2.5">
//             <Checkbox label="Remember Me" />
//           </div>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button
//             variant="gradient"
//             fullWidth
//             onClick={() => (isSignUp ? handleSignUp() : handleSignIn())}
//           >
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </Button>
//           <div className="text-center mt-2">
//             <Typography variant="body2" color="gray">
//               {isSignUp ? "Already Registered? " : "Not Registered? "}
//               <Button variant="text" color="gradient" onClick={toggleView}>
//                 {isSignUp ? "Sign In" : "Sign Up"}
//               </Button>
//             </Typography>
//           </div>
//         </CardFooter>
//       </Card>

//       <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-40 rounded-md z-0"></div>
//       <div className="absolute inset-0 z-0">
//         <div className="curve"></div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// <------------SECOND INSTANCE------------>
// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
// import "./login.css";
// import { useDispatch } from "react-redux";
// import { login, signup } from "../../features/slices/authSlice";

// const Login = () => {
//   const initialState = {
//     name: "",
//     password: "",
//     confirmPassword: "",
//     phoneNumber: "",
//     image: "",
//   };

//   const [values, setValues] = useState(initialState);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [showWrongPasswordMessage, setShowWrongPasswordMessage] =
//     useState(false);
//   const [showUnregisteredUserPopup, setShowUnregisteredUserPopup] =
//     useState(false);
//   const dispatch = useDispatch();

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSignIn = () => {
//     const userId = {
//       name: values.name,
//       password: values.password,
//     };

//     const registeredUsers = [
//       { name: "Sushrut", password: "Sush@123" },
//       { name: "robin", password: "Robin@123" },
//       // Add more users
//     ];

//     const isUserRegistered = registeredUsers.some(
//       (user) =>
//         user.name.toLowerCase() === userId.name.toLowerCase() &&
//         user.password === userId.password
//     );

//     if (!isUserRegistered) {
//       setShowWrongPasswordMessage(true);
//       const isUserExists = registeredUsers.some(
//         (user) => user.name.toLowerCase() === userId.name.toLowerCase()
//       );

//       if (!isUserExists) {
//         setShowUnregisteredUserPopup(true);
//         return;
//       }
//     } else {
//       setShowWrongPasswordMessage(false);
//       dispatch(login(userId));
//     }
//   };

//   const handleSignUp = () => {
//     const newUser = {
//       name: values.name,
//       password: values.password,
//       confirmPassword: values.confirmPassword,
//       phoneNumber: values.phoneNumber,
//     };

//     dispatch(signup(newUser));

//     setValues(initialState);
//   };

//   const toggleView = () => {
//     setIsSignUp((prevIsSignUp) => !prevIsSignUp);
//     setShowWrongPasswordMessage(false);
//     setShowUnregisteredUserPopup(false);
//   };

//   const navigateToSignUp = () => {
//     setShowUnregisteredUserPopup(false);
//     setIsSignUp(true);
//   };

//   useEffect(() => {
//     let timeoutId;

//     if (showUnregisteredUserPopup) {
//       timeoutId = setTimeout(() => {
//         navigateToSignUp();
//       }, 5000);
//     }

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [showUnregisteredUserPopup]);

//   return (
//     <div className="grid grid-cols-1 items-center justify-items-center h-screen relative">
//       <Card className="w-96 bg-gray-300 rounded-md shadow-md relative z-10">
//         <CardHeader
//           variant="gradient"
//           color="gray"
//           className="mb-4 grid h-28 place-items-center rounded-t-md relative z-20"
//         >
//           <Typography variant="h3" color="white">
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4 p-6 relative z-20">
//           <Input
//             label="Name"
//             size="lg"
//             type="text"
//             name="name"
//             value={values.name}
//             onChange={onChange}
//           />
//           <Input
//             label="Password"
//             size="lg"
//             type="password"
//             name="password"
//             value={values.password}
//             onChange={onChange}
//           />
//           {showWrongPasswordMessage && (
//             <Typography variant="body2" color="red" className="mt-1">
//               Incorrect username or password. Please try again.
//             </Typography>
//           )}
//           {showUnregisteredUserPopup && (
//             <div className="bg-yellow-200 p-3 rounded-md mt-2">
//               <Typography variant="body2" color="black" className="text-center">
//                 <span style={{ fontWeight: "bold" }}>
//                   No registered user found.
//                 </span>
//                 <br />
//                 Redirecting you to the sign-up page...
//               </Typography>
//             </div>
//           )}
//           {isSignUp && (
//             <>
//               <Input
//                 label="Confirm Password"
//                 size="lg"
//                 type="password"
//                 name="confirmPassword"
//                 value={values.confirmPassword}
//                 onChange={onChange}
//               />
//               <Input
//                 label="Phone Number"
//                 size="lg"
//                 type="text"
//                 name="phoneNumber"
//                 value={values.phoneNumber}
//                 onChange={onChange}
//               />
//             </>
//           )}
//           <div className="-ml-2.5">
//             <Checkbox label="Remember Me" />
//           </div>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button
//             variant="gradient"
//             fullWidth
//             onClick={() => (isSignUp ? handleSignUp() : handleSignIn())}
//           >
//             {isSignUp ? "Sign Up" : "Sign In"}
//           </Button>
//           <div className="text-center mt-2">
//             <Typography variant="body2" color="gray">
//               {isSignUp ? "Already Registered? " : "Not Registered? "}
//               <Button variant="text" color="gradient" onClick={toggleView}>
//                 {isSignUp ? "Sign In" : "Sign Up"}
//               </Button>
//             </Typography>
//           </div>
//         </CardFooter>
//       </Card>

//       <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-40 rounded-md z-0"></div>
//       <div className="absolute inset-0 z-0">
//         <div className="curve"></div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// <---------------THIRD INSTANCE--------------->
import React, { useState, useEffect } from "react";
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
  const [showWrongPasswordMessage, setShowWrongPasswordMessage] =
    useState(false);
  const [showUnregisteredUserPopup, setShowUnregisteredUserPopup] =
    useState(false);
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

    const registeredUsers = [
      { name: "Sushrut", password: "Sush@123" },
      { name: "robin", password: "Robin@123" },
      // Add more users
    ];

    const isUserRegistered = registeredUsers.some(
      (user) =>
        user.name.toLowerCase() === userId.name.toLowerCase() &&
        user.password === userId.password
    );

    if (!isUserRegistered) {
      setShowWrongPasswordMessage(true);

      const isUserExists = registeredUsers.some(
        (user) => user.name.toLowerCase() === userId.name.toLowerCase()
      );

      if (!isUserExists) {
        setShowUnregisteredUserPopup(true);

        setTimeout(() => {
          setShowUnregisteredUserPopup(false);
          navigateToSignUp();
        }, 5000);

        return;
      }
    } else {
      setShowWrongPasswordMessage(false);
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

    setValues(initialState);
  };

  const toggleView = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowWrongPasswordMessage(false);
    setShowUnregisteredUserPopup(false);
  };

  const navigateToSignUp = () => {
    setShowUnregisteredUserPopup(false);
    setIsSignUp(true);
  };

  useEffect(() => {
    let timeoutId;

    if (showUnregisteredUserPopup) {
      timeoutId = setTimeout(() => {
        navigateToSignUp();
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showUnregisteredUserPopup]);

  useEffect(() => {
    let timeoutId;

    if (showWrongPasswordMessage) {
      timeoutId = setTimeout(() => {
        setShowWrongPasswordMessage(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showWrongPasswordMessage]);

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
          {showWrongPasswordMessage && (
            <Typography variant="body2" color="red" className="mt-1">
              Incorrect username or password. Please try again.
            </Typography>
          )}
          {showUnregisteredUserPopup && (
            <div className="bg-yellow-200 p-3 rounded-md mt-2">
              <Typography variant="body2" color="black" className="text-center">
                <span style={{ fontWeight: "bold" }}>
                  No registered user found.
                </span>
                <br />
                Redirecting you to the sign-up page...!
              </Typography>
            </div>
          )}
          {isSignUp && (
            <>
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
            </>
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
