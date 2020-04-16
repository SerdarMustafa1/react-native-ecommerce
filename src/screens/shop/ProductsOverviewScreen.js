import React from "react";
import { Flatlist, Text } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "components/shop/ProductItem";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <Flatlist
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverviewScreen;
