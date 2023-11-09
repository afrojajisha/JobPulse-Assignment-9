import React from 'react';
import {Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError;
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen ">
                <h1 className="text-6xl font-bold mb-4 text-orange-500">Oops!</h1>
                <p className="text-2xl mb-8">Something went wrong... {status || 404}</p>
                <p className="text-lg mb-8">It seems there was an error. Please try again later.</p> <p>{error?.message}</p>
                <Link to='/'><button className="bg-white text-red-500 px-4 py-2 rounded hover:bg-red-100 focus:outline-none">
                    Go Back
                </button></Link>
                
                </div>
        </div>
    );
};

export default ErrorPage;