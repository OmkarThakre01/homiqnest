"use client";
import Link from "next/link"; // Import Link for client-side navigation
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import img from "../../../public/image.jpg";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Home from "../main/Home";
const SignUp = () => {
  const router = useRouter(); // Initialize the router

  // Function to handle Sign In button click
  const handleSignInClick = () => {
    router.push("/Home"); // Navigate to the Sign In page
  };

  // Function to handle Sign Up button click
  const handleSignUpClick = () => {
    // Handle sign-up logic here (e.g., form submission)
    router.push("/Home");
  };

  // Function to handle Next button click
  const handleNextClick = () => {
    router.push("/"); // Navigate to the Home page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white w-full fixed top-0 z-10">
        <h2 className="text-lg font-semibold">Homiqnest</h2>
        <button
          onClick={handleSignInClick} // Add onClick handler
          className="px-4 py-2 bg-[#2E2F6E] text-white rounded-lg text-sm hover:bg-[#1f1f5a] transition"
        >
          Sign In
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 mt-16">
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2 relative">
          <Image
            src={img}
            alt="Sign Up Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
            Welcome to{" "}
            <span className="text-gray-800 font-taprom">Homiqnest</span>
          </h1>

          {/* Form Inputs */}
          <div className="mt-6 w-full max-w-md">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />

            <label
              htmlFor="email"
              className="block text-gray-700 text-sm mt-4 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email here"
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />

            <label
              htmlFor="password"
              className="block text-gray-700 text-sm mt-4 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />

            {/* Sign Up Button */}
            <button
              onClick={handleSignUpClick} // Add onClick handler
              className="w-full mt-6 p-3 bg-[#2D336B] text-white rounded-lg font-semibold"
            >
              Sign Up
            </button>


            {/* Already Have an Account */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Already have an account?{" "}
              <Link
                href="/signin" // Link to the Sign In page
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-2 text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Sign Up */}
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              <FcGoogle size={24} className="mr-2" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;