import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TabsNav from './TabsNav';

class TabsHorz extends Component {

    renderPanels() {
        return this
            .props.tabs
            .map((panel, index) => {
                return React.cloneElement(panel, {
                    selected: this.props.selected,
                    index,
                    key: index,
                });
            })
    }

    render() {
        return (
            <Fragment>
                <TabsNav
                    onClick={this.props.onClick}
                    selected={this.props.selected}
                    tabs={this.props.tabs}
                    showIconsHorz={this.props.showIconsHorz}
                />
                <div className="tabs__panels">
                    {this.renderPanels()}
                </div>
            </Fragment>
        );
    }
}

TabsHorz.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    tabs: PropTypes.node.isRequired,
    showIconsHorz: PropTypes.bool,
};

TabsHorz.defaultProps =  {
    showIconsHorz: false,
};

export default TabsHorz;
