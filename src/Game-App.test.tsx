import { shallow } from 'enzyme';
import React from 'react';

import GameApp from './Game-App';

describe('<App />', () => {
  let component

  beforeEach(() => {
    component = shallow(<GameApp/>)
  })
  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})