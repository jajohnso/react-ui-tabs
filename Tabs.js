import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import TabsNav from './TabsNav';

import './tabs.css';

const STACKED_WIDTH = '(min-width: 500px)';

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

        this.checkLayoutHandler = this.checkLayout.bind(this);

        this.state = {
            selected: this.props.defaultSelected,
            isStacked: this.checkLayout(),
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.checkLayoutHandler);
    }

    checkLayout() {
        if (window.matchMedia(STACKED_WIDTH).matches) {
            /* the viewport is at least 500 pixels wide */
            console.log('match');
            return true;
          } else {
            /* the viewport is less than 500 pixels wide */
            console.log('no match');
            return false;
          }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected === this.state.selected) {
            return;
        }

        this.props.onTabChange(this.state.selected);
    }

    renderPanels() {
        return this.props.children.map((panel, index) => {
          return React.cloneElement(panel, {
            selected: this.state.selected,
            index,
            key: index,
          })
        })
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
                    {this.renderPanels()}
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
