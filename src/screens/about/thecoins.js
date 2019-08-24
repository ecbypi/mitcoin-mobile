import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, CardItem, H2, Body, Text } from 'native-base';

export default class TheCoins extends React.Component{
    render() {
        return(
         <Content style={styles.container}>
          <Card>
            <CardItem header>
              <H2>Your Wallets</H2>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  When you make an account, you're given 1000 MITcoins. You can give these away, but you can't give away coins that you've received.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <H2>Sending Coins</H2>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  If someone does a good deed for you, like helping you with a problem set, or baking you a plate of cookies... send them a few MITcoins!
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <H2>Charity</H2>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  At the end of the semester, all of the MITcoins you've received will be converted to dollars that you donate to the charity of your choice.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        );
    }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		padding: 8,
	}
});