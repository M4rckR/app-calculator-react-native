import CalculatorBottom from '@/components/CalculatorBottom'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

  const { formula, number, previousNumber, buildNumber } = useCalculator()
    
  return (
    <View style={globalStyles.calculatorContainer}>
      
      {/* Resultados */}
      <View style={{paddingHorizontal: 30, paddingVertical:20}}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        <ThemeText variant='h2'>{number}</ThemeText>
        
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorBottom 
          label='C' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {console.log('C')}} 
        />
        <CalculatorBottom 
          label='+/-' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {console.log('+/-')}} 
        />
        <CalculatorBottom 
          label='del' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {console.log('del')}} 
        />
        <CalculatorBottom 
          label='÷'  
          color={Colors.orange}
          onPress={() => {console.log('÷')}} 
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom 
          label='7' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('7')}} 
        />
        <CalculatorBottom 
          label='8' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('8')}} 
        />
        <CalculatorBottom 
          label='9' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('9')}} 
        />
        <CalculatorBottom 
          label='x'  
          color={Colors.orange}
          onPress={() => {console.log('x')}} 
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom 
          label='4' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('4')}} 
        />
        <CalculatorBottom 
          label='5' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('5')}} 
        />
        <CalculatorBottom 
          label='6' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('6')}} 
        />
        <CalculatorBottom 
          label='-'  
          color={Colors.orange}
          onPress={() => {console.log('-')}} 
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom 
          label='1' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('1')}} 
        />
        <CalculatorBottom 
          label='2' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('2')}} 
        />
        <CalculatorBottom 
          label='3' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('3')}} 
        />
        <CalculatorBottom 
          label='+'  
          color={Colors.orange}
          onPress={() => {console.log('+')}} 
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorBottom 
          label='0' 
          doubleSize
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('0')}} 
        />
        <CalculatorBottom 
          label='.' 
          blackText 
          color={Colors.lightGray}
          onPress={() => {buildNumber('.')}} 
        />
        <CalculatorBottom 
          label='='  
          color={Colors.orange}
          onPress={() => {console.log('=')}} 
        />
      </View>
    </View>
  )
}

export default CalculatorApp