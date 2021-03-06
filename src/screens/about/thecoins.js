import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import AboutCard from "./aboutCard.js";
import Background from "../imageBackground.js";

export default class TheCoins extends React.Component {
  render() {
    wallet_body = (
      <Text>
        When you make an account, you're given 1000 MITcoins. You can give these
        away, but you can't give away coins that you've received.
      </Text>
    );

    send_body = (
      <Text>
        If someone does a good deed for you, like helping you with a problem
        set, or baking you a plate of cookies... send them a few MITcoins!
      </Text>
    );
    charity_body = (
      <Text>
        At the end of the semester, all of the MITcoins you've received will be
        converted to dollars that you donate to the charity of your choice.
      </Text>
    );
    return (
      <View style={styles.container}>
        <Background />
        <AboutCard title="Your Wallet" body={wallet_body} />

        <AboutCard title="Sending Coins" body={send_body} />

        <AboutCard title={"Charity"} body={charity_body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
