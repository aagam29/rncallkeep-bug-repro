import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';
import CallKeepComponent from './CallKeep';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header />
        <View>
          <CallKeepComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
