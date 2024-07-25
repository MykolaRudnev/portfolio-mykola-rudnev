import React from 'react';

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading...' }) => {
    return (
        <div className="flex flex-col items-center justify-center  bg-opacity-50 rounded-lg">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
            <p className="mt-4 text-xl font-semibold text-white">{message}</p>
        </div>
    );
};

export default LoadingSpinner;