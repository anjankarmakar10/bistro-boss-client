import React from "react";
import GoogleProvider from "./GoogleProvider";
import GitHubProvider from "./GitHubProvider";

const SigninContainer = () => {
  return (
    <div className="mt-6 w-fit mx-auto">
      <span className="text-xl text-center font-medium">Or sign in with </span>
      <div className="flex items-center gap-10 mt-4">
        <GoogleProvider />
        <GitHubProvider />
      </div>
    </div>
  );
};

export default SigninContainer;
