import React from 'react';
import '../AuthReg.css';

interface ErrorWindowProps {
    message: string;
}

const ErrorWindow: React.FC<ErrorWindowProps> = ({ message }) => {
    return (
        <div className="error-window">
            <div className="error-message">{message}</div>
        </div>
    );
};

export default ErrorWindow;
