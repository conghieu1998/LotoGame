import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';
import Modal from 'react-native-modal';
import { actuatedNormalize } from '../helper';

const ListSo = ({ modalVisible, closeModal, list }) => {
    return (
        <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={1}
            animationOutTiming={1}
            transparent={true}
            isVisible={modalVisible}
            onBackdropPress={closeModal}
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        // useNativeDriver={true}
        >
            <View style={styles.modal}>
                <Text style={{ fontSize: actuatedNormalize(18), fontWeight: 'bold', color: '#FF6633', textAlign: 'center' }}>Số đã quay</Text>
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
        height: Dimensions.get('window').height / 2.1,
        width: Dimensions.get('window').width / 1.6,
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    txtList: {
        marginRight: 20,
        fontSize: 20
    }
})

export default ListSo;