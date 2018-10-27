import React, {Component} from 'react'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'


export default class PhotoModal extends Component {

    render() {
        // noinspection JSUnresolvedVariable
        return (
            <div>
                <Modal
                    isOpen={true}
                    ariaHideApp={false}
                >
                    <Link to={{pathname: `/albums/${this.props.match.params.albumId}`}}>Close</Link>
                    <img src={this.props.location.url} alt={this.props.location.alt}/>
                </Modal>
            </div>
        );
    }
}
