import { ChangeEvent, createContext, useState } from 'react';
import { BlogManagerContainer, ButtonContainer } from './styles';
import Button from 'components/Button/Button';
import Card from '../Card/Card';
import Input from 'components/Input/Input';

//Шаг1 - создание контекста со значением по умолчанию - ''
export const MessageContext = createContext<string>('')


function BlogManagement() {
  const [inputValue, setInputValue] = useState<string>('')
  const [postedMessage, setPostedMessage] = useState<string>('')

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onPostMessage = () => {
    setPostedMessage(inputValue)
  }
  console.log(postedMessage);
  
  return (
    //Шаг 2 - создание обертки и сохранение значения в context
    <MessageContext.Provider value={postedMessage}>
    <BlogManagerContainer>
      <Input name='message' value={inputValue} onChange={onChangeInput} />
      <ButtonContainer>
        <Button name="Post" onClick={onPostMessage} />
      </ButtonContainer>
      <Card />
    </BlogManagerContainer>
    </MessageContext.Provider>
  );
}

export default BlogManagement;

