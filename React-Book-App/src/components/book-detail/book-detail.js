import React from 'react';
import BookContainer from './book-container';

let BookDetail = (props) => {
    return(
        <section id="book-detail">
        <div className="container">
          <BookContainer />
          </div>
      </section>
    )

}

export default BookDetail;