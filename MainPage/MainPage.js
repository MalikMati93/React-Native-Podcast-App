import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MainPageNavBar from './Components/MainPageNavBar'
import PodcastsSection from './Components/PodcastsSection'
import { responsiveWidth } from 'react-native-responsive-dimensions';


export default class MainPage extends React.Component {
    render() {
        const navigator = this.props.navigator
        return(
            <Grid style = {styles.container}>
                <Row style={styles.navBar}>
                    <MainPageNavBar/>
                </Row>
                <Row style={styles.podcasts}>
                    <PodcastsSection style={styles.podcastsSection} title="New Episodes" onTitlePress = {()=>console.log("tapped")}/>
                    <PodcastsSection style={styles.podcastsSection} title="Your Podcasts" onTitlePress={()=>navigator.navigate('YourPodcastsView')}/>
                    <PodcastsSection style={styles.podcastsSection} title="Your Playlists" onTitlePress = {()=>console.log("tapped")}/>
                </Row>
                <Row style={styles.currentlyPlayingArea}/>
            </Grid>
        );    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navBar: {
        flex:1,
        paddingLeft:responsiveWidth(4.4875),
        paddingRight:responsiveWidth(4.4875),
    },
    podcasts: {
        flex:8,
        flexDirection:"column",
        paddingLeft: responsiveWidth(4.6875),
        //backgroundColor:"pink",
    },
    podcastsSection: {
        flex:1,
    },

    currentlyPlayingArea: {
        flex:1,
    },
  });
  