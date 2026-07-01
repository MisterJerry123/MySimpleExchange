import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.headerCard}>
        <Image
          source={require('./assets/headerIcon.png')} // 이미지 파일 경로 (본인 경로에 맞게 수정)
          style={styles.headerIcon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>간단한 환율 조회</Text>
          <Text style={styles.headerSubTitle}>실시간 기준 환율을 확인하세요</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerCard: {
    backgroundColor: '#155DFC',
    borderRadius: 32,
    alignSelf: 'stretch',
    marginHorizontal: 15.92,
    flexDirection: 'row',
    alignItems:`center`
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
    position:'absolute'
  },
  textContainer:{
    flex:1
  }



});
