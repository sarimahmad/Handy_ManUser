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

class More extends Component {
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
          headerText={'Login'}
          headerTextColor={WHITE.btntxtColor}
          leftIcon={require('../../assets/back_white.png')}
          leftPress={() => this.props.navigation.pop()}
        />
        <SafeAreaView style={styles.wrapperView}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.popin21Bold}>Welcome Back</Text>
          <View style={styles.textInputWrapper}>
            <Text style={styles.title}>Enter your mobile number</Text>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder={'+923124808897'}
              value={this.state.phone}
              onChangeText={phone => this.setState({phone})}
            />
          </View>
          <TouchableOpacity
            style={styles.agrementWrapper}
            activeOpacity={0.8}
            onPress={() => this.setState({agree: !this.state.agree})}>
            <View
              style={
                this.state.agree ? styles.selectedView : styles.unSelectedView
              }
            />
            <Text style={styles.popin10Regular}>
              I have read and I agree to the handyman agreement
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInBtn} activeOpacity={0.8}>
            <Text style={styles.popin14SemiBold}>Sign In</Text>
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
    width: SCREEN.width - 80,
    marginTop: 32,
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
  popin10Regular: {
    fontSize: 10,
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
    height: 91,
    width: SCREEN.width - 48,
    borderRadius: 7,
    marginTop: 70,
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

export default connect(mapStateToProps, mapDispatchToProps)(More);
