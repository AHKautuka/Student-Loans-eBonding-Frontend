import React from 'react'
import { TextInput, View } from 'react-native'
export default function InputField(){
    return(
        <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >

<TextInput style={{ width:'150%', padding:15, borderColor:'grey' , borderRadius:1,  borderWidth:1, color:'grey' }
} placeholder='Enter Tuition Amount'/>
        </View>
    )
}