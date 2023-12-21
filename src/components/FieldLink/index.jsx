import { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const FieldLink = () => {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('');

  const handleFieldChange = (e) => {
    const selected = e.target.value;
    setSelectedField(selected);

    if (selected === '취업진로부') {
      navigate('/job');
    } else if (selected === '위클래스') {
      navigate('/weeclass');
    } else if (selected === '급식') {
      navigate('/foodList');
    }
  };

  return (
    <S.Select onChange={handleFieldChange} value={selectedField}>
      <option>분야선택</option>
      <option value='취업진로부'>취업진로부</option>
      <option value='위클래스'>위클래스</option>
      <option value='급식'>급식</option>
    </S.Select>
  );
};

export default FieldLink;
