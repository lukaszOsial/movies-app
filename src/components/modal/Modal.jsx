import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = props => {
	const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(props.active);
    }, [props.active])
    
	return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
};

Modal.propTypes = {
	active: PropTypes.bool,
	id: PropTypes.string,
};

export default Modal;
