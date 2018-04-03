# react-ui-tabs
A simple react component for creating a clickable tabbed interface.

## Props
Options can be passed into the Component base element as props.

### defaultSelected
Optional prop to specify which tab is open on page load. Defaults to 0 if omitted.
#### type:  `Number`
Accepts a number representing the zero-based index number of choosen tab.

Example:
```
defaultSelected={2}
```

This would open the 3rd tab in the component on page load.

### isResponsive
Flag to indicate whether tabs layout should switch to vertical positioning at smaller screen widths.

#### type:  `Boolean`
`true` if tabs should use vertical layout below a specified width. Defaults to false. Specific pixel width can be specified using the `responsiveWidth` prop, otherwise a default of `500px` will be used.

Example:
```
isResponsive={true}
```

### responsiveWidth
Min-width media query pixel value at which vertical layout is triggered.

#### type:  `Integer`
Accepts a number representing the zero-based index number of choosen tab. Defaults to `500`.

Example:
```
responsiveWidth={768}
```

### showIconsVert
Flag to indicate whether icons should be shown when vertical layout is used.

#### type:  `Boolean`
`true` if icons should be shown. Defaults to `false`.

Example:
```
showIconsVert={true}
```

### showIconsHorz
Flag to indicate whether icons should be shown when horizontal layout is used.

#### type:  `Boolean`
`true` if icons should be shown. Defaults to `false`.

Example:
```
showIconsHorz={true}
```


### icon
Custom SVG icons can be added as separate components and passed into each `TabPanel` component using props.

Example:

Define custom SVG component:

```
import React from 'react';
const TabIcon = (props) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>arrow</title>
            <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
        </svg>
    );
}

export default TabIcon;
```
