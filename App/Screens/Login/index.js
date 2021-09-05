/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/user';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Confirmation')}
            style={{width: 100, height: 20, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Press Me</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
