import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabsNavItem from './TabsNavItem';

/**
 * Tabs sub-component responsible for rendering tab navigation
 * @param {Object} props
 * @returns {JSX}
 */
class TabsNav extends Component {

    buildNav() {
        const navItems = this.props.tabs.map((tab, index) => {
            const label = tab.props.label;

            return (
                <TabsNavItem
                    index={index}
                    key={'tabNav_' + index}
                    label={label}
                    onClick={this.props.onClick}
                    selected={this.props.selected}
                />
            );
        });

        return navItems;
    }

    render() {
        return (
            <ol className="tabs__nav">
                {this.buildNav()}
            </ol>
        );
    }
}

TabsNav.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabsNav;
