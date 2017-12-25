import React from 'react';
import { Text,View,StyleSheet } from 'react-native';


export default class SearchResult extends React.Component {
    render() {
        return(
            <View>
            <View style={styles.resultBox}>
                <Text style={styles.resultText} numberOfLines={1}>{this.props.podcastTitle}</Text>
            </View>
            <View style={styles.bottomBorder}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    resultBox: {
        height:60,
        width:"90%",
        alignSelf:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        marginRight:10,
    },
    bottomBorder: {
        width:"89%",
        borderWidth:0,
        borderBottomWidth:1,
        borderColor:"rgba(20,20,20,0.2);",
        alignSelf:'center',
    },
    resultText: {
        fontSize:26,
        color:"rgba(20,20,20,0.7);",
        marginTop:7,
        marginBottom:7,
    }
})