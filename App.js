import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./src/store/reducers/products";
import ShopNavigator from "./src/navigation/shopNavigator";
import { appLoading, AppLoading } from "expo";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

console.disableYellowBox = true;
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
