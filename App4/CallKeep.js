import React, { Component } from 'react';
import { Button, PermissionsAndroid, Text, View } from 'react-native';
import RNCallKeep from 'react-native-callkeep';

class CallKeepComponent extends Component {
  state = {}

  componentDidMount() {
    this.setUpCallKeep()
  }

  async setUpCallKeep() {
    const options = {
      ios: {
        appName: 'My app name',
      },
      android: {
        alertTitle: 'Permissions required',
        alertDescription: 'This application needs to access your phone accounts',
        cancelButton: 'Cancel',
        okButton: 'ok',
        imageName: 'phone_account_icon',
        foregroundService: {
          channelId: 'com.company.my',
          channelName: 'Foreground service for my app',
          notificationTitle: 'My app is running on background',
          notificationIcon: 'Path to the resource icon of the notification',
        },
      }
    };
    console.log('zzzz setup init')
    RNCallKeep.setup(options).then(() => {
      console.log('zzzz setup done')

      let uuid = 'ea38e872-0857-4fe2-9881-22c8cf293906'
      let callerId = '123456789'
      let handle = 'generic'
      let hasVideo = false;

      let localizedCallerName = 'Test Incoming Call'
      let contactIdentifier = 'Test Outgoing Call'
      RNCallKeep.hasPhoneAccount().then(p => {
        console.log('zz has Phone Account', p)
        if (p) {
          console.log('displaying incoming call')
          RNCallKeep.displayIncomingCall(uuid, callerId, localizedCallerName, handle, hasVideo);
          console.log('displaying incoming call finish')

          console.log('starting outgoing call')
          RNCallKeep.startCall(uuid, handle, contactIdentifier, handle, hasVideo);
          console.log('starting outgoing call finish')
        }
      })
    });



  }

  render() {
    return (
      <View>
        {/* <Button
          title="request permissions"
          onPress={this.requestCameraPermission}
        /> */}
        <Text>
          Hey!!!!!
      </Text>
      </View>

    );
  }
}

export default CallKeepComponent;