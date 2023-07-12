import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
// import BackButton from "../components/BackButton";

import { useQuery } from "@apollo/client";
import { GET_MOVIE_DETAIL } from "../config/queries";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

// import * as React from "react";
// import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function DetailPage({ navigation, route }) {
  const params = route.params;

  //   const { id, dataMovie } = route.params;

  const { data, loading, error } = useQuery(GET_MOVIE_DETAIL, {
    variables: {
      movieId: params.id,
    },
  });

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setMovieData(data?.movieDetail);
  }, [data]);

  const goWatchTrailer = () => {
    // Replace the 'YOUR_YOUTUBE_TRAILER_LINK' with the actual YouTube trailer link for the movie
    const trailerLink = movieData?.trailerUrl;
    Linking.openURL(trailerLink);
  };

  if (loading) {
    return (
      <View styles={styles.loading}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Loading ...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.header}>
        <Image source={{ uri: movieData?.imgUrl }} style={styles.image} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.titleText}>{movieData?.title}</Text>
            <Text style={styles.directorText}>
              2023 Directed By Lorem ipsum dolor
            </Text>
            <Text style={styles.directorText}>
              Genre: {movieData?.Genre?.name}
            </Text>
            <Text style={styles.directorText}>
              Author: {movieData?.authorName}
            </Text>
            <Text style={styles.directorText}>Rating: {movieData?.rating}</Text>
          </View>
          <Image
            source={{ uri: movieData?.imgUrl }}
            style={{ width: 95, height: 140 }}
          />
        </View>
        <Text style={styles.synopsisText}>{movieData?.synopsis}</Text>
        <Text style={styles.castTitle}>Casts</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={movieData?.Casts}
          renderItem={({ item }) => <CastCard item={item} />}
          keyExtractor={(item, index) => index}
        ></FlatList>
        <TouchableOpacity
          style={styles.watchTrailerButton}
          onPress={goWatchTrailer}
        >
          <Text style={styles.watchTrailerButtonText}>Watch Trailer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#14181C",
  },
  header: {
    height: "30%", // Adjust this value to set the desired height
    overflow: "hidden", // Clip the image to the specified height
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // Use the following properties to adjust the image position within the header
    position: "absolute",
    top: -10,
    left: 0,
    opacity: 0.8,
  },
  content: {
    flex: 1,
    paddingLeft: 16,
  },
  backButton: {
    position: "absolute",
    top: "10%", // Adjust the top positioning as needed
    left: "2%", // Adjust the left positioning as needed
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    marginRight: 15,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  titleText: {
    color: "white",
    fontSize: 20,
  },
  directorText: {
    color: "#99AABB",
    fontSize: 12,
    paddingBottom: 5,
  },
  synopsisText: {
    color: "#99AABB",
    fontSize: 16,
  },
  castTitle: {
    color: "white",
    fontSize: 20,
  },
  castCard: {
    marginHorizontal: 7,
    marginVertical: 20,
    height: 130,
    width: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  watchTrailerButton: {
    marginTop: 20,
    backgroundColor: "#445565",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  watchTrailerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const CastCard = ({ item }) => {
  return (
    <View style={styles.castCard}>
      <Image
        source={{ uri: item.profilePict }}
        style={{
          width: 80,
          height: 80,
          maxHeight: 120,
          resizeMode: "cover",
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          color: "white",
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};
