import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class AlbumList extends Component{

    constructor() {
        super();
        this.state = {
            albums: [],
        }
    }

    async componentDidMount() {
        this.setState({
            albums: await (await fetch('https://jsonplaceholder.typicode.com/albums')).json()
        })
    }

    render() {
        return (
            <div>
                <h1>Albums</h1>
                {this.state.albums.map(album => <Link key={album.id} to={{
                    pathname: `/albums/${album.id}`,
                    title: album.title,
                    authorId: album.userId,
                }}>{album.title}</Link>)}
            </div>
        )
    }
}
