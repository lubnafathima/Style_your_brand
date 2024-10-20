import { RxAvatar } from "react-icons/rx";

const Profile = ({fonts, cornerRadius, brandColor}) => {
  return (
    <div className={`w-[41%] flex gap-4 bg-white border border-gray-300 rounded-2xl ${fonts} `}>
      <div className="w-1/3 h-full px-12 py-12">
        <p className="mb-3 cursor-pointer">Profile</p>
        <p className="mb-3 cursor-pointer">Account</p>
        <p className="mb-3 cursor-pointer">Team</p>
        <p className="mb-3 cursor-pointer">Plan</p>
        <p className="mb-3 cursor-pointer">Billing</p>
      </div>
      <form className="w-2/3 border-l px-8 py-10">
        <h2 className="text-4xl font-black leading-7 text-gray-900">
          Profile
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="profile-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Profile Image
            </label>
            <div className="mt-2 flex items-center gap-4">
              <RxAvatar className="text-5xl text-gray-500" />
              <button
                type="submit"
                className={`${cornerRadius} bg-[#${brandColor}] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db2777]`}
              >
                Add profile image
              </button>
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
                type="text"
                autoComplete="last-name"
                className={`block w-full ${cornerRadius} border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

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
                type="email"
                autoComplete="email"
                className={`block w-full ${cornerRadius} border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`mt-6 ${cornerRadius} bg-[#${brandColor}] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db2777]`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
