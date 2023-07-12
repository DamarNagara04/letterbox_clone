import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import CardComponent from "../components/CardComponent";
import { Ionicons } from "@expo/vector-icons";

import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../config/queries";

export default function HomePage({ navigation }) {
  //   const [movieData, setMovieData] = useState([]);

  const { data, loading, error } = useQuery(GET_MOVIES);

  //   console.log(data, ">>>>>ALL DATA>>>>>>>");

  //   useEffect(() => {
  //     setMovieData(databaseMovie);
  //   }, []);

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
      <View style={styles.header}>
        {/* Add your header content here */}
        <Ionicons name="menu" size={25} color="white" style={styles.icon} />
        <Text style={styles.headerText}>Popular</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="search" size={20} color="white" style={styles.icon} />
      </View>
      <FlatList
        data={data?.movies}
        //   data={movieData}
        renderItem={({ item }) => <CardComponent user={item} />}
        keyExtractor={(item) => item?.id}
        numColumns={4}
      />
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
    backgroundColor: "#283038",
  },
  header: {
    height: 90,
    backgroundColor: "#445565",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //  paddingHorizontal: 16,
    paddingStart: 16,
    paddingEnd: 5,
    paddingTop: 10,
    //  justifyContent: "center",
    //  alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 20,
  },
});

