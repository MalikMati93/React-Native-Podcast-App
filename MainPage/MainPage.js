import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MainPageNavBar from './Components/MainPageNavBar'
import PodcastsSection from './Components/PodcastsSection'
import { responsiveWidth } from 'react-native-responsive-dimensions';


export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.goToPodcastDescription = this.goToPodcastDescription.bind(this)
        this.goToPodcastBrowser = this.goToPodcastBrowser.bind(this)
    }
    goToPodcastDescription(podcastInfo) {
        this.props.selectPodcast(podcastInfo['rssLink'],() => {
            this.props.navigation.navigate("PodcastDescriptionView")
        })
    }
    goToPodcastBrowser() {
        this.props.navigation.navigate("PodcastBrowserView")
    }
    componentDidMount() {
        this.props.cleanUpDatabase()
        // var pods = [
        //     'http://rss.art19.com/the-daily',
        //     'http://rss.earwolf.com/comedy-bang-bang',
        //     'http://comedybutton.libsyn.com/rss',
        //     'https://www.npr.org/rss/podcast.php?id=510289',
        // ]
        // for (i=0;i<pods.length;i++){
        //     this.props.getPodcastData(pods[i])
        // }
    }
    render() {
        const navigator = this.props.navigation
        return(
            <Grid style = {styles.container}>
                <Row style={styles.navBar}>
                    <MainPageNavBar addPodcastPressed={()=>this.goToPodcastBrowser()}/>
                </Row>
                <Row style={styles.podcasts}>
                    <PodcastsSection podcasts = {this.props.subscribedPodcasts} style={styles.podcastsSection} title="New Episodes" onPodcastPress = {()=>console.log("Pressed")} onTitlePress = {()=>console.log("tapped")}/>
                    <PodcastsSection podcasts = {this.props.subscribedPodcasts} style={styles.podcastsSection} title="Your Podcasts" onPodcastPress={(podcastInfo) => {this.goToPodcastDescription(podcastInfo)}} onTitlePress={()=>navigator.navigate('YourPodcastsView')}/>
                    {/* <PodcastsSection pods = {this.props.subbedPods} style={styles.podcastsSection} title="Your Playlists" onPodcastPress = {()=>console.log("Pressed")} onTitlePress = {()=>console.log("tapped")}/> */}
                </Row>
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
    },
    podcastsSection: {
        flex:1,
    },
  });
  