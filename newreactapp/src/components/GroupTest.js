import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import FooterTest from './FooterTest';
import '../css/App.css';

function GroupTest(){
    return (
        <main className = "page bg-white" id= "test">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-white">
                        <div className="container">
                         <Header />
                         <MainContent />
                         <FooterTest />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default GroupTest;
