import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import AlbumList from './AlbumList'
import Album from "./Album";
import CustomModal from './Modal'

class App extends Component {
  render() {
    return (
      <div>
          <Link to={{pathname: '/albums'}}>
              Album list
          </Link>
          <Route path='/albums' component={AlbumList}/>
          <Route exact path='/albums/:id(\d+)' component={Album}/>
          <Route exact path='/albums/:id(\d+)/photo' component={CustomModal}/>
      </div>
    );
  }
}

export default App;
