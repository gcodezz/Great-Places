import React from 'react'
import { Image, StyleSheet } from 'react-native'

import ENV from '../env'
import Colors from '../constants/Colors'

const MapPreview = props => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
        props.location.lat
    },${
        props.location.lng
    }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
        props.location.lat
    },${props.location.lng}&key=${ENV.googleApiKey}`

    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MapPreview