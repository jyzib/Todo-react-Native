import  { Component ,useState} from 'react'
import { Text, View,Button ,TextInput} from 'react-native'


const Login = ({navigation})=>{
    const [name,setName] = useState("")
    const handelclick = ()=>{
        setName('')
        navigation.navigate("home",{user:`${name}`})

    }
    return (
        <View>
            <TextInput value={name} placeholder='Enter name' onChangeText={(e)=>setName(e)} />
          <Text> login page </Text>
       
          <Button onPress={handelclick} title='Enter' />
          <Button onPress={()=>navigation.navigate("about")} title='About' />
        </View>
      )
}
export default Login
