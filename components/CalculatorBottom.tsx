import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';


interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

export default function CalculatorBottom({
  label, 
  color = Colors.darkGray, 
  blackText = false, 
  doubleSize = false,
  onPress }: Props) {
  return (
    <Pressable 
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        onPress()
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
      }}
    >
        <Text style={
          {...globalStyles.buttonText,
            color: blackText ? 'black' : 'white',
          }
        }>{label}</Text>
    </Pressable>
  )
}