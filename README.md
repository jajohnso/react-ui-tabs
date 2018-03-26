# react-ui-tabs
A simple react component for creating a clickable tabbed interface.

## Options
Options can be passed into the Component base element as props.

### defaultSelected
Optional prop to specify which tab is open on page load. Defaults to 0 if omitted.
#### type  `Number`
Accepts a number representing the zero-based index number of choosen tab.

Example:
```
defaultSelected={2}
```
This would open the 3rd tab in the component on page load.
