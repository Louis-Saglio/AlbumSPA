import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Photo extends Component {

    render() {
        // noinspection JSUnresolvedVariable
        return (
            <Link to={{
                pathname: `/albums/${this.props.albumId}/photos/${this.props.id}`,
                url: this.props.url,
                alt: this.props.title
            }}>
                <img src={this.props.thumbnailUrl} alt={this.props.title}/>
            </Link>
        );
    }
}
