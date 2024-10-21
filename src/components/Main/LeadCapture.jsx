const LeadCapture = ({ fonts, renderLogo, cornerRadius, brandColor }) => {
  return (
    <div
      className={`w-full sm:w-[60%] md:w-[41%] flex justify-center ${fonts} `}
    >
      <form className="w-full lg:w-2/3 bg-white border border-gray-300 rounded-2xl px-8 py-10">
        <div className="flex justify-center items-center mb-5">
          {renderLogo()}
        </div>

        <h2 className="text-4xl font-black leading-tight text-gray-900 text-center">
          Get notified when we launch
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className={`block w-full ${cornerRadius} border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="first-name"
                className={`block w-full ${cornerRadius} border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="type"
                autoComplete="last-name"
                className={`block w-full ${cornerRadius} border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col gap-4">
          <button
            type="submit"
            className={`${cornerRadius} bg-[#${brandColor}] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db2777]`}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadCapture;
