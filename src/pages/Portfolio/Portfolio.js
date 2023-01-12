import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className='container mx-auto py-5'>
                <div>
                    <h4 className='text-center font-medium text-lg'>Hey, I'm Abdul Alim Emon.</h4>
                    <p className='text-center font-medium text-base'>I am a 4th-year honors student in political science</p>
                    <h3 className='text-center font-medium text-base'>My email : abdulalimemon11@gmail.com</h3>
                </div>
                <div className='py-5 text-center'>
                    <h2 className='font-medium text-xl'>My Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Node JS</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className='py-5'>
                    <h2 className='text-center font-medium text-xl'>My Projects</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5' >
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="font-medium text-lg text-center">React Shop</h2>
                                <Link className='btn btn-primary' to='https://emon-1.netlify.app/'>Visit</Link>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="font-medium text-lg text-center">WareHouse Project</h2>
                                <Link className='btn btn-primary' to='https://warehouse-0.web.app/'>Visit</Link>
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <h2 className="font-medium text-lg text-center">Your Doctor App</h2>
                                <Link className='btn btn-primary' to='https://ur-dr1.web.app/'>Visit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;