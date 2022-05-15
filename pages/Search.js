import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { totalDB } from "../firebase";
import { TouchableOpacity } from 'react-native-web';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }

  async componentDidMount(){
    this.update();
    this.getNotes();
  }

  async getBook() {
    const snapshot = await totalDB.collection("books").where("title", "==", this.state.title).get()
    const book = snapshot.docs.map(doc => doc.data());
    EventRegister.emit('searchBook', 'it works!!!');
    this.setState({ book });
  }

  async update() {
    this.listener = EventRegister.addEventListener('searchBook', (data) => {
      this.getBook();
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
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name='ios-search' size={25} color={ '#57A7FF' } style={ styles.icon }/>
          </TouchableOpacity>
          
        </View>
      </View> 
      
    </ScrollView>
  );
  }
}
export default Search;

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
    height: 50,
    width: Dimensions.get("window").width - 50,
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    flex: 1,
    color: '#57A7FF',
    fontFamily: 'Poppins-Regular',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center', 
    // backgroundColor: 'green' ,
  },
  icon: {
    // flex: 1,
    padding: 5,
  },
  searchButton: {

  },
});