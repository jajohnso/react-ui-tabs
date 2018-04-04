import React from 'react';
import PropTypes from 'prop-types';
import CamelCase from 'lodash/camelCase';

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
    const { label, icon, selected, index, onClick } = props;

    return (
        <a
            className={getClassNames(selected, index)}
            href={`#${CamelCase(label)}`}
            onClick={onClick(index)}>
            {label}
            {icon ? <span className="tabsNavLink__icon">{icon}</span> : null}
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
