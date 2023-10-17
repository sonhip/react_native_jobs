import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "react-native";
import { SIZES, icons } from "../../../constants";
import styles from "./welcome.style";
import { router } from "expo-router";

const Welcome = () => {
  const [searchInput, setSearchInput] = useState("");
  const [activeJobType, setActiveJobType] = useState("full-time");

  const jobsType = ["full-time", "part-time", "contructor"];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Xavi</Text>
        <Text style={styles.welcomeMessage}>Find your perfect jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobsType}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
