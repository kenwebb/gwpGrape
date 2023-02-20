import React from 'react'; // x , { Component }
import { StyleSheet, View, Image, Text } from 'react-native'; // x Text, FlatList, ScrollView
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

const PhotoZoomPan = (props) => {
  const item = props.route.params.photo;
  console.log("PhotoZoomPanComponent\n");
  //console.log(item);
  //console.log(item.imageLinkP);
  //console.log(item.imageLink);

  return (
    <View style={styles.container}>
      <View style={styles.plantimageZoom}>
        <ReactNativeZoomableView
         zoomEnabled={true}
         maxZoom={2.5}
         minZoom={0.5}
         zoomStep={0.5}
         initialZoom={1}
         bindToBorders={true}
         doubleTapZoomToCenter={true}
        >
          <Image
            // 12 Feb 2023 this works
            source={
              item.imageLinkP || item.imageLink
            }
            style={styles.plantimage}
            resizeMode= 'contain'
          />
        </ReactNativeZoomableView>
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
    width: '100%', // null
    height: '100%',
    //padding: 10,
    //backgroundColor: 'pink',
  },
  plantimageZoom: {
    flex: 1
  },
});

export default PhotoZoomPan;
