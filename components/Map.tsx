import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
import { useLocationStore } from '@/store'

const Map = () => {

    const {userLongitude, userLatitude, destinationLatitude, destinationLongitude} = useLocationStore()

    const region
  return (
    <MapView provider={PROVIDER_DEFAULT} className='w-full h-full rounded-2xl'
    tintColor='black'
    mapType='mutedStandard'
    showsPointsOfInterest={false}
    //initialRegion={region}
    showsUserLocation={true}
    userInterfaceStyle='light'
    >
        <Text>Map</Text>
    </MapView>
  )
}

export default Map