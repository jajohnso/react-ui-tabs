import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tabs sub-component responsible for rendering individual tab content panels
 * @param {Object} props
 * @returns {JSX}
 */
const TabPanel = props => {
    const isSelected = (props.selected === props.index);
    const panelClassName = isSelected ? 'tabs__panel tabs__panel--isActive' :'tabs__panel';

    return (
        <div className={panelClassName}>
            {props.children}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabPanel;
