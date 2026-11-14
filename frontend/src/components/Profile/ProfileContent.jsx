import React, { useState, useEffect } from 'react';
import { backend_url } from '../../server';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCamera } from 'react-icons/ai';
import styles from '../../styles/styles';

const ProfileContent = ({ active }) => {
    const { user, error, successMessage } = useSelector((state) => state.user);
    
    // Default to "" so inputs stay controlled even when user is loading
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
    const [password, setPassword] = useState("");

    // Sync state once Redux finishes fetching the user
    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setPhoneNumber(user.phoneNumber || "");
        }
    }, [user]);

    return (
        <div className='w-full'>
            {/* profile */}
            {active === 1 && (
                <>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <img
                                src={`${backend_url}${user?.avatar}`}
                                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                                alt=""
                            />
                            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                <label htmlFor="image">
                                    <AiOutlineCamera />
                                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="w-full px-5">
                        <form>
                            <div className="w-full 800px:flex block pb-3">
                                <div className="w-[100%] 800px:w-[50%]">
                                    <label className="block pb-2">Full Name</label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                        required
                                        value={name} // Changed from user.name to name
                                    />
                                </div>
                                <div className="w-[100%] 800px:w-[50%]">
                                    <label className="block pb-2">Email Address</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                        required
                                        value={email}
                                    />
                                </div>
                            </div>

                            <div className="w-full 800px:flex block pb-3">
                                <div className="w-[100%] 800px:w-[50%]">
                                    <label className="block pb-2">Phone Number</label>
                                    <input
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        type="text"
                                        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                        required
                                        value={phoneNumber}
                                    />
                                </div>
                                <div className="w-[100%] 800px:w-[50%]">
                                    <label className="block pb-2">Enter your password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                        required
                                        value={password}
                                    />
                                </div>
                            </div>
                            <input
                                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                required
                                value="Update"
                                type="submit"
                            />
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileContent;