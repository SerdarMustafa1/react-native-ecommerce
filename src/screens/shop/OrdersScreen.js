import React, { useState } from "react";
import { Platform, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "constants/Colors";
import CustomHeaderButton from "components/UI/CustomHeaderButton";
import CartItem from "components/shop/CartItem";
import * as cartActions from "store/actions/cart";
import * as ordersActions from "store/actions/orders";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
