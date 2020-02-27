import React from 'react';
import SearchBar from '../components/Searchbar';
import ReactTestUtils from 'react-dom/test-utils';

const handleSearch = jest.fn();
const searchBar = ReactTestUtils.renderIntoDocument(
    <SearchBar filterText="test"
    onFilterTextChange="test" />
);
ReactTestUtils.Simulate.change(input, {target: {value: 'test'}});
expect(handleSearch).toHaveBeenCalledWith('test')