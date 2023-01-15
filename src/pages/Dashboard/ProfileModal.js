import React from 'react';
import { toast } from 'react-toastify';
import { AiOutlineClose } from "react-icons/ai";

const ProfileModal = ({ user, setEditProfile }) => {
    const handleBooking = event => {
        event.preventDefault();

        const profileInfo = {
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            education: event.target.education.value,
            city: event.target.city.value,
            district: event.target.district.value,
            linkedInurl: event.target.linkedInurl.value,
        }

        fetch('https://manufacturer-server-67n7.onrender.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success(`Profile Updated successfully.`, {
                        theme: "colored",
                    });
                }
                setEditProfile(null)
            })
    };
    return (
        <>
            <input type="checkbox" id="my-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2"><AiOutlineClose></AiOutlineClose></label>
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <div className='pt-5'>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2'>
                            <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-full" />
                            <input type="email" name='email' disabled className="input input-bordered w-full" value={user.email} />
                            <input type="text" name='education' placeholder="Education" className="input input-bordered w-full" />
                            <input type="text" name='city' placeholder="City" className="input input-bordered w-full" />
                            <input type="text" name='district' placeholder="District" className="input input-bordered w-full" />
                            <input type="text" name='linkedInurl' placeholder="LinkedIn Url" className="input input-bordered w-full" />
                            <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full" />
                            <input type="submit" placeholder="Submit" className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white font-bold" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileModal;