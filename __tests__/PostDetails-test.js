import 'react-native'
import React from 'react'
import PostDetails from '../components/PostDetails'
import configureStore from 'redux-mock-store'
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const middlewares = []
const mockStore = configureStore(middlewares)

configure ({adapter: new Adapter()})

const initialState = {
    posts: [],
}

it('works', () => {
    expect(1).toBe(1)
  })

it('renders correctly', () => {
    const wrapper = shallow(
        <PostDetails />,
        {context: {store: mockStore(initialState) } },
    )
    expect(wrapper.dive()).toMatchSnapshot()
})