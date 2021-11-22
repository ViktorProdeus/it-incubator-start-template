import React from 'react';
import Header from "../header/Header";
import Routes from "../../routes/Routes";
import Footer from "../footer/Footer";

const Main = () => {
    return (
        <>
            <Header/>
            <main>
                <Routes/>
            </main>
            <Footer/>
        </>
    );
};

export default Main;