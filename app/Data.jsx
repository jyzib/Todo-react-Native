import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responce = await fetch("https://dummyjson.com/products/");
        const data = await responce.json();

        setData(data.products);
      } catch (error) {
        console.log(`errssr` + error);
      }
    };
    fetchdata();
   
  }, []);
  const All = ({ Title }) => {
  console.log(Title.stock)
    return (
      <View style={styles.card}>
        <Image style={styles.img} source={{ uri: Title.images[1] }} />
        <Text>{Title.brand}</Text>
        <Text>{Title.stock}</Text>
        <Text>{Title.category}</Text>
        <Text>{Title.description}</Text>
      </View>
    );
  };

  const Title = ({ item }) => {
    return <All Title={item} />;
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.backgroun}
        source={{
          uri: "https://thumbs.dreamstime.com/z/blue-sky-white-clouds-background-60439239.jpg?w=992",
        }}
      >
        <View style={styles.contener}>
          <FlatList
            data={data}
            renderItem={Title}
            keyExtractor={(e) => e.id}
            ItemSeparatorComponent={() => <Text>d</Text>}
            ListEmptyComponent={() => <Text>empty</Text>}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 400,
    padding: 10,
  },
  backgroun: {
    // flex:1
  },
  contener: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 10,
    marginVertical: 10,

    width: 400,

    backgroundColor: "white",
    flex: 1,
  },
});

export default Data;
