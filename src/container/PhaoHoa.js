import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import Modal from 'react-native-modal';


const PhaoHoa = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={1}
      animationOutTiming={1}
      transparent={true}
      isVisible={modalVisible}
      onBackdropPress={closeModal}
      useNativeDriver={true}>
      <View>
        <Image
          source={require('../images/source.gif')}
          style={styles.img}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 320,
    height: 270,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
})

export default PhaoHoa;
