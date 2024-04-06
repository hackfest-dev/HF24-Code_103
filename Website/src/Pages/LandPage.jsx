import { Link } from "react-router-dom";

const LandPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8 p-4 items-center">
          <div className="flex flex-row gap-2 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#6495ED"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-[#6495ED]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <div>
              <h2 className="font-bold text-4xl font-poppins">
                Med<span className="text-[#6495ED]">Stop</span>
              </h2>
            </div>
          </div>
          <div className="font-dosis text-medium text-lg">
            <Link to="/news">News & Articles</Link>
          </div>
        </div>
        <div className="flex flex-row gap-8 p-4 items-center">
          <div className="hover:underline cursor-pointer font-dosis font-medium">
            Sign in/Sign up
          </div>
          <div>
            <div className="rounded-3xl bg-[#3D59AB] px-6 py-2 text-white font-dosis hover:cursor-pointer text-medium">
              <Link to={"/home"}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <div className="font-merriweather font-extrabold text-center text-[4rem] p-[4rem]">
          One stop platform for searching{" "}
          <span className="font-dosis font-normal text-[#6495ED] text-[6rem]">
            doctors
          </span>{" "}
          and{" "}
          <span className="font-dosis font-normal text-[#6495ED] text-[6rem]">
            medical queries
          </span>
        </div>
        <div className="font-dosis text-center text-2xl text-slate-500">
          Empowering individuals to make informed healthcare decisions and
          connect with trusted medical professionals effortlessly
        </div>
        <div className="flex flex-row gap-5 items-center justify-evenly mt-20 mb-20">
          <button className="rounded-3xl bg-[#3D59AB] px-6 py-2 text-2xl text-white font-dosis hover:cursor-pointer">
            <Link to={"/home"}>Search Doctors</Link>
          </button>
          <button className="rounded-3xl px-6 py-2 bg-gray-300 border border-gray-400 font-dosis text-2xl">
            Get Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
