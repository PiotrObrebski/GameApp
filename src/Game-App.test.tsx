import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import GameApp from './Game-App';

describe('GameApp', () => {
  let component: ShallowWrapper<{any: any}>

  beforeEach(() => {
    component = shallow(<GameApp/>)
  })
  test('Should mount', () => {
    console.log(component.debug());
    expect(component.length).toBe(1)
  })
  // test('should match snapshot', () => {
  //   expect(component).toMatchSnapshot();
  // }
  // )
})