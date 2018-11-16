import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  List, 
  ListItem,
  Content,
  Text,
  Separator,
  Tab,
  // Icon,
  Tabs,
  TabHeading,
  Footer, FooterTab, Button, Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AppHeader from '../Components/AppHeader';
import { USER_PROFILE_SCREEN } from '../Navigation/ScreenNames';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {

  constructor(props, context) {
    super(props, context);
    this.goToProfileScreen = this.goToProfileScreen.bind(this);
  }


  goToProfileScreen() {
    this.props.navigation.navigate(USER_PROFILE_SCREEN);
  }

  render() {
    return (
      <Container>
        <AppHeader goToProfileScreen={this.goToProfileScreen}/>
        <Content>
          <Tabs locked>
            <Tab heading={<TabHeading><Icon name="heart" size={30} color="white"/><Text>Tổng quan</Text></TabHeading>}>
              <Content>
                <Separator bordered style={styles.listItemSeparator}>
                  <Text style={styles.listItemSeparatorText}>12/03/2018</Text>
                  <Text style={{marginRight: 5}}>Chi tiết</Text>
                </Separator>
                <ListItem>
                  <Text>Ghi chú 12/03/2018</Text>
                </ListItem>
                <ScrollView horizontal>
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                </ScrollView>
                <Separator bordered style={styles.listItemSeparator}>
                  <Text style={styles.listItemSeparatorText}>11/03/2018</Text>
                  <Text style={{marginRight: 5}}>Chi tiết</Text>
                </Separator>
                <ListItem>
                  <Text>Ghi chú 11/03/2018</Text>
                </ListItem>
                <ScrollView horizontal>
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                </ScrollView>
                <Separator bordered style={styles.listItemSeparator}>
                  <Text style={styles.listItemSeparatorText}>10/03/2018</Text>
                  <Text style={{marginRight: 5}}>Chi tiết</Text>
                </Separator>
                <ListItem>
                  <Text>Ghi chú 10/03/2018</Text>
                </ListItem>
                <ScrollView horizontal>
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                </ScrollView>
                <Separator bordered style={styles.listItemSeparator}>
                  <Text style={styles.listItemSeparatorText}>09/03/2018</Text>
                  <Text style={{marginRight: 5}}>Chi tiết</Text>
                </Separator>
                <ListItem>
                  <Text>Ghi chú 09/03/2018</Text>
                </ListItem>
                <ScrollView horizontal>
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                  <Thumbnail style={styles.thumbnail} square large source={{uri: 'https://image.freepik.com/free-icon/picture-frame-with-mountain-image_318-40293.jpg'}} />
                </ScrollView>
              </Content>
            </Tab>
            <Tab heading={<TabHeading><Icon name="chart" size={30} color="white"/><Text>Biểu đồ</Text></TabHeading>}>
              <Text>Apps</Text>
            </Tab>
          </Tabs>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button active>
              <Icon name="home" size={30} color="white"/>
            </Button>
            <Button>
              <Icon name="calendar" size={30} color="white"/>
            </Button>
            <Button>
              <Icon name="user" size={30} color="white"/>
            </Button>
            <Button>
              <Icon name="settings" size={30} color="white"/>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
