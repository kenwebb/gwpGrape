import React from 'react'; // x , { Component }
import { StyleSheet, View, Text, FlatList } from 'react-native';
import i18n from 'i18n-js';
import {cstyles} from '../styles/styles';
import {Colors} from '../styles';

const About = (props) => {

  const renderSection = ({item, index}) => {
    const title = item == 1 ? i18n.t('aboutprojecttitle.1')
     : item == 2 ? i18n.t('aboutdatabasetitle.1')
     : i18n.t('aboutusingtitle.1')
    const txt = item == 1 ? i18n.t('aboutprojecttext')
     : item == 2 ? i18n.t('aboutdatabasetext')
     : i18n.t('aboutusingtext');
    return (
      <View style={styles.tview}>
        <Text style={[cstyles.bodytextgreen, styles.title]}>{title}</Text>
        <Text style={cstyles.bodytext}>{txt}</Text>
      </View>
    )
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={[1,2,3]}
        renderItem={renderSection}
        keyExtractor={item => item}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Colors.backgroundColors.white, //'white',
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10
  },
  flatlist: {
    flex: 1,
  },
  tview: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default About;
