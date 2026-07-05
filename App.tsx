import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useCurrencyViewModel } from './presentation/hooks/useCurrencyViewModel';

export default function App() {

  //viewmodel
  const { fromCurrency, toCurrency, selectFromCurrency, swapCurrencies } = useCurrencyViewModel();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.contensContainer}>


        <View style={styles.headerCard}>
          <Image
            source={require('./assets/headerIcon.png')}
            style={styles.headerIcon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>간단한 환율 조회</Text>
            <Text style={styles.headerSubTitle}>실시간 기준 환율을 확인하세요</Text>
          </View>
        </View>

        <View style={styles.startPart}>
          <Text style={styles.priceSelect}>보내는 금액</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{fromCurrency.rate}</Text>
            <TouchableOpacity style={styles.currencySelect}>
              <Text>{fromCurrency.code}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.touchButton} onPress={swapCurrencies}>
            <Image
              source={require('./assets/changeIcon.png')}
              style={styles.changeIcon}
            />
            
          </TouchableOpacity>
        </View>
        <View style={styles.endPart}>
          <Text style={styles.priceSelect}> 받는 금액</Text>
          <View style={styles.inputContainer2}>
            <Text style={styles.inputText2}>{toCurrency.rate}</Text>
            <TouchableOpacity style={styles.currencySelect}>
              <Text>{toCurrency.code}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
  },
  contensContainer: {

    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 15.92,
    borderRadius: 24,

  },

  headerCard: {
    backgroundColor: '#155DFC',
    borderRadius: 32,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: `center`
  },
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    marginTop: 23.99
  },
  headerSubTitle: {
    fontSize: 14,
    textAlign: `center`,
    color: '#DBEAFE',
    marginBottom: 23.99
  },
  headerIcon: {
    width: 48,
    height: 48,
    marginStart: 23.99,
    position: 'absolute'
  },
  changeIcon: {
    width: 20,
    height: 20,


  },
  textContainer: {
    flex: 1
  },
  startPart: {
    marginTop: 31.99,
    marginHorizontal: 31.99,
  },
  priceSelect: {
    color: '#737373',
    textAlign: 'left',
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    marginTop: 8.99,
    flexDirection: 'row',
    borderWidth: 0.77,
    borderColor: '#E5E5E5',
  },
  inputText: {
    color: '#000',
    fontSize: 30,
    marginVertical: 8.76,
    marginStart: 19.99
  },
  inputText2: {
    color: '#155DFC',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8.76,
    marginStart: 19.99,
    alignSelf: `stretch`
  },
  touchButton: {
    backgroundColor: '#155DFC',
    width: 43.99,
    height: 43.99,
    borderRadius: 21.99,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27.99
  },
  endPart: {
    marginHorizontal: 31.99,
    marginBottom: 31.99
  },
  inputContainer2: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    marginTop: 8.99,
    borderWidth: 0.77,
    borderColor: '#DBEAFE',
    flexDirection: 'row',
  },
  currencySelect: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginEnd: 7.99,
    width: 82.07,
    height: 37.53,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginStart: `auto`,
    borderWidth: 0.77,
    borderColor: '#E5E5E5',
  }




});
