import { View, Text, StyleSheet,RefreshControl, } from 'react-native'
import React from 'react'

export default function CityDetail(CityDetail) {
    console.log("CityDetail", CityDetail)
    return (
        
        <View style={styles.container} >
            {
                CityDetail && <>
                <View style={{ flexDirection: "row" }}>
                <Text style={styles.quesText}>City Name   : </Text>
                <Text style={styles.answerText}>{CityDetail?.CityDetail?.name}</Text>
            </View>
            <View style={{ height: 2, backgroundColor: "grey" }}></View>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.quesText}>Temperature    : </Text>
                <Text style={styles.answerText}>{CityDetail?.CityDetail?.main?.temp}</Text>
            </View>
            <View style={{ height: 2, backgroundColor: "grey" }}></View><View style={{ flexDirection: "row" }}>
                <Text style={styles.quesText}>Humidity     : </Text>
                <Text style={styles.answerText}>{CityDetail?.CityDetail?.main?.humidity}</Text>
            </View>
           
            <View style={{ height: 2, backgroundColor: "grey" }}></View>
            
                </>
            }
         
            
        </View>
    
    )
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        // borderTopEndRadius:200,
        // borderTopLeftRadius:100,
        // borderBottomLeftRadius:200,
        // borderBottomRightRadius:100,
        padding: 16,
        marginHorizontal: 16,
        backgroundColor: "white",
        marginTop: 20,
        marginBottom:20,
        // height: 500,
        elevation: 7,
    },
    quesText: {
        fontSize: 20,
        padding: 8,
        fontWeight: "bold"

    },
    answerText: {
        fontSize: 20,
        padding: 8,
        fontWeight: "500",
        color: "#90ee90"
    }
})