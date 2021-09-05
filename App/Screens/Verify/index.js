/* eslint-disable react-native/no-inline-styles */
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
import Header from '../../Components/Header';

import {APP, BLACK, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import * as userActions from '../../redux/actions/user';

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      loading: false,
      agree: false,
    };
  }

  render() {
    return (
      <View style={styles.wrapperView}>
        <Header
          backColor={APP.light}
          headerText={'Verification'}
          headerTextColor={WHITE.btntxtColor}
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.pop()}
        />
        <SafeAreaView style={styles.wrapperView}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.popin21Bold}>OTP Numberz</Text>
          <View style={styles.textInputWrapper}>
            <TextInput style={[styles.textInputInner]} />
            <TextInput style={[styles.textInputInner, {marginLeft: 20}]} />
            <TextInput style={[styles.textInputInner, {marginLeft: 20}]} />
            <TextInput style={[styles.textInputInner, {marginLeft: 20}]} />
          </View>
          <TouchableOpacity
            style={styles.agrementWrapper}
            activeOpacity={0.8}
            onPress={() => this.setState({agree: !this.state.agree})}>
            <Text style={styles.popin12Regular}>Resend the OTP code again</Text>
          </TouchableOpacity>
          <Text style={styles.popin12RegularBlack}>
            We have sent you an OTP on your mobile number, please enter to
            verify
          </Text>
          <TouchableOpacity
            style={styles.signInBtn}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate('HomeTabs')}>
            <Text style={styles.popin14SemiBold}>Verify</Text>
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
  agrementWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  popin12Regular: {
    fontSize: 12,
    fontFamily: FONT.Popins.regular,
    color: APP.light,
    marginLeft: 8,
  },
  popin12RegularBlack: {
    fontSize: 12,
    fontFamily: FONT.Popins.regular,
    color: BLACK.dark,
    width: SCREEN.width - 134,
    alignSelf: 'center',
    marginTop: 25,
    textAlign: 'center',
  },
  signInBtn: {
    height: 42,
    width: SCREEN.width - 110,
    backgroundColor: APP.light,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 83,
    borderRadius: 10,
  },
  popin14SemiBold: {
    fontSize: 14,
    fontFamily: FONT.Popins.semi_bold,
    color: WHITE.btntxtColor,
    alignSelf: 'center',
  },
  textInputWrapper: {
    height: 74,
    width: SCREEN.width - 48,
    borderRadius: 7,
    marginTop: 35,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
  textInputInner: {
    height: 25,
    width: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
