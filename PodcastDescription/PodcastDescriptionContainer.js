import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import PodcastDescriptionView from './PodcastDescriptionView'
import {updatePlayingPodcast,togglePlaying, addNewPodcast,removePodcast} from '../actions'

const mapStateToProps = (state, props) => {
    return ({
        currentPodcast: state.selectedPodcast,
        currentEpisode: state.currentEpisode,
        navigator:props.navigation,
        isSubscribed:(state.selectedPodcast.key in state.subscribedPodcasts)
    })
}
const mapDispatchToProps = dispatch => 
({
    updatePlayingPodcast(currentPodcast,episodeInfo) {
        dispatch(
            updatePlayingPodcast(currentPodcast,episodeInfo)
        )
      },
    startPlaying() {
        dispatch(
            togglePlaying(false)
        )
    },
    subscribeToPodcast(podcast) {
        dispatch(
            addNewPodcast(podcast)
        )
    },
    unsubscribeToPodcast(podcast) {
        dispatch(
            removePodcast(podcast)
        )
    }
})	

const Container = connect(mapStateToProps, mapDispatchToProps)(PodcastDescriptionView)	

export default Container;