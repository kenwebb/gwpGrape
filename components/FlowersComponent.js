import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'; // x ScrollView
import { getPlants } from '../db/gwp/plants';
//import FlowerDetails from './FlowerDetailsComponent';

export default class Flowers extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    console.log("FlowersComponent\n");
  }

  plants = getPlants(this.props.route.params.filters);

  handlePlantPress = (item) => {
    //console.log(item);
    this.props.navigation.navigate('FlowerDetails', {
      plant: item
    });
  };

  renderPlant = ({ item, index }) => {
    //console.log(item, index);
    return (
      <View style={styles.viewplant}>
        <TouchableOpacity
        onPress={() => this.handlePlantPress(item)}
        >
          <Image
            source={
              item.photos[0].imageLinkLR || item.photos[0].imageLink
            }
            style={styles.plantimage}
            resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
          />
          <Text style={styles.imagetext}>{item.species}</Text>
        </TouchableOpacity>
      </View>
    )
  };

  renderFilter = ({ item }) => {
    return (
      <Text style={styles.searchcriteria}>{item[Object.getOwnPropertyNames(item)[0]].split(",")[1]}</Text>
    )
  }

  render() { // KSW 8 Feb 2023
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            style={styles.flatlistfltr}
            data={this.props.route.params.filters}
            renderItem={this.renderFilter}
            keyExtractor={(item, index) => Number(index).toString()}
            horizontal={true}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={this.plants}
            renderItem={this.renderPlant}
            keyExtractor={item => item.species}
            numColumns={1}
            contentContainerStyle={{ paddingBottom: 0 }}
          />

        </View>
        <View style={styles.viewfinal}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: '#fff',
  },
  plantimage: {
    width: '100%',
    height: 275,
  },
  searchcriteria: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    fontWeight: 'normal',
    fontSize: 18,
    backgroundColor: '#d1f4a4',
  },
  viewplant: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderColor: '#d1f4a4',
  },
  imagetext: {
    marginTop: 5,
    color: '#3A5F0B',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 24
  },
  flatlistfltr: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     overflow: 'scroll'
  },
  viewfinal: {
     height: 10,
     width: '100%',
     backgroundColor: '#d1f4a4'
  }
});
