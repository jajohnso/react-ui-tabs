import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import TabPanel from './TabPanel';

it('renders tab component', () => {
  const tabs = shallow(<Tabs><TabPanel label="test1"><div>Test Content</div></TabPanel></Tabs>);
  expect(tabs.contains(tabPanel)).toEqual(true);
});
