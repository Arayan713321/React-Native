import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Theories</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headertext}>
                        What do we have here ?????
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/456473.jpg',
                    }}
                    style={styles.cardimage}
                />
                <View style={styles.bodycontainer}>
                    <Text numberOfLines={2}>
                        Hence Voldemort comes from the direct line of the oldest brother Antioch Peverell and Harry is undoubtedly the descendant of Ignotus Peverell. 
                        So ultimately Voldemort and Harry are cousins.
                    </Text>
                </View>
                <View style={styles.cardfooter}>
                    <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Harry_Potter_(film_series)')}>
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/ix_my_fumes?igsh=MWRwdnJ5bDJ6Nm00MA==')}>
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#000000',
        paddingHorizontal: 8,
        textDecorationLine:'underline'
    },
    card: {
        width:350,
        height:400,
        borderRadius:5,
        marginHorizontal:30,
        marginVertical:12
        
    },
    elevatedCard: {
        backgroundColor:'#D0A4E5',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4

    },
    headingcontainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000'
    },
    cardimage: {
        height: 200,
        marginTop: 10,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bodycontainer: {
        padding: 10,
        marginTop: 10,
    },
    cardfooter: {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:15,
        color:'#000000',
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:4
    }
})
