import React, { useContext, useState } from "react";

import logo from "../../assets/brand/logo-png1.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import LoderText from "../../components/Spinner/LoderText";

const Login = () => {
  const [error, setError] = useState("");
  const [viewPass, setViewPass] = useState(false);
  const { signInWithGoogle, signIn, isLoading, setIsLoading } =
    useContext(AuthContext);

  // user redirect

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // sign in with google

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        fetch(`${import.meta.env.VITE_APP_api}/jwt?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.token) {
              localStorage.setItem("biker-point-token", data.token);
              toast.success("Successfully logged in");
              setError("");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => {
        console.error(err);
        const error = err.message;
        const message = error.split("/")[1].replace(/[-)]/g, " ");
        setError(message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signIn(email, pass)
      .then((result) => {
        fetch(`${import.meta.env.VITE_APP_api}/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.token) {
              localStorage.setItem("biker-point-token", data.token);
              toast.success("Successfully logged in");
              setError("");
              form.reset();
              navigate(from, { replace: true });
              setIsLoading(false);
            }
          });
      })
      .catch((err) => {
        console.error(err);
        const error = err.message;
        const message = error.split("/")[1].replace(/[-)]/g, " ");
        setError(message);
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full w-full py-5 px-4 bg-center bg-no-repeat bg-cover bg-white ">
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <img className="w-1/2 mx-auto" src={logo} alt="" />
        </Link>
        <div className="bg-white border border-slate-400 shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-6">
          <p
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p className="text-base mt-4 font-medium leading-none text-gray-800">
            Dont have account?{" "}
            <Link
              to="/registration"
              role="link"
              aria-label="Sign up here"
              className="text-base font-medium leading-none underline text-red-600 cursor-pointer"
            >
              {" "}
              Sign up here
            </Link>
          </p>
          <div className=" mt-5 ">
            <button
              className="flex items-center gap-5 border-2 rounded border-red-500 px-2 py-1"
              onClick={handleSignInWithGoogle}
              aria-label="Continue with google"
            >
              <svg
                width={19}
                height={20}
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              Continue with google
            </button>
          </div>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full border-gray-800" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-800">
              OR
            </p>
            <hr className="w-full border-gray-800  " />
          </div>
          <form action="" onSubmit={handleLogin}>
            <p className="text-base font-medium mb-5 text-red-600">{error}</p>
            <div>
              <label className="text-base font-medium leading-none text-gray-800">
                Email
                <input
                  aria-label="enter email adress"
                  type="email"
                  name="email"
                  placeholder="jhon@hotmail.com"
                  className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </label>
            </div>
            <div className="mt-6  w-full">
              <label className="text-base font-medium leading-none text-gray-800">
                Password
                <div className="relative flex items-center justify-center">
                  <input
                    type={viewPass ? "text" : "password"}
                    name="password"
                    placeholder="***********"
                    className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                  <div
                    onClick={() => setViewPass(!viewPass)}
                    className="absolute right-0 mt-2 mr-3 cursor-pointer text-gray-600"
                  >
                    {viewPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </label>
            </div>
            <div className="mt-6">
              <button
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                type="submit"
              >
                {isLoading ? <LoderText disabled /> : "Login"}
              </button>
            </div>
          </form>

          <Link
            to="/reset-password"
            role="link"
            className=" text-base font-medium leading-none underline text-red-600 cursor-pointer"
          >
            <p className="mt-4">Forget Password</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
