import React from 'react';

const About = () => {
    console.log("About component rendered")
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>This application is designed to help you curate your favorite songs, movies, books, and memories.</p>
            <p>We aim to provide a personal space where you can express yourself and share what makes you unique.</p>
            <p>Thank you for being part of our community!</p>
        </div>
    );
};

export default About;