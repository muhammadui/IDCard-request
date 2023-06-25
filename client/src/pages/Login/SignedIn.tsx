import { SignIn } from "@clerk/clerk-react";

const SignedIn = () => {
  return (
    <>
      <div className="left">
        <h1>Welcome back</h1>
        <p>Kindly Signed in to continue</p>
      </div>
      <div className="left">
        <SignIn />
      </div>
    </>
  );
};

export default SignedIn;