const databaseMovie = [
  {
    id: 1,
    title: "Spider-Man: Across the Spider-Verse",
    slug: "",
    synopsis:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    trailerUrl:
      "https://www.youtube.com/embed/yFrxzaBLDQM?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 2,
    title: "Asteroid City",
    slug: "",
    synopsis:
      "Set in a fictional American desert town circa 1955, the itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.",
    trailerUrl:
      "https://www.youtube.com/embed/WCoHy4EWl9E?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNDJmMzY0ZGUtYWE1My00OWViLTg1NTctOWMwZWJlNDQzNGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 3,
    title: "Reality",
    slug: "",
    synopsis:
      "On June 3, 2017, 25-year-old Reality Winner returns from running errands to find two FBI agents at her home in Augusta, Georgia. An Air Force veteran and yoga instructor, Winner spends the next two hours being questioned about her work as an intelligence contractor — specifically, whether she leaked a classified document about Russian interference in the 2016 U.S. elections.",
    trailerUrl:
      "https://www.youtube.com/embed/pZKeY3Tw6SI?rel=0&wmode=transparent",
    imgUrl:
      "https://www.themoviedb.org/t/p/w500/4rS1rcaeIJd2zdTn2G8RMfTNeiV.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 4,
    title: "Cast Away",
    slug: "",
    synopsis:
      "AT THE EDGE OF THE WORLD, HIS JOURNEY BEGINS.Chuck, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia ditches at sea during a terrible storm. He's the only survivor, and he washes up on a tiny island with nothing but some flotsam and jetsam from the aircraft's cargo.",
    trailerUrl:
      "https://www.youtube.com/embed/2dZvTscDGek?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 5,
    title: "The Little Mermaid",
    slug: "",
    synopsis:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    trailerUrl:
      "https://www.youtube.com/embed/kpGo2_d3oYE?rel=0&wmode=transparent",
    imgUrl:
      "https://lumiere-a.akamaihd.net/v1/images/poster-id-payoff_ce62087b.jpeg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 6,
    title: "Guardians of the Galaxy Vol. 3",
    slug: "",
    synopsis:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    trailerUrl:
      "https://www.youtube.com/embed/AAE5VZktooM?rel=0&wmode=transparent",
    imgUrl:
      "https://insidethemagic.net/wp-content/uploads/2023/04/Collage-Maker-03-Apr-2023-11-33-AM-2045.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 7,
    title: "Past Lives",
    slug: "",
    synopsis:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. 20 years later, they are reunited for one fateful week as they confront notions of love and destiny.",
    trailerUrl:
      "https://www.youtube.com/embed/frUv0K5J7hU?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 8,
    title: "Avatar: The Way of Water",
    slug: "",
    synopsis:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    trailerUrl:
      "https://www.youtube.com/embed/NNtjiQRcVwA?rel=0&wmode=transparent",
    imgUrl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/25/2f45904a-b1cc-4931-921c-7503f9556e40.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 9,
    title: "Mad Max: Fury Road",
    slug: "",
    synopsis:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    trailerUrl:
      "https://www.youtube.com/embed/MonFNCgK4WE?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 10,
    title: "The Matrix",
    slug: "",
    synopsis:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    trailerUrl:
      "https://www.youtube.com/embed/nUEQNVV3Gfs?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 11,
    title: "Spider-Man: Across the Spider-Verse",
    slug: "",
    synopsis:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    trailerUrl:
      "https://www.youtube.com/embed/yFrxzaBLDQM?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 12,
    title: "Asteroid City",
    slug: "",
    synopsis:
      "Set in a fictional American desert town circa 1955, the itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.",
    trailerUrl:
      "https://www.youtube.com/embed/WCoHy4EWl9E?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNDJmMzY0ZGUtYWE1My00OWViLTg1NTctOWMwZWJlNDQzNGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 13,
    title: "Reality",
    slug: "",
    synopsis:
      "On June 3, 2017, 25-year-old Reality Winner returns from running errands to find two FBI agents at her home in Augusta, Georgia. An Air Force veteran and yoga instructor, Winner spends the next two hours being questioned about her work as an intelligence contractor — specifically, whether she leaked a classified document about Russian interference in the 2016 U.S. elections.",
    trailerUrl:
      "https://www.youtube.com/embed/pZKeY3Tw6SI?rel=0&wmode=transparent",
    imgUrl:
      "https://www.themoviedb.org/t/p/w500/4rS1rcaeIJd2zdTn2G8RMfTNeiV.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 14,
    title: "Cast Away",
    slug: "",
    synopsis:
      "AT THE EDGE OF THE WORLD, HIS JOURNEY BEGINS.Chuck, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia ditches at sea during a terrible storm. He's the only survivor, and he washes up on a tiny island with nothing but some flotsam and jetsam from the aircraft's cargo.",
    trailerUrl:
      "https://www.youtube.com/embed/2dZvTscDGek?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 15,
    title: "The Little Mermaid",
    slug: "",
    synopsis:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    trailerUrl:
      "https://www.youtube.com/embed/kpGo2_d3oYE?rel=0&wmode=transparent",
    imgUrl:
      "https://lumiere-a.akamaihd.net/v1/images/poster-id-payoff_ce62087b.jpeg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 16,
    title: "Guardians of the Galaxy Vol. 3",
    slug: "",
    synopsis:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    trailerUrl:
      "https://www.youtube.com/embed/AAE5VZktooM?rel=0&wmode=transparent",
    imgUrl:
      "https://insidethemagic.net/wp-content/uploads/2023/04/Collage-Maker-03-Apr-2023-11-33-AM-2045.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 17,
    title: "Past Lives",
    slug: "",
    synopsis:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. 20 years later, they are reunited for one fateful week as they confront notions of love and destiny.",
    trailerUrl:
      "https://www.youtube.com/embed/frUv0K5J7hU?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 18,
    title: "Avatar: The Way of Water",
    slug: "",
    synopsis:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    trailerUrl:
      "https://www.youtube.com/embed/NNtjiQRcVwA?rel=0&wmode=transparent",
    imgUrl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/25/2f45904a-b1cc-4931-921c-7503f9556e40.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 19,
    title: "Mad Max: Fury Road",
    slug: "",
    synopsis:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    trailerUrl:
      "https://www.youtube.com/embed/MonFNCgK4WE?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 20,
    title: "The Matrix",
    slug: "",
    synopsis:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    trailerUrl:
      "https://www.youtube.com/embed/nUEQNVV3Gfs?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 21,
    title: "Spider-Man: Across the Spider-Verse",
    slug: "",
    synopsis:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    trailerUrl:
      "https://www.youtube.com/embed/yFrxzaBLDQM?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 22,
    title: "Asteroid City",
    slug: "",
    synopsis:
      "Set in a fictional American desert town circa 1955, the itinerary of a Junior Stargazer/Space Cadet convention (organized to bring together students and parents from across the country for fellowship and scholarly competition) is spectacularly disrupted by world-changing events.",
    trailerUrl:
      "https://www.youtube.com/embed/WCoHy4EWl9E?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNDJmMzY0ZGUtYWE1My00OWViLTg1NTctOWMwZWJlNDQzNGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 23,
    title: "Reality",
    slug: "",
    synopsis:
      "On June 3, 2017, 25-year-old Reality Winner returns from running errands to find two FBI agents at her home in Augusta, Georgia. An Air Force veteran and yoga instructor, Winner spends the next two hours being questioned about her work as an intelligence contractor — specifically, whether she leaked a classified document about Russian interference in the 2016 U.S. elections.",
    trailerUrl:
      "https://www.youtube.com/embed/pZKeY3Tw6SI?rel=0&wmode=transparent",
    imgUrl:
      "https://www.themoviedb.org/t/p/w500/4rS1rcaeIJd2zdTn2G8RMfTNeiV.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 24,
    title: "Cast Away",
    slug: "",
    synopsis:
      "AT THE EDGE OF THE WORLD, HIS JOURNEY BEGINS.Chuck, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia ditches at sea during a terrible storm. He's the only survivor, and he washes up on a tiny island with nothing but some flotsam and jetsam from the aircraft's cargo.",
    trailerUrl:
      "https://www.youtube.com/embed/2dZvTscDGek?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 25,
    title: "The Little Mermaid",
    slug: "",
    synopsis:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    trailerUrl:
      "https://www.youtube.com/embed/kpGo2_d3oYE?rel=0&wmode=transparent",
    imgUrl:
      "https://lumiere-a.akamaihd.net/v1/images/poster-id-payoff_ce62087b.jpeg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 26,
    title: "Guardians of the Galaxy Vol. 3",
    slug: "",
    synopsis:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    trailerUrl:
      "https://www.youtube.com/embed/AAE5VZktooM?rel=0&wmode=transparent",
    imgUrl:
      "https://insidethemagic.net/wp-content/uploads/2023/04/Collage-Maker-03-Apr-2023-11-33-AM-2045.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 27,
    title: "Past Lives",
    slug: "",
    synopsis:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora’s family emigrates from South Korea. 20 years later, they are reunited for one fateful week as they confront notions of love and destiny.",
    trailerUrl:
      "https://www.youtube.com/embed/frUv0K5J7hU?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 28,
    title: "Avatar: The Way of Water",
    slug: "",
    synopsis:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    trailerUrl:
      "https://www.youtube.com/embed/NNtjiQRcVwA?rel=0&wmode=transparent",
    imgUrl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/25/2f45904a-b1cc-4931-921c-7503f9556e40.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 29,
    title: "Mad Max: Fury Road",
    slug: "",
    synopsis:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    trailerUrl:
      "https://www.youtube.com/embed/MonFNCgK4WE?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
  {
    id: 30,
    title: "The Matrix",
    slug: "",
    synopsis:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    trailerUrl:
      "https://www.youtube.com/embed/nUEQNVV3Gfs?rel=0&wmode=transparent",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 5,
    genreId: 1,
    authorId: 1,
  },
];
