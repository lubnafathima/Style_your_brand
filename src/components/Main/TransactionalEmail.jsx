const TransactionalEmail = ({
  fonts,
  renderLogo,
  cornerRadius,
  brandColor,
}) => {
  return (
    <div
      className={`w-full sm:w-[60%] md:w-[41%] flex justify-center ${fonts} `}
    >
      <form className="w-full lg:w-4/5 bg-white border border-gray-300 rounded-2xl px-8 py-10">
        <div className="flex justify-start mb-6">{renderLogo()}</div>

        <h2 className="text-2xl font-semibold leading-7 text-gray-900 text-start">
          Thanks for signing up!
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="col-span-full">
            <p className="block text-base font-normal leading-6 text-gray-900">
              Hi James,
            </p>
          </div>

          <div className="col-span-full mt-2">
            <p className="block text-base font-normal leading-6 text-gray-900">
              Thanks for signing up for Boltshift! Please confirm your account
              to get started.
            </p>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col gap-4">
          <button
            type="submit"
            className={`${cornerRadius} bg-[#${brandColor}] px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-[#] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db2777]`}
          >
            Confirm your account
          </button>
        </div>

        <div className="col-span-full mt-8">
          <p className="block text-base font-normal leading-6 text-gray-900">
            Thanks,
          </p>
        </div>

        <div className="col-span-full mt-2">
          <p className="block text-base font-semibold leading-6 text-gray-900">
            The Boltshift Team
          </p>
        </div>
      </form>
    </div>
  );
};

export default TransactionalEmail;
