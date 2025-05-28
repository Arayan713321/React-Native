import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Arayan Kumar Shaw',
            status: 'JAVA || REACT-NATIVE',
            imageurl: 'https://raw.githubusercontent.com/Arayan713321/React-native/main/IMG_20240324_205342.jpg',
            linkedin: 'https://www.linkedin.com/in/arayan-kumar-shaw-4619551a0/'
        }
    ];

    const handlePress = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container}>
                {contacts.map(({ uid, name, status, imageurl, linkedin }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageurl }}
                            style={styles.userImage}
                        />
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => handlePress(linkedin)}>
                                <Text style={styles.userName}>{name}</Text>
                            </TouchableOpacity>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    container: {
        borderRadius: 10,
        padding: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FBAE7B',
    },
    userStatus: {
        fontSize: 14,
        color: '#666',
    },
});
