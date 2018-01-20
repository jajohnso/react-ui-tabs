import React from 'react';
import PropTypes from 'prop-types';

// helper function to dynamically build classnames
function getClassNames(selected, currentIndex) {
    return selected === currentIndex
        ? 'tabs__navLink tabs__navLink--isActive'
        : 'tabs__navLink';
}

/**
 * Tabs sub-component responsible for rendering individual tabs nav item
 * @param {Object} props
 * @returns {JSX}
 */
const TabsNavItem = props => {
    return (
        <li>
            <a
                className={getClassNames(props.selected, props.index)}
                onClick={props.onClick(props.index)}>
                {props.label}
            </a>
        </li>
    );
};

TabsNavItem.propTypes = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
};

export default TabsNavItem;
