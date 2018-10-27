import React, {Component} from 'react';
import {Link} from "react-router-dom";
import queryString from 'query-string'
import PagePicker from './PagePicker'

export default class AlbumList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            page: queryString.parse(this.props.location.search).page || 1,
            limit: 6,
        };
    }

    async fetchAlbums() {
        return (await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${this.state.page}&_limit=${this.state.limit}`)).json()
    }

    async componentDidMount() {
        this.setState({
            albums: await this.fetchAlbums()
        });
    }

    async componentDidUpdate(prevProps, prevState) {
        // GET body is considered as url path (matches in route)
        const page = queryString.parse(this.props.location.pathname.split('?')[1]).page || 1;
        if (page !== prevState.page) {
            this.setState({
                page,
            });
            this.setState({
                albums: await this.fetchAlbums()
            });
        }
    }

    render() {
        this.pageNbr = (100 / this.state.limit | 0) + 1;
        return (
            <div>
                <h1>Albums</h1>
                <ul>
                    {this.state.albums.map(album => <li key={album.id}><Link to={{
                        pathname: `/albums/${album.id}`,
                        title: album.title,
                        authorId: album.userId,
                    }}>{album.title}</Link></li>)}
                </ul>
                <PagePicker max={this.pageNbr} baseUrl="/albums"/>
            </div>
        )
    }
}
