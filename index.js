/** @format */

import { AppRegistry } from "react-native";
//import App from "./App";
import { name as appName } from "./app.json";

//import Splashscreen from "./app/components/Splahscreen/Splashscreen";
import log from "./app/components/log";

AppRegistry.registerComponent(appName, () => log);
