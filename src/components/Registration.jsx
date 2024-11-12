export default function Registration() {
  return (
    <>
      <div className="p-[24px] rounded-[10px] bg-[#ffffff] shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)] mt-[24px] flex flex-col items-center min-[1440px]:p-[40px]">
        <form className=" flex flex-col items-center gap-[16px] max-w-xl min-[1440px]:gap-[20px]">
          <input
            className="border border-[#dedede] py-[15px] pr-[180.6px] pl-[19.4px] max-w-[279px] min-[1440px]:pr-[350px] pl-[32px]"
            placeholder="First Name"
            type="text"
          />
          <input
            className="border border-[#dedede] py-[15px] pr-[180.6px] pl-[19.4px] max-w-[279px] min-[1440px]:pr-[350px] pl-[32px]"
            placeholder="Last Name"
            type="text"
          />
          <input
            className="border border-[#dedede] py-[15px] pr-[180.6px] pl-[19.4px] max-w-[279px] min-[1440px]:pr-[350px] pl-[32px]"
            placeholder="Email Address"
            type="email"
          />
          <input
            className="border border-[#dedede] py-[15px] pr-[180.6px] pl-[19.4px] max-w-[279px] min-[1440px]:pr-[350px] pl-[32px]"
            placeholder="Password"
            type="text"
          />
          <button
            className="rounded-[5px] bg-button shadow-[inset_0_-4px_0px_0px_rgba(0,_0,_0,_0.09)] py-[15px] pr-[45px] pl-[44px] max-w-[279px] text-[15px] font-semibold leading-[1.73] tracking-[1px] text-center text-[#ffffff] whitespace-nowrap flex justify-center min-[1440px]:pr-[136px] min-[1440px]:pl-[134px] min-[1440px]:max-w-[383px]"
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p className="text-[11px] font-medium leading-[1.91] text-[#bab7d4] text-center max-w-[279px] mt-[8px] min-[1440px]:leading-[2.36] min-[1440px]:max-w-[383px]">
          By clicking the button, you are agreeing to our
          <span className="font-bold text-background ml-[4px]">
            Terms and Services
          </span>
        </p>
      </div>
    </>
  );
}
