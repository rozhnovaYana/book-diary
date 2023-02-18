import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface IButtonProps {
    title: string,
    onPress: () => void,
    style?: {} 
};

const Button: React.FC<IButtonProps> = ({ title, onPress, style }) => {
    return (
        <Pressable 
            onPress={onPress} 
            android_ripple={{ color: '#F4C27F'}}
        > 
            <LinearGradient 
                style={style || styles.button} 
                colors={['#D8605B', '#F4C27F']}
                end={{ x: 0, y: 0 }}
            >
                <Text style={styles.text}>
                    {title} 
                </Text>
            </LinearGradient>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 17,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Button;