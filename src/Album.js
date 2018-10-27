import React, {Component} from 'react'
import Photo from './Photo'

export default class Album extends Component{

    constructor() {
        super();
        this.state = {
            photos: [],
            title: '',
            id: undefined,
            authorId: undefined,
            author: {}
        }
    }

    async fetchPhotos() {
        return (await fetch(`https://jsonplaceholder.typicode.com/albums/${this.state.id}/photos`)).json()
    }

    async fetchAuthor() {
        return (await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.authorId}`)).json()
    }

    async componentDidMount() {
        this.setState({
            title: this.props.location.title,
            authorId: this.props.location.authorId,
            id: this.props.match.params.id,
        });
        this.setState({
            photos: await this.fetchPhotos(),
            author: this.fetchAuthor(),
        })
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevState.id) {
            this.setState({
                id: this.props.match.params.id,
                authorId: this.props.location.authorId
            });
            this.setState({
                photos: await this.fetchPhotos(),
                author: await this.fetchAuthor()
            });
        }
        if (this.props.location.title !== prevState.title) {
            this.setState({
                title: this.props.location.title
            })
        }
    }

    render() {
        // noinspection JSUnresolvedVariable
        return (
            <div>
                <h1>Album {this.state.id}</h1>
                <p>{this.state.title}</p>
                <ul>
                    <li>{this.state.author.name}</li>
                    <li>{this.state.author.username}</li>
                    <li>{this.state.author.email}</li>
                    <li>{this.state.author.phone}</li>
                </ul>
                {this.state.photos.map(photo => <Photo key={photo.id} id={photo.id} url={photo.url} thumbnailUrl={photo.thumbnailUrl} title={photo.title} albumId={this.state.id}/>)}
            </div>
        );
    }
}
