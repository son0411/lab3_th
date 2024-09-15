import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ContactThumbnail = ({
    name = '',
    phone = '',
    avatar = '',
    textColor = 'white',
    onPress = null,
}) => {
    const colorStyle = {
        color: textColor,
    };

    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image
                    source={{
                        uri: avatar,
                    }}
                    style={styles.avatar}
                />
            </ImageComponent>
            {name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>}
            {phone !== '' && (
                <View style={styles.phoneSection}>
                    <Icon name="phone" size={16} style={{ color: textColor }} />
                    <Text style={[styles.phone, colorStyle]}>{phone}</Text>
                </View>
            )}
        </View>
    );
};

ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
    },
});

export default ContactThumbnail;
