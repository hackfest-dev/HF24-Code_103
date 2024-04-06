const DoctorCard = ({doc}) => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-blue-50 rounded-xl shadow-lg space-y-2 ">
      <a
        href={doc.link}
        className="sm:mx-auto"
      >
        <img
          className="block mx-auto w-[45%] rounded-full"
          src={doc.img_src}
          alt={doc.title}
        />
      </a>

      <div className="text-center space-y-2">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{doc.title}</p>
          <p className="text-slate-500 font-medium">{doc.speciality}</p>
        </div>
        <div className="px-3 py-3 flex justify-center space-x-10">
          <div className="block">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <p className="text-bold-100 font-semibold text-black text-lg ">
                Experience
              </p>
            </div>

            <p>{doc.experience}</p>
          </div>
          <div className="text-center space-y-0.5">
            <p className="text-bold-100 font-semibold text-black text-lg flex items-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              Hospital
            </p>
            <p>{doc.hospital}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-10">
          <a
            href={doc.link}
            className="sm:text-left"
          >
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              View More
            </button>
          </a>
          <div className="flex justify-center space-x-2">
            <div className="flex">
              <p>{doc.ratings}</p>
              <p>⭐</p>
            </div>
            <a href={doc.review_link}>
              <p className="underline decoration-sky-500 text-sky-400">Reviews</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard