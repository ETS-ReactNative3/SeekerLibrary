import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { totalDB } from "../firebase";
import PDFViewer from "../components/PDFViewer";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class SearchNav extends Component {
  render(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
      />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
      />
    </Stack.Navigator>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      input: '',
    };
  }

  async componentDidMount(){
    this.update();
  }

  async componentWillMount(){
    this.getSearch();
  }

  async getSearch() {
    const snapshot = await totalDB.collection("books").orderBy('title').startAt(this.state.input).endAt(this.state.input + '\uf8ff').get()
    const search = snapshot.docs.map(doc => doc.data());
    EventRegister.emit('searchBook', 'it works!!!');
    this.setState({ search });
  }

  async update() {
    this.listener = EventRegister.addEventListener('searchBook', (data) => {
      this.getSearch();
    })
  }
  render() {
  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.center }>
        <View style={ styles.search }>
          <TextInput 
            style={ styles.input }
            placeholder="Search a book"
            onChangeText={(text)=>{this.setState({ input: text })}}
            onSubmitEditing = {this.getSearch}
            value = {this.state.title}
          />
          <TouchableOpacity style={styles.searchButton}
            onPress={this.getSearch}>
            <Ionicons name='ios-search' size={25} color={ '#ffff' } style={ styles.icon }/>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
        {this.state.search.map((book, i) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomColor:'#e0e0e0',
    borderBottomWidth: 1,
    flex: 1,
  },
  scroll: {
    flex: 3,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    paddingHorizontal: 15,
    margin: 5,
    flex: 1,
    color: '#57A7FF',
    fontFamily: 'Poppins-Regular',
    height: 50,
    width: Dimensions.get("window").width - 150,
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center', 
    // backgroundColor: 'green' ,
  },
  icon: {
    // flex: 1,
      marginRight: 5,
  },
  searchButton: {
    backgroundColor: '#57A7FF',
    height: 50,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchText: {
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
  },
});