import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tabs sub-component responsible for rendering individual tab content panels
 * @param {Object} props
 * @returns {JSX}
 */
const TabPanel = props => {
    return (
        <div className="tabs__panel">
            {props.children}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabPanel;
