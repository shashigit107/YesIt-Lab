import { View, Text, SafeAreaView,ScrollView, RefreshControl,StyleSheet, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import AlertMessage from '../component/AlertMessage'
import CityDetail from '../component/CityDetail'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {
    const [place, setPlace] = useState("")
    const [selectPlace, setSelectPlace] = useState("")
    const [editCheck, setEditableCheck] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [cityData, setCityData] = useState(null)
    useEffect(async() => {
        try {
          const city=  await AsyncStorage.getItem('city');
          if(city){
            getApiCallRequest(city)
            setSelectPlace(city)
            setEditableCheck(true)
          }
          
         } catch (error) {
           // Error retrieving data
           console.log(error)
         }
    }, [])
  console.log("cityData",cityData)
    const getApiCallRequest = async (cityName) => {
        const APIKEY = '5d3e1ba6775c5a97031d5f4705beeaad';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&APPID=' + APIKEY + '';
        try {
            const response = await fetch(url,{
                method: 'POST'});
            console.log("response",response.status)
            if(response.status){
                const data = await response.json();
                console.log("data",data)
                setCityData(data)
                setRefreshing(false);
            }else{
                AlertMessage("city name wrong")
            }
      
        } catch (error) {
            AlertMessage(error)
        }
        
        
    }


    const inputHandler = (text) => {
        console.log("hey.....", text)
        setPlace(text.replace(/^\s+|\s+$/gm, ''))
    }

    const validationHandler = async() => {
        console.log("ssss")
        if (place == "" || place.length <= 2) {
            console.log("alart")
            AlertMessage("Please Enter City")
            return
        } else {
            getApiCallRequest(place)
            try {
                 await AsyncStorage.setItem('city',place);
               
              } catch (error) {
                // Error retrieving data
                console.log(error)
              }
            setEditableCheck(true)
            setSelectPlace(place)
        }
    }
    const editCity = () => {
        setEditableCheck(false)
        setSelectPlace('')
        setPlace("")
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
             AsyncStorage.getItem("city").then((val)=>{
                console.log("val",val)
                getApiCallRequest(val)
             }).catch((err)=>{
                console.log(er)
             })
            
         
        
      }, []);

    return (
<ScrollView
        // contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
            
            <View style={{
                flexDirection: "row", elevation: 7, backgroundColor: "#fffff0",
                height: 60,
            }}>


                <TextInput
                    placeholder='Enter City'
                    value={selectPlace == "" ? place : selectPlace}
                    style={[styles.inputBoxContainer, { color: selectPlace == "" ? "black" : "#90ee90" }]}
                    onChangeText={inputHandler}
                    placeholderTextColor="black"
                    editable={!editCheck}


                />
                {
                    editCheck ? <TouchableOpacity onPress={editCity} style={{ flex: .2, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
                        <Text style={styles.text}>Change</Text>
                        <Text style={styles.text}> City</Text>

                    </TouchableOpacity> : <TouchableOpacity onPress={validationHandler} style={{ flex: .2, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
                        <Text style={styles.text}>Submit</Text>

                    </TouchableOpacity>
                }

            </View>
            <View>
                <CityDetail CityDetail={cityData} />
            </View>

        </View> 
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal:16
    },
    text: {
        color: "#90ee90",
        fontWeight: "bold",
        fontSize: 16
    },
    inputBoxContainer: {
        flex: .8,


        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        //  borderRadius:15,
        padding: 10,


    }
})