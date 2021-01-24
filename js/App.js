import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.sectionTitle, {textAlign: 'center'}]}>
              Bienvenue dans le projet d'apprentissage de Redux avec
              React-Native
            </Text>
            <Image
              source={require('./img/redux.png')}
              style={{width: 100, height: 55}}
              resizeMode="cover"
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Etape 1</Text>
                <Text style={styles.sectionDescription}>
                  Regardez comment est implémenté{' '}
                  <Text style={styles.highlight}>Redux</Text> dans les
                  différents fichiers{' '}
                  <Text style={styles.highlight}>setup.js</Text>,
                  <Text style={styles.highlight}>store/configureStore.js</Text>
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Etape 2</Text>
                <Text style={styles.sectionDescription}>
                  Regardez comment la structure des reducers dans
                  <Text style={styles.highlight}> reducers</Text> puis créer un
                  autre reducer de votre choix.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Etape 3</Text>
                <Text style={styles.sectionDescription}>
                  Consulter le journal des évènements redux via le debug
                </Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>En savoir plus</Text>
                <Text style={styles.sectionDescription}>
                  Ce projet sera mit a jour en fonction des avancés des
                  apprenants
                </Text>
              </View>
              <View style={{height: 200}}></View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
