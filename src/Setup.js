import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchData, hitungPenjumlahan, getDataStarWars } from "./actions/index";

class Setup extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData());
    this.props.dispatch(hitungPenjumlahan(4, 15));
    this.props.dispatch(getDataStarWars());
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* {this.props.status ? (
          <View>
            <Text>{this.props.data}</Text>
            <Text>{this.props.hasilPenjumlahan}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" />
        )} */}

        {!this.props.isFetchingStarWars &&
          this.props.messageStarWars === "Success" && (
            <Text>{this.props.dataStarWars.name}</Text>
          )}

        {this.props.isFetchingStarWars &&
          this.props.messageStarWars === "Pending" && <ActivityIndicator />}

        {!this.props.isFetchingStarWars &&
          this.props.messageStarWars === "Error" && <Text>Error</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.items,
    status: state.data.status,
    hasilPenjumlahan: state.dataPenjumlahan.hasil,
    dataStarWars: state.dataStarWars.data,
    isFetchingStarWars: state.dataStarWars.isFetching,
    messageStarWars: state.dataStarWars.message
  };
};

export default connect(mapStateToProps)(Setup);
