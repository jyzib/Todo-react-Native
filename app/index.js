import {View,Text,Button,StyleSheet, TextInput,SafeAreaView} from "react-native"
import { useState } from "react";
const Home =()=>{
    const [name,setName] = useState('')
    const [data,setdata] = useState([])
    

const handelsubmit = ()=>{
    if(name){
    const date = new Date().getMilliseconds()
    setdata([...data,{id:date,name:name}])
    setName("")
    }
   
}
const handeldelet = (l)=>{
    const filterdata = data.filter((e)=>{
        if(e.id !== l.id ){
            return e
        }
      

    })
    setdata(filterdata)
console.log(data)
console.log(data.length)
}
    return(
        <SafeAreaView style={style.contener}>
  
      <View style={style.addtodo} >
        <TextInput 
        onChangeText={(e)=>setName(e)}
        placeholder="search"
        value={name}
        style={style.input}
        />
        <Button onPress={handelsubmit} title="Add Todo" />
      </View>
      {data.length < 1 && <Text>Please Write Some Todo</Text>}
      <View>{data.map((e)=>{
        return  <View style={style.alltodo} >
            <Text>{e.name}{e.id}</Text>
            <Button onPress={()=>handeldelet(e)} title="delete" />
        </View>

      })}
        
      </View>
  
        </SafeAreaView >
    )
}
export default Home;


const style =StyleSheet.create({
   contener : {
 

      
        alignItem:"center",
        
    },
    button:{
       padding:20

    },font:{
        padding:10,
   borderColor:"black",
   borderWidth:2,
   width:100,
   marginTop:10,
    },
   
    input:{
        borderWidth:1,
        padding:10,
       width:"70%",
        margin:10,
    },
    addtodo:{
        flexDirection:"row"
    },
    alltodo :{
        justifyContent:"space-around",
        flexDirection:"row",
        marginTop:20,
        backgroundColor :"pink"
    }
    

}) 