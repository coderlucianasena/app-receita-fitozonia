import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export function FoodList({ data }){
    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate("Detail", { data: data })
    }

    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={handleNavigate}>
           <Image
            source={{ uri: data.cover }}
            style={styles.cover}
           />
           <View style={styles.info}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.description}> {data.total_ingredients} ingredientes | {data.time} min</Text>
           </View>
           <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0,0,0, 0.70)', 'rgba(0,0,0, 0.95)']}
           />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
    },
    cover:{
        width: '100%', // Largura da imagem
        height: 200, // Altura da imagem
        borderRadius: 14,  //Arrendonda a borda
    },
    info:{
        position: 'absolute',
        bottom: 14, // Para colocar na parte de baixo
        left: 14, // Ajusta o espaço
        zIndex: 99, // Garante que o texto ficará sempre na frente da img
    },
    name:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    },
    description:{
        color:"#FFF",
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: "transparent"
    }
})