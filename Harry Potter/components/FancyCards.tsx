import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Dream Place</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri:'https://as2.ftcdn.net/v2/jpg/05/71/63/83/1000_F_571638378_h2L5AJMe2rinQSCOiUXPC6ZxL9CXKxrr.jpg'
        }} 
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>

        <Text style={styles.cardTitle}>Hogwarts</Text>
        <Text style={styles.cardLabel}>Alnwick Castle</Text>
        <Text style={styles.cardDescription}>Hogwarts School of Witchcraft and Wizardry (Hogwarts for short) is a magical school from the Harry Potter book series.
         It's nestled in Scottish highlands, hidden from muggles, where wizards and witches learn to use their magic.
         </Text>
         <Text  style={styles.cardFooter}>Catch hogwarts express.</Text>



        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000000',
        paddingHorizontal:8,
        textDecorationLine:'underline'
    },
    card:{
        width:350,
        height:400,
        borderRadius:5,
        marginVertical:12,
        marginHorizontal:30
    },
    cardElevated:{
        backgroundColor:"#AA9C9C",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        padding:8
    },
    cardTitle:{
        color:"#000000",
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:4
        
    },
    cardLabel:{
        color:"#000000",
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:4

    },
    cardDescription:{
        color:"#000000",
        marginBottom:12

    },
    cardFooter:{
        color:"#000000",
        fontWeight:'bold',
        marginTop:4
    }
})