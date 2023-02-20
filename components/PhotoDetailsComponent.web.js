import React from 'react'; // x , { Component }
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'; // x Text FlatList
//import {cstyles} from '../styles/styles';
//import PhotoZoomPan from './PhotoZoomPanComponent';

const PhotoDetails = (props) => {

  const handlePhotoPress = (item) => {
    props.navigation.navigate('PhotoZoomPan', {
      photo: item
    });
  };
  console.log("PhotoDetailsComponent.web\n");
  //console.log(props.photos);

  return (
    <View style={styles.container}>
      <View style={styles.containerphotos}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.flatlistfltr}>
          {
            props.photos.filter(item => item.photo_id).map(
              item => (
                <View key={item.photo_id}>
                  <TouchableOpacity
                    onPress={() => handlePhotoPress(item)}
                  >
                    <Image
                      source={
                        item.imageLinkLR || item.imageLink
                      }
                      style={styles.plantimage}
                      resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
                    />
                  </TouchableOpacity>
                </View>
              )
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
  },
  containerphotos: {
    flexDirection: "row",
    justifyContent: 'center'
  },
  flatlistfltr: {
    flex: 1,
    flexDirection: 'row'
  },
  plantimage: {
    width: 350, //400, //500, //'100%',
    height: 275,
    marginHorizontal: 6,
    padding: 5
  },
});

export default PhotoDetails;
