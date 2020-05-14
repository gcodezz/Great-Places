import React, { useState } from 'react'
import { 
    View, 
    Text,
    ScrollView,
    TextInput,
    Button,
    StyleSheet
} from 'react-native'
import { useDispatch } from 'react-redux'
//import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Colors from '../constants/Colors'
import * as placesActions from '../store/places-actions'
import ImagePicker from '../components/ImagePicker'
import LocationPicker from '../components/LocationPicker'

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('')
    const [selectedImage, setSelectedImage] = useState()

    const dispatch = useDispatch()

    const titleChangeHandler = (text) => {
        setTitleValue(text)
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedImage))
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput}
                    value={titleValue}
                    onChangeText={titleChangeHandler}
                />
                <ImagePicker onImageTaken={imageTakenHandler}/>
                <LocationPicker />
                <Button
                    title='Save Place'
                    color={Colors.primary}
                    onPress={savePlaceHandler}
                    style={{marginVertical: 10}}
                />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Add Place',
        // headerRight: () => (
        //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //         <Item 
        //             title='Add Place' 
        //             iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} 
        //             onPress={() => {
        //                 navData.navigation.navigate('NewPlace')
        //             }}
        //         />
        //     </HeaderButtons>
        // )
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,

    }
})

export default NewPlaceScreen