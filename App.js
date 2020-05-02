import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";

export default class App extends React.Component {
  state = {
    loadedToDos: false,
  };

  componentDidMount = () => {
    this._loadToDos();
  };

  render() {
    const { loadedToDos } = this.state;
    if (!loadedToDos) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HiHi</Text>
      </View>
    );
  }
  _loadToDos = () => {
    this.setState({
      loadedToDos: true,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 50,
    marginTop: 70,
    fontWeight: "200",
  },
});
