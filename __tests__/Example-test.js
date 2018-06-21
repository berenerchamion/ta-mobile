import 'react-native'
import React from 'react'
import AddPost from '../components/AddPost'
import renderer from 'react-test-renderer'

it('works', () => {
    expect(1).toBe(1);
  })

it('renders correctly', () => {
const tree = renderer.create(
    <AddPost />
    ).toJSON();
expect(tree).toMatchSnapshot();
});