import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import BooksSectionPage from '../src/pages/books-section';
import BookDetailPage from '../src/pages/book-detail';
 import PageNotFound from '../src/pages/page-not-found'  

class App extends Component {
  render() {
    return (
    <div>
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact component={BooksSectionPage} /> 
        <Route path="/books/:category/:categoryName" exact render={(props) => {
          let {categoryName} = props.match.params;
          return <BooksSectionPage categoryName={categoryName}/>
        }} /> 
        <Route path="/book/:bookID" render={(props) => {
          let {bookID} = props.match.params;
          return <BookDetailPage />
        }} /> 
        <Route component={PageNotFound} /> 
      </Switch> 
    </BrowserRouter>     
    </div>
    );
  }
}

export default App;
