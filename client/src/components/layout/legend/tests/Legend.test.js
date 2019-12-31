import React from 'react'
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

enzyme.configure({ adapter: new Adapter() })

import Legend from '../Legend'

describe('<Legend />', ()=>{

    let legendWrapper
    let legendInstance

    const legend = (disableLifecycleMethods = false)=>shallow(<Legend />,{disableLifecycleMethods})

    beforeEach(()=>{
        legendWrapper = legend()
        legendInstance = legendWrapper.instance()
    })

    afterEach(() => {
        legendWrapper = undefined;
        legendInstance = undefined;
    })

    it('renders without crashing', () => {
        expect(legend().exists()).toBe(true)
    })

    it('renders a div', () => {
        // Dzięki metodzie first() sprawdzamy czy div jest pierwszym dzieckiem <Legend />
        expect(
            legendWrapper
            .first()
            .type(),
        ).toBe('div')
    })
    
    describe('the rendered div', () => {
        const div = () => legendWrapper.first()
    
        it('contains everything else that gets rendered', () => {
          // Podczas wywoływania children() na wrapperze, enzyme pomija w wyszukiwaniu zewnętrzny węzeł. 
          // Dzięki temu możemy sprawdzić czy zawartość diva
          // faktycznie zawiera wszystko co renderuje <Legend />
          expect(div().children()).toEqual(legendWrapper.children())
        })
    })
})