import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import LoginScreen from "./login.js";
import SendScreen from "./send.js";
import HistoryScreen from "./history.js";
import CheckTokenScreen from "./checktoken.js";
import AboutScreen from "./about.js";
//import CharityScreen from './charity.js';
import VoteScreen from "./vote.js";
import ProfileScreen from "./profile.js";

const AppDrawer = createDrawerNavigator(
  {
    Profile: ProfileScreen,
    Send: SendScreen,
    History: HistoryScreen,
    "About MITCoin": AboutScreen,
    //Charity: CharityScreen,
    // Vote: VoteScreen,
  },
  { drawerStyle: { width: "100%" } }
);

const navigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    CheckToken: CheckTokenScreen,
    Drawer: AppDrawer,
  },
  {
    initialRouteName: "Drawer",
  }
);

const AppContainer = createAppContainer(navigator);
export default AppContainer;
