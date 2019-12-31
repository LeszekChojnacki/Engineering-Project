import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'

//Mechanics
import {importContours} from './utilities/importContours'
import {addData} from './utilities/addData'
import {setLegend} from './utilities/setLegend'

//Components
import Searchbar from '../search/Searchbar'
import Tabbar from '../tabbar/Tabbar'
import Legend from '../legend/Legend'
//import Popup from '../popup/Popup'

class Map extends Component {
    
    map

    constructor(){
        super()
        this.state = {
            active: null,
            fetchData: null,
            mapType: 0,
            searchedPhrase: ''
        }
    }

    componentDidUpdate() {
        this.setMapLayer()          
    }

    componentDidMount() {
        
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
        this.map = new mapboxgl.Map({
            container: 'Map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [16.145136, 51.919437],
            maxZoom: 13,
            minZoom: 3,
            zoom: 5.7,
        })

        this.map.once('load', () => {}) 
    }

    setMapLayer(){

        if (!this.map.loaded() || this.state.searchedPhrase === '') return

        var contours = importContours(this.state.mapType)
        var contoursWithData = addData(contours, this.state.mapType, this.state.searchedPhrase)
        contoursWithData.then((data)=>{
            var mpSource = this.map.getSource("contours")

            if (typeof mpSource === 'undefined') 
                this.map.addSource('contours', { type: 'geojson', data })
            else 
                this.map.getSource("contours").setData(data)
    
            var mpLayer = this.map.getLayer("contours")
    
            if (typeof mpLayer === 'undefined') {
                this.map.addLayer({
                    id: 'contours',
                    type: 'fill',
                    source: 'contours',
                    layout: {},
                    paint: {
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            0.8,
                            0.4
                        ]
                    }
                }, 'country-label-lg')

                this.map.addLayer({
                    id: 'state-borders',
                    type: 'line',
                    source: 'contours',
                    layout: {},
                    paint: {
                        'line-color': '#c44cc0',
                        'line-width': 0.01
                    }
                })
            }

            var hoveredStateId = null
        
            // When the user moves their mouse over the state-fill layer, we'll update the
            // feature state for the feature under the mouse.
            this.map.on('mousemove', 'contours', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateId) {
                        this.map.setFeatureState(
                            { source: 'contours', id: hoveredStateId },
                            { hover: false }
                        )
                    }
 
                    hoveredStateId = e.features[0].id
                    this.map.setFeatureState(
                        { source: 'contours', id: hoveredStateId },
                        { hover: true }
                    )
                }
            })
    
            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            this.map.on('mouseleave', 'contours', () => {
                if (hoveredStateId) {
                    this.map.setFeatureState(
                        { source: 'contours', id: hoveredStateId },
                        { hover: false }
                    )
                }
                hoveredStateId = null
            }) 

            // When the user click their mouse over the layer, we'll update the
            this.map.on('click', 'contours', (e) => {

                var popupHTML = `<Popover 
                    style = { zIndex: 2, position: 'absolute' }
                    anchorOrigin={{ vertical: 'center',horizontal: 'center'}}
                    transformOrigin={{vertical: 'center',horizontal: 'center'}}
                >
                    ${e.features[0].id}
                </Popover>`

                if (e.features.length > 0) {
                    new mapboxgl.Popup(
                        {style:"zIndex: 2"},
                        {closeButton: false, closeOnClick: true}
                        )
                    .setLngLat(e.lngLat)
                    .setHTML(popupHTML)
                    .addTo(this.map);
                }
            })

            this.setState({
                active: setLegend(data)
            })

            //Set fill
            if(this.state.active == null) return 

            const { property, stops } = this.state.active
    
            this.map.setPaintProperty('contours', 'fill-color', {
              property,
              stops
            })
        })
    }

    handleChange = (newMapType) => {

        if (this.state.mapType === newMapType) return

        const { searchedPhrase } = this.state

        if (typeof searchedPhrase === 'undefined')return

        this.setState({mapType:newMapType})
    }

    handleSearch = (newSearchPhrase) => {

        if (typeof newSearchPhrase === 'undefined') return

        this.setState({searchedPhrase:newSearchPhrase.toUpperCase()})    
    }

    render(){
        return (
            <div id="Map">
                <Searchbar click={this.handleSearch.bind(this)}/>
                <Tabbar click={this.handleChange.bind(this)}/>
                <Legend active={this.state.active}/>
            </div>
        )
    }
}

export default Map