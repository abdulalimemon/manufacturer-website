import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className='container mx-auto py-5'>
                <div className='px-4'>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body px-3 text-center">
                            <h2 className="text-2xl font-semibold">How to improve React js app performance? </h2>
                            <p className='text-base'>Some techniques to improve React app performance are: <br />
                                Using Stateless Components and React.PureComponent <br />
                                Using Production Mode Flag in Webpack <br />
                                Implementing Dependency optimization <br />
                                Using React.Fragments to Avoid Additional HTML Element Wrappers <br />
                                Avoiding Inline Function Definition in the Render Function <br />
                                Throttling and Debouncing Event Action in JavaScript <br />
                                Avoiding Index as Key for map <br />
                                Avoiding Props in Initial States <br />
                                Spreading props on DOM elements <br />
                            </p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body px-3 text-center">
                            <h2 className="text-2xl font-semibold">What are the different ways to manage a state in a React application?</h2>
                            <p className='text-base'>1. Hooks<br />
                                2. React Context API<br />
                                3. Apollo Link State<br />
                                4. Redux<br />
                            </p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body px-3 text-center">
                            <h2 className="text-2xl font-semibold">How does prototypical inheritance work?</h2>
                            <p className='text-base'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.<br />
                            </p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl mt-5">
                        <div className="card-body px-3 text-center">
                            <h2 className="text-2xl font-semibold">what is unit test?</h2>
                            <p className='text-base'>Unit testing is a software development process in which the smallest testable parts of an application called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.<br />

                                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.<br />

                                It simplifies the debugging process.<br />

                                Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.<br />

                                Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.<br />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;