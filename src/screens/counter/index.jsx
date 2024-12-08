import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from '../../store/slice/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#A888B5'}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 150,
              borderRadius: 200,
              backgroundColor: '#F72C5B',
            }}>
            <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
          <CustomButton
            onPress={() => dispatch(increment())}
            title="INCREMENT"
            color="#8174A0"
          />
          <CustomButton
            onPress={() => dispatch(decrement())}
            title="DECREMENT"
            color="#FF748B"
          />
          <CustomButton
            onPress={() => dispatch(reset(0))}
            title="RESET"
            color="#A7D477"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
