import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { RxAvatar } from "react-icons/rx";
import styles from "../../styles/styles";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = () => {
    console.log('fff');
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  }

  return (
     <div className="min-h-screen bg-cyan-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          <span className='text-red-700'>Register</span> as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-cyan-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Full Name
              </label>
              <div className="mt-1">
                <input  value={name}
                  onChange={(e) => setName(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type="text" name="text" autoComplete="name" required/>
              </div>
            </div>

             <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="mt-1 relative">
                <input value={password}
                  onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type={visible ? "text" : "password"} name="password" autoComplete="current-password" required/>

                 {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}

              </div>
            </div>
           
             <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-red-400 hover:bg-red-500"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 hover:shadow-2xl" type="submit">
                Submit
              </button>
            </div>
             <div className={`${styles.noramlFlex} w-full text-slate-600`}>
              <h4>Not have any account?</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup