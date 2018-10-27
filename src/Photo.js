import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Photo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            url: undefined,
            title: undefined,
            thumbnailUrl: undefined,
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            url: this.props.url,
            title: this.props.title,
            thumbnailUrl: this.props.thumbnailUrl,
            albumId: this.props.albumId
        })
    }

    // No need of componentDidUpdate because this.props never change


    render() {
        // noinspection JSUnresolvedVariable
        return (
            <Link to={{
                pathname: `/albums/${this.state.albumId}/photos/${this.state.id}`,
                url: this.state.url,
                alt: this.state.title
            }}>
                <img src={this.state.thumbnailUrl} alt={this.state.title}/>
            </Link>
        );
    }
}
