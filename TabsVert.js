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
                    index,
                    isVert: true,
                });

                return (
                    <Fragment key={'tab_' + index}>
                        <TabsNavItem
                            index={index}
                            label={panel.props.label}
                            onClick={this.props.onClick}
                            selected={this.props.selected}
                            icon={this.props.showIconsVert ? panel.props.icon : null}
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
    icon: PropTypes.func,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
    tabs: PropTypes.node.isRequired,
    showIconsVert: PropTypes.bool,
};

TabsVert.defaultProps = {
    showIconsVert: false,
}

export default TabsVert;
