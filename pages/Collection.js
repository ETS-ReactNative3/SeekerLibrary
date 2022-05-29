import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { LogBox } from "react-native";
// import firestore
import { doc, getDoc } from "firebase/firestore";
import { totalDB } from "../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import PDFViewer from "../components/PDFViewer";


class Collection extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }

  async getBooks() {
    const snapshot = await totalDB.collection("books").orderBy("title", "asc").get();
    const books = snapshot.docs.map((doc) => doc.data());
    this.setState({ books });
  }

  async componentDidMount() {
    this.getBooks();
  }

  async componentWillUnmount() {
    this.getBooks = false;
  }

  render() {
  return (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.categContainer}>
          <View style={styles.container}>
            {this.state.books.map((book, i) => (
              <TouchableOpacity
                key={i}
                style={styles.bookContainer}
                onPress={() =>
                  this.props.navigation.navigate("PDFViewer", {
                    pdf: {
                      url: book.url,
                    },
                  })
                }
              >
                <View style={styles.imgContainer}>
                  {/* <Image source={{ uri: book.thumbnail }} style={styles.img} /> */}
                </View>
                <View style={styles.textContainer}>
                  <Text multiline={true} style={styles.title}>
                    {book.title}
                  </Text>
                  <Text style={styles.author}>{book.author}</Text>
                  <Text>{book.category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          </View>
    </ScrollView>
  );
  }
}
export default Collection;

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 100,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#F6F6F6",
  },
  greetings: {
    backgroundColor: "#57A7FF",
    paddingTop: 10,
    paddingBottom: 15,
  },
  container: {
    marginBottom: 30,
  },
  bookContainer: {
    marginTop: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
  },
  imgContainer: {
    backgroundColor: "#57A7FF",
  },
  img: {
    width: 75,
    height: 100,
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 100,
  },
  title: {
    fontWeight: "bold",
  },
  author: {
    fontStyle: "italic",
  },
  categTitle: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  category: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});