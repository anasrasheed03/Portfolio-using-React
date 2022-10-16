/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalWrapper = (props) => (
  <Modal show="true" centered className="modalDiv">
    {props.children}
  </Modal>
);

export default ModalWrapper;
