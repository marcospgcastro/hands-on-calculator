import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [ memorNumber, setMemorNumber ] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(currentNumber !== '0') {
      const sum = Number(firstNumber) + Number(currentNumber);
      console.log(Number(firstNumber)+'+'+Number(currentNumber)+'='+Number(sum));
      setFirstNumber(String(sum));
      setCurrentNumber('0')
      setOperation('➕')
    }   
  }

  const handleMinusNumbers = () => {
    if(currentNumber !== '0') {
      const sum = Number(firstNumber) - Number(currentNumber);
      console.log(Number(firstNumber)+'-'+Number(currentNumber)+'='+Number(sum));
      setFirstNumber(String(sum));
      setCurrentNumber('0')
      setOperation('➖')
    } 
  }

  const handleMultNumbers = () => {
    if(currentNumber !== '0') {
      const sum = Number(firstNumber) * Number(currentNumber);
      console.log(Number(firstNumber)+'*'+Number(currentNumber)+'='+Number(sum));
      setFirstNumber(String(sum));
      setCurrentNumber('0')
      setOperation('✖️')
    }
  }

  const handleDiviNumbers = () => {
    if(currentNumber !== '0') {
      const sum = Number(firstNumber) / Number(currentNumber);
      console.log(Number(firstNumber)+'/'+Number(currentNumber)+'='+Number(sum));
      setFirstNumber(String(sum));
      setCurrentNumber('0')
      setOperation('➗')
    }
  }

  const eraseToNumber = () => {
    setCurrentNumber('0')
  }

  const cleanMemorNumber = () => {
    setMemorNumber('0');
    console.log(' Memory is clean!')
  }

  const AddMemorNumber = () => {
    if( memorNumber === '0' && currentNumber !== '0') {
      setMemorNumber(String(currentNumber));
      console.log(' Add to memory!');
    } else {
      handleAddNumber(String(memorNumber));
    }
  }
  
  const handleEquals = () => {
    let sum;
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '➕':
            sum = Number(firstNumber) + Number(currentNumber);
            console.log(Number(firstNumber)+'+'+Number(currentNumber)+'='+Number(sum));
            setCurrentNumber(String(sum))
            setFirstNumber('0')
            setOperation('')
            break;
          case '➖':
            sum = Number(firstNumber) - Number(currentNumber);
            console.log(Number(firstNumber)+'-'+Number(currentNumber)+'='+Number(sum));
            setCurrentNumber(String(sum))
            setFirstNumber('0')
            setOperation('')
            break;
          case '✖️':
            sum = Number(firstNumber) * Number(currentNumber);
            console.log(Number(firstNumber)+'*'+Number(currentNumber)+'='+Number(sum));
            setCurrentNumber(String(sum))
            setFirstNumber('0')
            setOperation('')
            break;  
          case '➗':
            sum = Number(firstNumber) / Number(currentNumber);
            console.log(Number(firstNumber)+'/'+Number(currentNumber)+'='+Number(sum));
            setCurrentNumber(String(sum))
            setFirstNumber('0')
            setOperation('')
            break;  
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleOnClear}/>
          <Button label="+M" onClick={AddMemorNumber}/>
          <Button label="-M" onClick={cleanMemorNumber}/>
          <Button label="➕" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="➖" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="✖️" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="➗" onClick={handleDiviNumbers}/>
        </Row>
        <Row>
          <Button label="BACK " onClick={eraseToNumber}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="ENTER" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;