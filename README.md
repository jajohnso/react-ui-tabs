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

### isResponsive
Flag to indicate whether tabs layout should switch to vertical positioning at smaller screen widths.

#### type  `Boolean`
`true` if tabs should use vertical layout below a specified width. Defaults to false. Specific pixel width can be specified using the `responsiveWidth` prop, otherwise a default of `500px` will be used.

Example:
```
isResponsive={true}
```

### responsiveWidth
Min-width media query pixel value at which vertical layout is triggered.

#### type  `Integer`
Accepts a number representing the zero-based index number of choosen tab. Defaults to `500`.

Example:
```
responsiveWidth={768}
```


##

This would open the 3rd tab in the component on page load.
