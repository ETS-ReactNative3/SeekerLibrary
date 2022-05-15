import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import PDFReader from "rn-pdf-reader-js";

class PDFViewer extends Component {
    render(){
        let params = this.props.route.params;
        console.log(params)
      return(
          <View style={styles.pdf}>
              <PDFReader
                    source={{uri: params.pdf.url}}
                />
          </View>
      );
    }
  }

export default PDFViewer;

const styles = StyleSheet.create({
    pdf: {
        height: Dimensions.get("window").height,
    },
})