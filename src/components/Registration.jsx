import { useState } from "react";

export default function Registration() {
  const [error, setError] = useState({
    firstError: false,
    secondError: false,
    thirdError: false,
    fourthError: false,
  });

  const check = (e) => {
    e.preventDefault();

    setError({
      firstError: false,
      secondError: false,
      thirdError: false,
      fourthError: false,
    });
    const firstName = e.target.firstName.value;
    const secondName = e.target.secondName.value;
    const thirdName = e.target.thirdName.value;
    const fourthName = e.target.fourthName.value;

    setError((prevErrors) => ({
      ...prevErrors,
      firstError: !firstName,
      secondError: !secondName,
      thirdError: !thirdName || !/^\S+@\S+\.\S+$/.test(thirdName),
      fourthError: !fourthName,
    }));
  };

  return (
    <>
      <div className="p-[24px] rounded-[10px] bg-[#ffffff] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)] mt-[24px] flex flex-col items-center desktop:p-[40px] desktop:w-[540px] ">
        <form
          className=" flex flex-col items-center gap-[16px] max-w-xl desktop:gap-[20px]"
          onSubmit={check}
        >
          <div>
            <input
              className={`custom-input  focus:outline-none focus:border-[#5e54a4] focus:text-[#3d3b48] placeholder-right placeholder-opacity-50 ${
                error.firstError
                  ? "bg-[url('./src/images/icon-error.svg')] bg-no-repeat border-solid border-2 border-[#ff7979] bg-[95%] "
                  : ""
              }`}
              placeholder={`${error.firstError ? "" : "First Name"}`}
              name="firstName"
              type="text"
            />
            {error.firstError && (
              <p className="text-[11px] font-medium italic leading-normal text-right text-[#ff7979] mt-[6px]">
                First Name cannot be empty
              </p>
            )}
          </div>
          <div>
            <input
              className={`custom-input focus:outline-none focus:border-[#5e54a4] focus:text-[#3d3b48]placeholder-right ${
                error.secondError
                  ? "bg-[url('./src/images/icon-error.svg')] bg-no-repeat border-solid border-2 border-[#ff7979] bg-[95%] "
                  : ""
              }`}
              placeholder={`${error.secondError ? "" : "Last Name"}`}
              name="secondName"
              type="text"
            />
            {error.secondError && (
              <p className="text-[11px] font-medium italic leading-normal text-right text-[#ff7979] mt-[6px]">
                Last Name cannot be empty
              </p>
            )}
          </div>
          <div>
            <input
              className={`custom-input focus:outline-none focus:border-[#5e54a4] focus:text-[#3d3b48]${
                error.thirdError || /^\S+@\S+\.\S+$/.test(error.thirdError)
                  ? "bg-[url('./src/images/icon-error.svg')] bg-no-repeat border-solid border-2 border-[#ff7979] text-[#ff7979] placeholder-error bg-[95%]"
                  : "placeholder-right "
              }`}
              placeholder={`${
                error.thirdError ? "email@example/com" : "Email Address"
              }`}
              name="thirdName"
            />
            {error.thirdError && (
              <p className="text-[11px] font-medium italic leading-normal text-right text-[#ff7979] mt-[6px]">
                Looks like this is not an email
              </p>
            )}
          </div>
          <div>
            <input
              className={`custom-input focus:outline-none focus:border-[#5e54a4] placeholder-right ${
                error.fourthError
                  ? "bg-[url('./src/images/icon-error.svg')] bg-no-repeat border-solid border-2 border-[#ff7979] bg-[95%] "
                  : ""
              }`}
              placeholder={`${error.fourthError ? "" : "Password"}`}
              name="fourthName"
              type="text"
            />
            {error.fourthError && (
              <p className="text-[11px] font-medium italic leading-normal text-right text-[#ff7979] mt-[6px]">
                Password cannot be empty
              </p>
            )}
          </div>
          <button
            className="rounded-[5px] bg-button shadow-[inset_0_-4px_0px_0px_rgba(0,_0,_0,_0.09)] py-[15px] pr-[45px] pl-[44px] max-w-[279px] text-[15px] font-semibold leading-[1.73] tracking-[1px] text-center text-[#ffffff] whitespace-nowrap flex justify-center cursor-pointer hover:bg-[#77e2b3] desktop:pr-[136px] desktop:pl-[134px] desktop:max-w-screen-2xl "
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p className="text-[11px] font-medium leading-[1.91] text-[#bab7d4] text-center max-w-[279px] mt-[8px] desktop:leading-[2.36]  desktop:max-w-screen-2xl desktop: w-[577.2px]">
          By clicking the button, you are agreeing to our
          <span className="font-bold text-background ml-[4px]">
            Terms and Services
          </span>
        </p>
      </div>
    </>
  );
}
