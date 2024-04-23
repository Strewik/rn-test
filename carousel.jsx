import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
  } from "react-native";
  import React, { useState, useRef, useEffect } from "react";
  import Carousel, {
    Pagination,
    ParallaxImage,
  } from "react-native-snap-carousel";
  
  import { views1, views2 } from "./data";
  
  const SLIDER_WIDTH = Dimensions.get("window").width;
  
  // const renderItem1 = ({ item }) => {
  //   return (
  //     <View style={styles.renderItem1_parentView1}>
  //       <Image source={{ uri: item.imgUrl }} style={styles.renderItem1_img} />
  //       <View style={styles.renderItem1_view1}>
  //         <Text style={styles.renderItem1_text1}>OFFERS</Text>
  //       </View>
  //       <View style={styles.renderItem1_view2}>
  //         <Text style={styles.renderItem1_text2}>{item.title}</Text>
  //         <TouchableOpacity>
  //           <Text style={styles.renderItem1_text3}>EXPLORE OFFERS</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };
  
  // const renderItem2 = ({ item }) => {
  //   return (
  //     <View style={styles.renderItem2_parentView2}>
  //       <Image source={{ uri: item.imgUrl }} style={styles.renderItem2_img} />
  //       {item.verified ? (
  //         <View
  //           style={[styles.renderItem1_view1, { backgroundColor: "#D8FFDB" }]}
  //         >
  //           <Text style={[styles.renderItem1_text1, { color: "#008100" }]}>
  //             verified
  //           </Text>
  //         </View>
  //       ) : (
  //         <View
  //           style={[styles.renderItem1_view1, { backgroundColor: "#FFDADB" }]}
  //         >
  //           <Text style={[styles.renderItem1_text1, { color: "#7D0000" }]}>
  //             not verified
  //           </Text>
  //         </View>
  //       )}
  //     </View>
  //   );
  // };
  
  const renderItem3 = ({ item }) => {
    return (
      <View style={styles.renderItem1_parentView1}>
        <Image
          source={{ uri: item.imgUrl }}
          style={[styles.renderItem1_img, { height: 250 }]}
        />
      </View>
    );
  };
  
  const renderItem4 = ({ item }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.imgUrl }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  
  const App = () => {
    const [page, setPage] = useState(0);
    const isCarousel = useRef(null);
  
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
  
    useEffect(() => {
      setEntries(views2);
    }, []);
  
    return (
      <ScrollView style={{ backgroundColor: "#f2f2f2" }}>
        {/* Default Carousel */}
        {/*<Carousel
             layout={"default"}
             data={views1}
             renderItem={renderItem1}
             sliderWidth={400}
             itemWidth={350}
          />*/}
  
        {/* Tinder like Carousel */}
        {/*<Carousel
             layout={"tinder"}
             data={views2}
             renderItem={renderItem2}
             sliderWidth={400}
             itemWidth={350}
          />*/}
  
        {/* Pagination Carousel */}
        <Carousel
          ref={isCarousel}
          onSnapToItem={(page) => setPage(page)}
          data={views1}
          renderItem={renderItem3}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH*0.7}
          loop
          autoplay
          autoplayInterval={3000}
        />
        <Pagination
          activeDotIndex={page}
          carouselRef={isCarousel}
          tappableDots={true}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          dotsLength={views1.length}
          dotStyle={{
            width: 10,
            borderRadius: 18,
            backgroundColor: "#0074FF",
            // marginTop:10,
          }}
          inactiveDotStyle={{
            backgroundColor: "grey",
          }}
        />
  
        {/* Parallax Carousel */}
        {/* <Carousel
          ref={carouselRef}
          sliderWidth={500}
          sliderHeight={200}
          itemWidth={450}
          data={entries}
          renderItem={renderItem4}
          hasParallaxImages={true}
        /> */}
      </ScrollView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    renderItem1_parentView1: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      // height: 250,
      // width: 350,
      justifyContent: "space-around",
      alignItems: "center",
      overflow: "hidden",
      marginVertical: 40,
    },
    renderItem1_view1: {
      width: 80,
      position: "absolute",
      fontSize: 20,
      top: 10,
      right: 20,
      backgroundColor: "#ffffff",
      borderRadius: 18,
      alignItems: "center",
    },
    renderItem1_view2: {
      width: 350,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    renderItem1_img: {
      width: "100%",
      height: "100%",
    },
    renderItem1_text1: {
      fontWeight: "700",
      color: "#000000",
    },
    renderItem1_text2: {
      marginVertical: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
    renderItem1_text3: {
      marginVertical: 12,
      color: "blue",
      fontWeight: "bold",
    },
    renderItem2_parentView2: {
      backgroundColor: "#ffffff",
      borderRadius: 18,
      height: 550,
      width: 350,
      justifyContent: "space-around",
      alignItems: "center",
      overflow: "hidden",
      marginVertical: 20,
    },
    renderItem2_img: {
      width: 350,
      height: 550,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: "cover",
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: "white",
      borderRadius: 8,
    },
    container: {
      flex: 1,
    },
    item: {
      width: 350,
      height: 200,
      marginVertical: 20,
    },
  });
  