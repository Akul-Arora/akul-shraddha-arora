import React from 'react';
import { StyleSheet, Text,View,TouchableOpacity,} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Transaction extends React.Component{
constructor(){
    super();
    this.state={
        hasCameraPermission:null,
        scanned:false,
        scannedData:'',
        buttonState:'normal'
    }
 
}
//taking camera permission
getCameraPermission=()=>{
const {status}= await Permissions.askAsync(Permissions.CAMERA)

    this.setState({hasCameraPermission:status==="granted",
    buttonState:'clicked',
    scanned:false})
    
}

handleBarcodeScanned= async({type,data})=>{
    this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'normal'
    });
}




render(){
const hasCameraPermission=this.state.hasCameraPermission;
const scanned= this.state.scanned;
const buttonState=this.state.buttonState;
if(buttonState==='clicked' && hasCameraPermission){
    return(
        <BarCodeScanner
        onBarCodeScanned={scanned?undefined:thiskey.handleBarcodeScanned}
        style={StyleSheet.absoluteFillObject}/>
    )
}

else if(buttonState === 'normal'){
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.displayText}>{hasCameraPermission===true ? this.state.scannedData:"Please allow permission"}</Text>
            <TouchableOpacity onPress={this.this.getCameraPermission}
            style={styles.scanButton}>
            </TouchableOpacity>
        </View>

    )
}
}
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'centre',
        alignItems:'center'
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underLine'
    },
    scanButton:{
        backgroundColor:'#2196F3',
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:20
    }
})