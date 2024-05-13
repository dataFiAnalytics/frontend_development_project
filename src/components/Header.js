import React from 'react';

function Header() {
    return (
        <header>
            <meta name="description" content="Little Lemon restaurant website"/>
            <meta property="og:title" content="Little lemon restaurant's website"/>
            <meta property="og:description" content="Book your tables for any kind and size of occasions."/>
            <meta property="og:image" content="assets/restaurant.jpg"/>

            <img src="./assests/logo.svg" alt="Logo" />
        </header>
    );
}



export default Header;