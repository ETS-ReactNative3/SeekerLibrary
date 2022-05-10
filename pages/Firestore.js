import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { LogBox } from "react-native";

// import firestore
import { doc, getDoc } from "firebase/firestore";
import { db, getAllBooks, totalDB } from "../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

class Firestore extends Component {
  constructor() {
    super();
    this.state = {
      bsis: [],
      bab: [],
      act: [],
      bacm: [],
      bsa: [],
      bsais: [],
      bssw: [],
      hcs: [],
      ic: [],
      om: [],
      url: "",
      gen: [],
      philpsy: [],
      religion: [],
      socsci: [],
      lang: [],
      natsci: [],
      appsci: [],
      arts: [],
      lit: [],
      geohis: [],
    };
  }

  // GENERAL CATEGORY
//   Generalities
// Philosophy & Psychology
// Religion
// Social Sciences
// Languages
// Natural Science
// Applied Science
// Arts & Recreation
// Literature
// Geography & History
async getGeneralities() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Generalities")
    .get();
  const gen = snapshot.docs.map((doc) => doc.data());
  this.setState({ gen });
}

async getPhilpsy() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Philosophy & Psychology")
    .get();
  const philpsy = snapshot.docs.map((doc) => doc.data());
  this.setState({ philpsy });
}

async getReligion() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Religion")
    .get();
  const religion = snapshot.docs.map((doc) => doc.data());
  this.setState({ religion });
}

async getSocsci() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Social Sciences")
    .get();
  const socsci = snapshot.docs.map((doc) => doc.data());
  this.setState({ socsci });
}

async getLanguage() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Language")
    .get();
  const lang = snapshot.docs.map((doc) => doc.data());
  this.setState({ lang });
}

async getNatural() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Natural Science")
    .get();
  const natsci = snapshot.docs.map((doc) => doc.data());
  this.setState({ natsci });
}

async getApplied() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Applied Science")
    .get();
  const appsci = snapshot.docs.map((doc) => doc.data());
  this.setState({ appsci });
}

async getArts() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Arts & Recreation")
    .get();
  const arts = snapshot.docs.map((doc) => doc.data());
  this.setState({ arts });
}

async getLit() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Literature")
    .get();
  const lit = snapshot.docs.map((doc) => doc.data());
  this.setState({ lit });
}

async getGeo() {
  const snapshot = await totalDB
    .collection("books")
    .where("category", "==", "Geography & History")
    .get();
  const geohis = snapshot.docs.map((doc) => doc.data());
  this.setState({ geohis });
}


  // SPECIAL CATEGORY
  async getAct() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "ACT")
      .get();
    const act = snapshot.docs.map((doc) => doc.data());
    this.setState({ act });
  }

  async getBab() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BAB")
      .get();
    const bab = snapshot.docs.map((doc) => doc.data());
    this.setState({ bab });
  }

  async getBacm() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BACM")
      .get();
    const bacm = snapshot.docs.map((doc) => doc.data());
    this.setState({ bacm });
  }

  async getBsa() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BSA")
      .get();
    const bsa = snapshot.docs.map((doc) => doc.data());
    this.setState({ bsa });
  }

  async getBsais() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BSAIS")
      .get();
    const bsais = snapshot.docs.map((doc) => doc.data());
    this.setState({ bsais });
  }

  async getBsis() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BSIS")
      .get();
    const bsis = snapshot.docs.map((doc) => doc.data());
    this.setState({ bsis });
  }

  async getBssw() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "BSSW")
      .get();
    const bssw = snapshot.docs.map((doc) => doc.data());
    this.setState({ bssw });
  }

  async getHcs() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "HCS")
      .get();
    const hcs = snapshot.docs.map((doc) => doc.data());
    this.setState({ hcs });
  }

  async getIc() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "IC")
      .get();
    const ic = snapshot.docs.map((doc) => doc.data());
    this.setState({ ic });
  }

  async getOm() {
    const snapshot = await totalDB
      .collection("books")
      .where("category", "==", "OM")
      .get();
    const om = snapshot.docs.map((doc) => doc.data());
    this.setState({ om });
  }
  

  async componentDidMount() {
    // General Categ
    this.getGeneralities();
    this.getPhilpsy();
    this.getReligion();
    this.getSocsci();
    this.getLanguage();
    this.getNatural();
    this.getApplied();
    this.getArts();
    this.getLit();
    this.getGeo();
    // Special Categ
    this.getAct();
    this.getBsis();
    this.getBab();
    this.getBsa();
    this.getBsais();
    this.getBssw();
    this.getBacm();
    this.getHcs();
    this.getIc();
    this.getOm();
  }

  async componentWillUnmount() {
    // General Categ
    this.getGeneralities = false;
    this.getPhilpsy = false;
    this.getReligion = false;
    this.getSocsci = false;
    this.getLanguage = false;
    this.getNatural = false;
    this.getApplied = false;
    this.getArts = false;
    this.getLit = false;
    this.getGeo = false;
    // Special Categ
    this.getAct = false;
    this.getBsis = false;
    this.getBab = false;
    this.getBsa = false;
    this.getBsais = false;
    this.getBssw = false;
    this.getBacm = false;
    this.getHcs = false;
    this.getIc = false;
    this.getOm = false;
  }

  render() {
    return (
      <>
      {/* General Categ */}
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>General Categories</Text>
      </View>
      <View style={styles.container}>
          <Text style={styles.categTitle}>Generalities</Text>
          {this.state.gen.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Philosophy & Psychology</Text>
          {this.state.philpsy.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Religion</Text>
          {this.state.religion.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Social Sciences</Text>
          {this.state.socsci.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Languages</Text>
          {this.state.lang.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Natural Science</Text>
          {this.state.natsci.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Applied Science</Text>
          {this.state.appsci.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Arts & Recreation</Text>
          {this.state.arts.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Literature</Text>
          {this.state.lit.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>Geography & History</Text>
          {this.state.geohis.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      {/* Special Categ */}
        <View style={styles.container}>
          <Text style={styles.categTitle}>ACT</Text>
          {this.state.act.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BAB</Text>
          {this.state.bab.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BACM</Text>
          {this.state.bacm.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BSA</Text>
          {this.state.bsa.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BSAIS</Text>
          {this.state.bsais.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BSIS</Text>
          {this.state.bsis.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>BSSW</Text>
          {this.state.bssw.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>HCS</Text>
          {this.state.hcs.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>IC</Text>
          {this.state.ic.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <Text style={styles.categTitle}>OM</Text>
          {this.state.om.map((book) => (
            <TouchableOpacity style={styles.bookContainer}>
              <View style={styles.imgContainer}>
                <Image source={{ uri: book.thumbnail }} style={styles.img} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <Text>{book.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  }
}

export default Firestore;

const styles = StyleSheet.create({
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
    backgroundColor: '#57A7FF',
  },
  img: {
    width: 75,
    height: 100,
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  author: {
    fontStyle: "italic",
  },
  categTitle: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
  category: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
