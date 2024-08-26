import React, { useEffect, useState } from 'react';

const messages = [
    "Oops! Looks like this page is missing.",
    "We couldn't find the page you were looking for.",
    "It seems that the page you're looking for doesn't exist.",
    "Sorry, but the page you're looking for has not been found.",
    "The page you're looking for is nowhere to be found.",
    "This page is not available.",
    "We're sorry, but we can't seem to find the page you're looking for."
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

const NotFoundPage: React.FC = () => {
    const [randomMessage, setRandomMessage] = useState<string>('');

    useEffect(() => {
        setRandomMessage(getRandomMessage());
    }, []);

    return (
        <div className="text-center w-full h-[50vh] flex items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold mb-4">404 - OOPS</h1>
                <p className="text-lg">{randomMessage}</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
