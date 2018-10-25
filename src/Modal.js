import React, {Component} from 'react'
import Modal from 'react-modal'


export default class CustomModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={true}
                >
                    <h2>Modal</h2>
                </Modal>
            </div>
        );
    }
}
