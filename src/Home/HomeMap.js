import React, { Component, useMemo } from 'react'
import { Key } from './mapkey' // 引入 API key
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import '../../src/styles/Home.css'

//
const containerStyle = {
  width: '100%',
  height: '600px',
}
export default function HomeMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: Key,
  })

  if (!isLoaded) return <div>.</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 25.0337058, lng: 121.5411098 }), [])

  return (
    // Important! Always set the container height explicitly
    <div className="home_map">
      <div className="home_map_issue">BEEbeE在哪裡，絕對難不倒你</div>
      <div className="home_map_google">
        <GoogleMap
          zoom={17}
          center={center}
          mapContainerClassName="map-container"
          mapContainerStyle={containerStyle}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  )
}
