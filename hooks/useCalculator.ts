import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')
    const lastOperation = useRef<Operator>(null)

    useEffect(() => {
        
        setFormula(number.toString())
    }, [number])


    const buildNumber = (numberString: string) => {
        if(number.includes('.') && numberString === '.') return;
        if(number.startsWith('0') && numberString !== '.') {
            
        }

        setNumber(number + numberString)
    }


    return {
        // Props
        formula,
        number,
        previousNumber,

        // Metodos
        buildNumber,

        // Acciones
    }
}