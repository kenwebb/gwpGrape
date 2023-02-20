import React from 'react'; // x , { Component }
import { StyleSheet, View, Image  } from 'react-native'; // x Text, FlatList, ScrollView

const PhotoZoomPan = (props) => {
  const item = props.route.params.photo;
  console.log("PhotoZoomPanComponent.web\n");
  //console.log(item);
  //console.log(item.imageLinkP);
  //console.log(item.imageLink);

  return (
    <View style={styles.container}>
      <View style={styles.plantimageZoom}>
          <Image
            source={
              item.imageLinkP || item.imageLink
            }
            style={styles.plantimage}
            resizeMode= 'contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
          />
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
  plantimage: {
    flex: 1,
    width: null,
    height: '100%'
  },
  plantimageZoom: {
    flex: 1
  },
});

export default PhotoZoomPan;
