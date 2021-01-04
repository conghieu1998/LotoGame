import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

import Modal from 'react-native-modal';

const QuaySo = ({ modalVisible, closeModal, list }) => {
    if (!modalVisible) {
        return null
    }
    return (
        <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={1}
            animationOutTiming={1}
            transparent={true}
            isVisible={!!modalVisible}
            onBackdropPress={closeModal}
            // useNativeDriver={true}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={styles.modal}>
                <View style={styles.number}>
                    <Text style={styles.num}>{modalVisible}</Text>
                </View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FF6633', textAlign: 'center' }}>Số đã quay</Text>
                <View style={styles.list}>
                    {list.map(m => (
                        <View key={m}>
                            <Text style={styles.txtList}>{m}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 1.5,
        width: Dimensions.get('window').width / 1.2,
        padding: 10,
        borderRadius: 30
    },
    number: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    num: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    list: {
        height: Dimensions.get('window').height / 1.9,
        width: Dimensions.get('window').width / 1.6,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    txtList: {
        marginRight: 20,
        fontSize: 20
    }
})

export default QuaySo;