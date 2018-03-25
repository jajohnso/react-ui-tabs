import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {debounce} from './helpers';

/**
 * Tabs sub-component responsible for rendering individual tab content panels
 * @param {Object} props
 * @returns {JSX}
 */
class TabPanel extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.panel = null;
    }

    setHeight() {

        if ( !this.props.isVert) {
            return;
        }

        if (!this.panel && this.props.selected === this.props.index) {
            return 'none';
        }

        return this.props.selected === this.props.index
            ? this.panel.scrollHeight
            : 0;
    }

    render() {
        const panelClassName = this.props.selected === this.props.index
            ? 'tabs__panel tabs__panel--isActive'
            : 'tabs__panel';

        return (
            <div
                className={panelClassName}
                ref={panel => this.panel = panel}
                style={{ maxHeight: this.setHeight() }}
            >
                <div className="tabs__panelContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired
};

export default TabPanel;
