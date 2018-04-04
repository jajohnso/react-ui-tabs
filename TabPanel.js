import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TabIcon from './TabIcon';
import CamelCase from 'lodash/camelCase';

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

        const panelID = CamelCase(this.props.label);

        return (
            <div
                className={panelClassName}
                id={panelID}
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
    children: PropTypes.node.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
    icon: <TabIcon/>,
}

export default TabPanel;
