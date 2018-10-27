import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import AlbumList from './AlbumList'
import Album from "./Album";
import PhotoModal from './PhotoModal'

class App extends Component {
  render() {
    return (
      <div>
          <Link to={{pathname: '/albums'}}>
              Album list
          </Link>
          <Route path='/albums' component={AlbumList}/>
          <Route exact path='/albums/:id(\d+)' component={Album}/>
          <Route exact path='/albums/:albumId(\d+)/photos/:photoId(\d+)' component={PhotoModal}/>
      </div>
    );
  }
}

export default App;
