import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

const AlertNew = ({
    modalVisible,
    closeModal,
    accept
}) => {
    return (
        <Modal
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={300}
            animationOutTiming={300}
            transparent={true}
            isVisible={modalVisible}
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={styles.modal}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bạn có muốn bắt đầu ván mới không?</Text>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F06292',
                            padding: 10,
                            width: Dimensions.get('window').width /5,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}
                        onPress={() => closeModal()}
                    >
                        <Text style={{fontWeight: 'bold'}}>
                            Không
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#90CAF9',
                            padding: 10,
                            width: Dimensions.get('window').width /5,
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => accept()}
                    >
                        <Text style={{fontWeight: 'bold'}}>
                            Có
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 3.5,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center'
    },
    title: {
        alignItems: 'center'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50
    }
})

export default AlertNew;