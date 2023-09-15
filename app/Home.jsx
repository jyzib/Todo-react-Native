import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import { useState } from "react";
  const Home = ({route,navigation}) => {
    const {user} = route.params
  
    const [name, setName] = useState("");
    const [data, setdata] = useState([]);
    const [update, setupdate] = useState(true);
    const date  = new Date().getDay()
    console.log(date)
    const handelsubmit = () => {
      if (name) {
        const mdate = new Date().getMilliseconds();
        setdata([...data, { id: mdate, name: name ,date:date}]);
        setName("");
      }
    };
    const handeldelet = (l) => {
      const filterdata = data.filter((e) => {
        if (e.id !== l.id) {
          return e;
        }
      });
      setdata(filterdata);
    };
  
    const handelupdate = (e) => {
  
      setupdate(!update);
      setName(e.name);
    };
    const allupdate = (e) => {
      setupdate(!update);
      const update = data.map((m) => {
        if (m.id == e.id) {
          m.name = name;
        }
        return m;
      });
      setName("");
      setdata(update);
    };
    return (
      <SafeAreaView style={style.contener}>
        <View>
          <Text>Welcome : {user}</Text>
        </View>
        <View style={style.addtodo}>
          <TextInput
            onChangeText={(e) => setName(e)}
            placeholder="search"
            value={name}
            style={style.input}
          />
          <Button onPress={handelsubmit} title="Add Todo" />
        </View>
        {data.length < 1 && <Text>Please Write Some Todo</Text>}
        <View>
          {data.map((e) => {
            return (
              <View style={style.alltodo}>
                <Text>
                 
                  {e.name}
                  {e.id} 
                </Text>
                <Text>
                {e.date}
                </Text>
               
                <Button onPress={() => handeldelet(e)} title="delete" />
      
                  <Button onPress={() => handelupdate(e)} title="update" />
       
                  <Button onPress={() => allupdate(e)} title="Submit" />
          
              </View>
            );
          })}
        </View>
        <View>
          <Button title="Go back" onPress={()=>navigation.goBack()} />
          <Button title="data" onPress={()=>navigation.navigate("Data")} />
        </View>
      </SafeAreaView>
    );
  };
  export default Home;
  
  const style = StyleSheet.create({
    contener: {
      alignItem: "center",
    },
    button: {
      padding: 20,
    },
    font: {
      padding: 10,
      borderColor: "black",
      borderWidth: 2,
      width: 100,
      marginTop: 10,
    },
  
    input: {
      borderWidth: 1,
      padding: 10,
      width: "70%",
      margin: 10,
    },
    addtodo: {
      flexDirection: "row",
    },
    alltodo: {
      justifyContent: "space-around",
      flexDirection: "row",
      marginTop: 20,
      backgroundColor: "pink",
    },
  });
  