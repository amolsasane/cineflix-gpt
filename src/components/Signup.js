const Signup = ({ toggle }) => {
  return (
    <div className="absolute bg-black bg-opacity-70 w-[28%] h-[70%] mx-auto my-[4rem] left-0 right-0 rounded-[1rem] p-14">
      <h1 className="text-white text-[2rem] font-bold mb-8">Sign Up</h1>
      <input
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Full Name"
      ></input>
      <input
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Email"
      ></input>
      <input
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="password"
        placeholder="Password"
      ></input>
      <button className="bg-red-700 hover:contrast-100 text-white w-full p-4 my-2 rounded-md contrast-150 font-bold">
        Sign Up
      </button>
      <p className="text-gray-400 mt-10">
        Already a member?{" "}
        <span
          className="text-white hover:underline cursor-pointer"
          onClick={toggle}
        >
          Login now!
        </span>
      </p>
    </div>
  );
};

export default Signup;
