import React from 'react';
import PropTypes from 'prop-types';

// helper function to dynamically build classnames
function getClassNames(selected, currentIndex) {
    return selected === currentIndex
        ? 'tabsNavLink tabsNavLink--isActive'
        : 'tabsNavLink';
}

/**
 * Tabs sub-component responsible for rendering individual tabs nav item
 * @param {Object} props
 * @returns {JSX}
 */
const TabsNavItem = props => {
    return (
        <a
            className={getClassNames(props.selected, props.index)}
            onClick={props.onClick(props.index)}>
            {props.label}
            {props.icon}
        </a>
    );
};

TabsNavItem.propTypes = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
};

export default TabsNavItem;
