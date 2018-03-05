import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import TabsNavItem from './TabsNavItem';

class TabsVert extends Component {

    renderPanels() {
        return this
            .props
            .tabs
            .map((panel, index) => {
                const currentPanel = React.cloneElement(panel, {
                    selected: this.props.selected,
                    index
                });

                return (
                    <Fragment key={'tab_' + index}>
                        <TabsNavItem
                            index={index}
                            label={panel.props.label}
                            onClick={this.props.onClick}
                            selected={this.props.selected}
                        />
                        {currentPanel}
                    </Fragment>
                )

            })
    }

    render() {
        return (this.renderPanels());
    }
}

TabsVert.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    tabs: PropTypes.node.isRequired
};

export default TabsVert;
