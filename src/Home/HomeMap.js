import React, { Component } from 'react'
import { Key } from '../../src/Home/mapkey.js' // 引入 API key
import GoogleMapReact from 'google-map-react'
import '../../src/styles/Home.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>

// Map
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.033701,
      lng: 121.5433038,
    },
    zoom: 17,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="home_map">
        <div className="home_map_issue">BEEbeE在哪裡，絕對難不倒你</div>
        <div className="home_map_google">
          <GoogleMapReact
            bootstrapURLKeys={{ key: Key }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={59.955413} lng={30.337844} text="BEEbeE" />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

// App
function App() {
  return (
    <div className="App">
      <SimpleMap />
    </div>
  )
}

export default App
