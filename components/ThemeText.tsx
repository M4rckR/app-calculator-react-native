import { globalStyles } from '@/styles/global-styles'
import { Text, type TextProps } from 'react-native'

interface Props extends TextProps {
    variant?: 'h1' | 'h2'
}

export default function ThemeText({children, variant, ...rest}: Props) {
  return (
      <Text style={[
            {color: 'white', fontFamily: 'SpaceMono'},
            variant === 'h1' && globalStyles.mainResults,
            variant === 'h2' && globalStyles.subResults
        ]} 
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
        >
        {children}
      </Text>
  )
}