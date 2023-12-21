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
// import { login } from "../../features/slices/authSlice";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const initialState = {
//     name: "",
//     password: "",
//     image: "",
//   };

//   const [values, setValues] = useState(initialState);

//   const onChange = (e) => {
//     // const { name, values } = e.target;
//     // setValues({ ...values, [name]: values });
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const dispatch = useDispatch();

//   return (
//     <div className="grid grid-cols-1 items-center justify-items-center h-screen">
//       <Card className="w-96">
//         <CardHeader
//           variant="gradient"
//           color="gray"
//           className="mb-4 grid h-28 place-items-center"
//         >
//           <Typography variant="h3" color="white">
//             Sign In
//           </Typography>
//         </CardHeader>
//         <CardBody className="flex flex-col gap-4">
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
//           <Input
//             label="Image URL address"
//             size="lg"
//             type="text"
//             name="image"
//             value={values.image}
//             onChange={onChange}
//           />
//           <div className="-ml-2.5">
//             <Checkbox label="Remember Me" />
//           </div>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button
//             variant="gradient"
//             fullWidth
//             onClick={() => dispatch(login(values))}
//           >
//             Sign In
//           </Button>
//           {/* <Typography variant="small" className="mt-6 flex justify-center">
//             Don&apos;t have an account?
//             <Typography
//               as="a"
//               href="#signup"
//               variant="small"
//               color="blue-gray"
//               className="ml-1 font-bold"
//             >
//               Sign up
//             </Typography>
//           </Typography> */}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Login;

// Login.js

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
// import { login } from "../../features/slices/authSlice";
// import { useDispatch } from "react-redux";
// import "./login.css"; // Import a separate CSS file for custom styles

// const Login = () => {
//   const initialState = {
//     name: "",
//     password: "",
//     image: "",
//   };

//   const [values, setValues] = useState(initialState);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const dispatch = useDispatch();

//   return (
//     <div className="grid grid-cols-1 items-center justify-items-center h-screen relative">
//       <Card className="w-96 bg-white rounded-md shadow-md relative z-10">
//         <CardHeader
//           variant="gradient"
//           color="gray"
//           className="mb-4 grid h-28 place-items-center rounded-t-md relative z-20"
//         >
//           <Typography variant="h3" color="white">
//             Sign In
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
//           <Input
//             label="Image URL address"
//             size="lg"
//             type="text"
//             name="image"
//             value={values.image}
//             onChange={onChange}
//           />
//           <div className="-ml-2.5">
//             <Checkbox label="Remember Me" />
//           </div>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button
//             variant="gradient"
//             fullWidth
//             onClick={() => dispatch(login(values))}
//           >
//             Sign In
//           </Button>
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

// Login.js

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
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";
import "./login.css"; // Import a separate CSS file for custom styles

const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen relative">
      <Card className="w-96 bg-gray-300 rounded-md shadow-md relative z-10">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center rounded-t-md relative z-20"
        >
          <Typography variant="h3" color="white">
            Sign In
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
          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
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
