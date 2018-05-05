import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {debounce, noop} from './helpers';

import TabsHorz from './TabsHorz';
import TabsVert from './TabsVert';

import './tabs.css';

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
        if (this.props.isResponsive) {
            this.checkLayout();
            window.addEventListener('resize', debounce(this.checkLayoutHandler, 100));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected !== this.state.selected) {
            this.props.onTabChange(this.state.selected);
        }
    }


    checkLayout() {
        if (window.matchMedia(`(min-width: ${this.props.responsiveWidth}px)`).matches) {
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

    /**
    * Click handler for tabs navigation
    * @method handleNavClick
    * @param {Number} index clicked tab's index value
    * @returns {Function} sets selected state
    */
    handleNavClick = index => {
        return event => {
            event.preventDefault();

            if (this.state.isVert) {
                this.setState(prevState => {
                    return {selected: prevState.selected === index ? -1 : index}
                });
            } else {
                this.setState(prevState => {
                    return {selected: index}
                });
            }
        };
    }

    render() {

        if (this.state.isVert) {
            return <div className="tabs tabs--isVert">
            <TabsVert
                onClick={this.handleNavClick}
                selected={this.state.selected}
                tabs={this.props.children}
                showIconsVert={this.props.showIconsVert}
            />
            </div>

        } else {
            return <div className="tabs">
            <TabsHorz
                onClick={this.handleNavClick}
                selected={this.state.selected}
                tabs={this.props.children}
                showIconsHorz={this.props.showIconsHorz}
            />
            </div>
        }

    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    defaultSelected: PropTypes.number,
    onTabChange: PropTypes.func,
    responsiveBreakpoint: PropTypes.string
};

Tabs.defaultProps = {
    defaultSelected: 0,
    onTabChange: noop,
    responsiveBreakpoint: '500'
};

export default Tabs;
