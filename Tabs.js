import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import TabsNav from './TabsNav';

/**
 * Tabbed UI component
 * Individual tabs are created by wrapping content in <TabPanel>
 * Tab navigation is dynamically generated based on a label prop passed into each <TabPanel>
 * The first tab is selected by default, but can be overriden by adding a selected prop
 * with the index of the desired tab
 * @class Tabs
 * @returns {JSX}
 */
class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.defaultSelected,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected === this.state.selected) {
            return;
        }

        this.props.onTabChange(this.state.selected);
    }

    /**
     * Click handler for tabs navigation
     * @method handleNavClick
     * @param {Number} index clicked tab's index value
     * @returns {Function} sets selected state
     */
    handleNavClick = index => {
        return event => {
            event.preventDefault();
            this.setState({ selected: index });
        };
    }

    render() {
        return (
            <div className="tabs">
                <TabsNav
                    onClick={this.handleNavClick}
                    selected={this.state.selected}
                    tabs={this.props.children}
                />
                <div className="tabs__panels">
                    {this.props.children[this.state.selected]}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultSelected: PropTypes.number,
    onTabChange: PropTypes.func,
};

Tabs.defaultProps = {
    defaultSelected: 0,
    onTabChange: _noop,
};

export default Tabs;
