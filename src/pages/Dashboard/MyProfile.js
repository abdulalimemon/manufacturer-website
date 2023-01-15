import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FiEdit } from "react-icons/fi";
import ProfileModal from './ProfileModal';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [editProfile, setEditProfile] = useState(null);
    const [updateProfile, setUpdateProfile] = useState([]);

    useEffect(() => {
        fetch(`https://manufacturer-server-67n7.onrender.com/profile`)
            .then(res => res.json())
            .then(data => setUpdateProfile(data));
    }, []);

    return (
        <section className="pt-8 bg-blueGray-50">
            <div className="w-full lg:w-8/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div>
                                <label htmlFor="my-profile-modal" className='btn btn-success text-base font-semibold capitalize' onClick={() => setEditProfile(updateProfile)}>Edit <FiEdit className='ml-2'></FiEdit>
                                </label>
                            </div>
                            <div className="w-full px-4 text-center mt-5">
                                <div className="flex flex-col lg:flex-row justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User Full name</p>
                                        <h2 className='text-xl font-semibold'>{user.displayName}</h2>
                                    </div>
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User Email Address</p>
                                        <h2 className='text-xl font-semibold'>{user.email}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User Education</p>
                                        <h2 className='text-xl font-semibold'>{updateProfile.education}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User City</p>
                                        <h2 className='text-xl font-semibold'>{updateProfile.city}</h2>
                                    </div>
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User District</p>
                                        <h2 className='text-xl font-semibold'>{updateProfile.district}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>User Phone Number</p>
                                        <h2 className='text-xl font-semibold'>{updateProfile.phone}</h2>
                                    </div>
                                    <div className="mr-4 p-3 text-center lg:text-left">
                                        <p className='text-base font-semibold'>LinkedIn Profile Url</p>
                                        <h2 className='text-xl font-semibold'>{updateProfile.linkedInurl}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                editProfile && <ProfileModal
                    user={user}
                    setEditProfile={setEditProfile}>
                </ProfileModal>
            }
        </section>
    );
};

export default MyProfile;