import React, {Component} from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'


export default class PhotoModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albumId: undefined,
            url: undefined,
            alt: undefined,
        }
    }

    componentDidMount() {
        this.setState({
            albumId: this.props.match.params.albumId,
            alt: this.props.location.title,
            url: this.props.location.url,
        })
    }

    // No need of componentDidUpdate because this.props never change

    render() {
        // noinspection JSUnresolvedVariable
        return (
            <div>
                <Modal
                    isOpen={true}
                    ariaHideApp={false}
                >
                    <Link to={{pathname: `/albums/${this.state.albumId}`}}>Close</Link>
                    <img src={this.state.url} alt={this.state.alt}/>
                </Modal>
            </div>
        );
    }
}
