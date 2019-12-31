import React from 'react'
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

enzyme.configure({ adapter: new Adapter() })

import Tabbar from '../Tabbar'

describe('<Tabbar />', ()=>{

    let tabbarWrapper
    let tabbarInstance

    const tabbar = (disableLifecycleMethods = false)=>shallow(<Tabbar />,{disableLifecycleMethods})

    beforeEach(()=>{
        tabbarWrapper = tabbar()
        tabbarInstance = tabbarWrapper.instance()
    })

    afterEach(() => {
        tabbarWrapper = undefined;
        tabbarInstance = undefined;
    })

    it('renders without crashing', () => {
        expect(tabbar().exists()).toBe(true)
    })

    it('renders a div', () => {
        expect(
            tabbarWrapper
            .first()
            .type(),
        ).toBe('div')
    })
    
    describe('the rendered div', () => {
        const div = () => tabbarWrapper.first()
    
        it('contains everything else that gets rendered', () => {
          expect(div().children()).toEqual(tabbarWrapper.children())
        })
    })

    it('renders <Paper />', () => {
        expect(tabbarWrapper.find(Paper).length).toBe(1)
    })

    it('renders <Tabs />', () => {
        expect(tabbarWrapper.find(Tabs).length).toBe(1)
    })

    it('renders <Tab />', () => {
        expect(tabbarWrapper.find(Tab).length).toBe(3)
    })
})