import logo from "../utils/images/logo.png";

const Header = ({ toggle, isSignedUp }) => {
  return (
    <div className="flex flex-between justify-between">
      <img
        className="w-[15rem] brightness-100 contrast-150 ml-[10rem]"
        src={logo}
        alt="logo"
      />
      <button
        className="bg-red-700 contrast-150 rounded-md p-2 text-white font-bold h-full px-4 content-center mt-12 mr-[20rem]"
        onClick={toggle}
      >
        {isSignedUp ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default Header;
