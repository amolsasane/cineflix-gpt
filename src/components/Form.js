import Header from "./Header";
import Login from "./Login";

const Form = () => {
  return (
    <div>
      <img
        className="h-[100vh] w-[100%] absolute brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background"
      />
      <Header />
      <Login />
    </div>
  );
};

export default Form;
