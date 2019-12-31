import React, { Component } from 'react'
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

enzyme.configure({ adapter: new Adapter() })

import Map from '../Map'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}))

describe('<Map />', ()=>{

    let mapWrapper
    let mapInstance

    const map = (disableLifecycleMethods = false)=>shallow(<Map />,{disableLifecycleMethods})

    beforeEach(()=>{
        mapWrapper = map()
        mapInstance = mapWrapper.instance()
    })

    afterEach(() => {
        mapWrapper = undefined;
        mapInstance = undefined;
    })

    it('renders without crashing', () => {
        expect(map().exists()).toBe(true);
    })
})