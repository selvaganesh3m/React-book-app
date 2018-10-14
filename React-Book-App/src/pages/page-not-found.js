import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

let PageNotFound = (props) => {
    return(
        <div className="has-fixed-footer">
            <Header />
            <section id="page-not-found">
            <h1>Page Not Found</h1>
            </section>
            <Footer />
        </div>
      )
}
export default PageNotFound;