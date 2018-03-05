import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {debounce, noop} from './helpers';

import TabsHorz from './TabsHorz';
import TabsVert from './TabsVert';

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

        this.checkLayoutHandler = this
            .checkLayout
            .bind(this);

        this.state = {
            selected: this.props.defaultSelected,
            isVert: false
        };
    }

    componentDidMount() {
        this.checkLayout();
        window.addEventListener('resize', debounce(this.checkLayoutHandler, 100));
    }

    checkLayout() {
        if (window.matchMedia(STACKED_WIDTH).matches) {
            /* the viewport is at least 500 pixels wide */
            if (this.state.isVert) {
                this.updateLayout(false);
            } else {
                return false;
            }
        } else {
            /* the viewport is less than 500 pixels wide */
            if (!this.state.isVert) {
                this.updateLayout(true);
            } else {
                return true;
            }
        }
    }

    updateLayout(isVert) {
        return this.setState({isVert: isVert});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected === this.state.selected) {
            return;
        }

        this
            .props
            .onTabChange(this.state.selected);
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
            this.setState({selected: index});
        };
    }

    render() {

        if (this.state.isVert) {
            return <TabsVert
                onClick={this.handleNavClick}
                selected={this.state.selected}
                tabs={this.props.children}/>

        } else {
            return <TabsHorz
                onClick={this.handleNavClick}
                selected={this.state.selected}
                tabs={this.props.children}/>
        }

    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultSelected: PropTypes.number,
    onTabChange: PropTypes.func
};

Tabs.defaultProps = {
    defaultSelected: 0,
    onTabChange: noop
};

export default Tabs;
