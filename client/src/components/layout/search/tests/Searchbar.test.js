import React from 'react'
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

enzyme.configure({ adapter: new Adapter() })

import Searchbar from '../Searchbar'

describe('<Searchbar />', ()=>{

    let searchbarWrapper
    let searchbarInstance

    const searchbar = (disableLifecycleMethods = false)=>shallow(<Searchbar />,{disableLifecycleMethods})

    beforeEach(()=>{
        searchbarWrapper = searchbar()
        searchbarInstance = searchbarWrapper.instance()
    })

    afterEach(() => {
        searchbarWrapper = undefined;
        searchbarInstance = undefined;
    })

    it('renders without crashing', () => {
        expect(searchbar().exists()).toBe(true)
    })

    it('renders a div', () => {
        expect(
            searchbarWrapper
            .first()
            .type(),
        ).toBe('div')
    })
    
    describe('the rendered div', () => {
        const div = () => searchbarWrapper.first()
    
        it('contains everything else that gets rendered', () => {
          expect(div().children()).toEqual(searchbarWrapper.children())
        })
    })

    it('renders <InputBase />', () => {
        expect(searchbarWrapper.find(InputBase).length).toBe(1)
    })

    it('renders <IconButton />', () => {
        expect(searchbarWrapper.find(IconButton).length).toBe(1)
    })

    it('renders <SearchIcon />', () => {
        expect(searchbarWrapper.find(SearchIcon).length).toBe(1)
    })
})