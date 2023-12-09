import React, { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setErrorMessage("Please enter a valid email");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="bg-white lg:w-[40%] w-[100%]">
      <div className="flex flex-col items-center justify-center gap-3 h-full bg-white">
        <div className="lg:text-4xl text-2xl leading-10 w-[330px] text-[#B0B1B3] font-medium">
          Sign up for exclusive access.
        </div>
        <input
          type="email"
          placeholder="your email address"
          className="w-[340px] rounded-lg border border-[#E5E5E6] py-[20px] px-[24px]"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="w-[340px] text-[#ffff] bg-black py-[18px] px-[28px] justify-center align-middle rounded-lg"
          onClick={handleSubmit}
        >
          Get Started
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button className="gap-3 align-middle justify-center text-[#19191A] font-semibold text-base">
          You'll receive an email with an invite link to join.
        </button>
      </div>
    </div>
  );
};
