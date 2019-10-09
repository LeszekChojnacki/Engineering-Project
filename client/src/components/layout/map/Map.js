import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

//Mechanics
import {addContours} from './mapContours'
import {addData} from './addData'

//Components
import Searchbar from '../search/Searchbar'
import Tabbar from '../tabbar/Tabbar'

/* 
    Zakres markowania, ostatecznie zostanie wynioneny do osobnego pliku, 
    a zakres będzie zmieniał się dynamicznie w zależności od otrzymanego zakresu danych
*/
const options = [{
    name: 'Population',
    description: 'Liczba wystąpień w Województwach',
    property: 'POPULATION',
    stops: [
      [0, '#f8d5cc'],
      [1, '#f4bfb6'],
      [5, '#f1a8a5'],
      [10, '#ee8f9a'],
      [50, '#ec739b'],
      [100, '#dd5ca8'],
      [250, '#c44cc0'],
      [500, '#9f43d7'],
      [1000, '#6e40e6']
    ]
  },
  {
    name: 'Population',
    description: 'Liczba wystąpień w Powiatach',
    property: 'POPULATION',
    stops: [
      [0, '#f8d5cc'],
      [1000, '#f4bfb6'],
      [5000, '#f1a8a5'],
      [100000, '#ee8f9a'],
      [500000, '#ec739b'],
      [1000000, '#dd5ca8'],
      [2500000, '#c44cc0'],
      [5000000, '#9f43d7'],
      [10000000, '#6e40e6']
    ]
  },
  {
    name: 'Population',
    description: 'Liczba wystąpień w Gminach',
    property: 'POPULATION',
    stops: [
      [0, '#f8d5cc'],
      [1000, '#f4bfb6'],
      [5000, '#f1a8a5'],
      [100000, '#ee8f9a'],
      [500000, '#ec739b'],
      [1000000, '#dd5ca8'],
      [2500000, '#c44cc0'],
      [5000000, '#9f43d7'],
      [10000000, '#6e40e6']
    ]
  }
]

class Map extends Component {
    
    map;

    constructor(){
        super()
        this.state = {
            active: options[0],
            //DUMMY DB CONTENT
            db: [
                {
                    "_id":"5d7b3e5590c8f97884300b82",
                    "KOD_TERYT":201011,
                    "WOJEWODZTWO":"DOLNOŚLĄSKIE",
                    "POWIAT":"BOLESŁAWIECKI",
                    "GMINA":"BOLESŁAWIEC",
                    "OSOB":36619,
                    "KOBIET":19712,
                    "MEZCZYZN":16907,
                    "PONIZEJ_18_ROKU_ZYCIA":5898,
                    "KOBIET_PONIZEJ_18_ROKU_ZYCIA":2931,
                    "MEZCZYZN_PONIŻEJ_18_ROKU_ZYCIA":2967,
                    "POWYZEJ_18_ROKU_ZYCIA":30721,
                    "KOBIET_POWYZEJ_18":16781,
                    "MEZCZYZN_POWYZEJ_18_ROKU_ZYCIA":13940
                },
                {
                    "_id":"5d7b3e5590c8f97884300b83",
                    "KOD_TERYT":201022,
                    "WOJEWODZTWO":"DOLNOŚLĄSKIE",
                    "POWIAT":"BOLESŁAWIECKI",
                    "GMINA":"BOLESŁAWIEC",
                    "OSOB":14092,
                    "KOBIET":7081,
                    "MEZCZYZN":7011,
                    "PONIZEJ_18_ROKU_ZYCIA":2772,
                    "KOBIET_PONIZEJ_18_ROKU_ZYCIA":1345,
                    "MEZCZYZN_PONIŻEJ_18_ROKU_ZYCIA":1427,
                    "POWYZEJ_18_ROKU_ZYCIA":11320,
                    "KOBIET_POWYZEJ_18":5736,
                    "MEZCZYZN_POWYZEJ_18_ROKU_ZYCIA":5584
                }
            ],
            data:null
        }
    }

    componentDidUpdate() {
        this.setFill()
    }

    componentDidMount() {
        
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
        this.map = new mapboxgl.Map({
        container: 'Map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [16.145136, 51.919437],
        minZoom: 0,
        maxZoom: 9,
        zoom: 5.7
        })

        this.map.on('load', () => {

            /* 
                Funkcja addContours w zależności od argumentu zwraca inne kontury
                0 Województwa
                1 Powiaty
                2 Gminy
            */
            var data = addContours(2)

            /* 
                Funkcja addData dokłada do GeoJSON'a konturów parametr zawierajacy 
                wartość liczby wystąpień danego nazwiska w danym obszarze

                (Obecnie dokładam wartość losową)
            */
            addData(data)

            this.map.addSource('contours', { type: 'geojson', data })

            this.map.addLayer({
                id: 'contours',
                type: 'fill',
                source: 'contours',
                paint: {
                    'fill-opacity': 0.4
                }
            }, 'country-label-lg');
        
            this.setFill()
        })
    }

    setFill() {
        const { property, stops } = this.state.active;
        this.map.setPaintProperty('contours', 'fill-color', {
          property,
          stops
        });
    }

    render(){
        return (
            <div>
                <div id="Map"/>
                <Searchbar />
                <Tabbar />
            </div>
        )
    }
}

export default Map