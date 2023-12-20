import * as S from './style';
import * as C from '../../components';
import * as A from '../../assets/svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const WeeStuChatPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.message.trim() !== '') {
      setMessages([...messages, data.message]);
    }
    reset();
  };

  const [messages, setMessages] = useState([]);

  return (
    <S.WeeStuChat>
      <C.Header />
      <div className='arrow' onClick={() => navigate('/weeclass')}>
        <A.ArrowIcon />
      </div>
      <S.ChatContainer>
        <S.ChatWrapper>
          <C.ReceivedChat>반갑습니다</C.ReceivedChat>
          {messages.map((message, idx) => (
            <C.SendedChat key={idx}>{message}</C.SendedChat>
          ))}
        </S.ChatWrapper>
        <S.InputWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.MessageInput autoComplete='off' {...register('message')} />
            <S.IconContainer onClick={handleSubmit(onSubmit)}>
              <A.SendIcon />
            </S.IconContainer>
          </form>
        </S.InputWrapper>
      </S.ChatContainer>
    </S.WeeStuChat>
  );
};

export default WeeStuChatPage;
