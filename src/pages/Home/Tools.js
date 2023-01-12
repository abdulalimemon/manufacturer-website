import React from 'react';
import useTools from '../../components/hooks/useTools';
import ToolItem from './ToolItem';

const Tools = () => {
    const [tools, setTools] = useTools();
    return (
        <section>
            <div className="container px-5 py-10 lg:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8 lg:mb-16">
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-4 lg:mb-8">Our Tools</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        tools.slice(0, 3).map(tool => <ToolItem tool={tool} key={tool._id}></ToolItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;