import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

import Header from '../../Components/Header';

import {APP, BLACK, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import * as userActions from '../../redux/actions/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      loading: false,
      agree: false,
      imageUri: '',
    };
  }
  openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({imageUri: image.path});
    });
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          backColor={APP.light}
          headerText={'Registration'}
          headerTextColor={WHITE.btntxtColor}
        />
        <SafeAreaView style={styles.wrapperView}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.popin21Bold}>Sign Up Account</Text>
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={() => this.openPicker()}>
            <Image
              style={styles.ImagePickerInnerImg}
              source={
                this.state.imageUri !== ''
                  ? {uri: this.state.imageUri}
                  : require('../../assets/logo.png')
              }
            />
            {this.state.imageUri === '' && (
              <Image
                style={styles.addBtn}
                source={require('../../assets/add_btn.png')}
              />
            )}
          </TouchableOpacity>
          <View style={styles.textInputWrapper}>
            <Text style={styles.title}>Name</Text>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder={'Awais Ah'}
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <Text style={[styles.title]}>Email Address</Text>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder={'ash@gmail.com'}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </View>
          <TouchableOpacity
            style={styles.signInBtn}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Verify')}>
            <Text style={styles.popin14SemiBold}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.agrementWrapper}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.popin12Regular}>
              You already have an account?
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
    role: state.user.role,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token) =>
      dispatch(userActions.setUser({user, access_token})),
  };
};
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
  },
  logo: {
    height: 99,
    width: 94,
    resizeMode: 'contain',
    marginTop: 36,
    alignSelf: 'center',
  },
  popin21Bold: {
    fontSize: 21,
    fontFamily: FONT.Popins.bold,
    marginTop: 19,
    color: BLACK.dark,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: FONT.Popins.medium,
    color: BLACK.dark,
    marginLeft: 20,
  },
  phoneNumberInput: {
    height: 40,
    width: SCREEN.width - 80,
    alignSelf: 'center',
    marginTop: 15,
  },
  agrementWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 35,
  },
  selectedView: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: APP.light,
  },
  unSelectedView: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: APP.light,
  },
  popin12Regular: {
    fontSize: 12,
    fontFamily: FONT.Popins.regular,
    color: APP.light,
    marginLeft: 8,
  },
  signInBtn: {
    height: 42,
    width: SCREEN.width - 110,
    backgroundColor: APP.light,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 53,
    borderRadius: 10,
  },
  popin14SemiBold: {
    fontSize: 14,
    fontFamily: FONT.Popins.semi_bold,
    color: WHITE.btntxtColor,
    alignSelf: 'center',
  },
  imagePicker: {
    height: 110,
    width: 110,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  ImagePickerInnerImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  addBtn: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 10,
    bottom: 0,
    resizeMode: 'stretch',
  },
  textInputWrapper: {
    height: 91,
    width: SCREEN.width - 48,
    borderRadius: 7,
    marginTop: 35,
    alignSelf: 'center',
    backgroundColor: WHITE.btntxtColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
