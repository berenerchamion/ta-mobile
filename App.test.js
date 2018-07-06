import React from 'react';
import App from './App';
import configureStore from 'redux-mock-store'
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

const middlewares = [];
const mockStore = configureStore(middlewares)

configure ({adapter: new Adapter()})

const initialState = {
    posts: [],
}

it('renders without crashing', () => {
  const wrapper = shallow(
      <App />,
      {context: {store: mockStore(initialState) } },
  )
  expect(wrapper.dive()).toMatchSnapshot()
})