import styled from 'styled-components';

export const FoodList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.5rem;
`;

export const FoodTitle = styled.h1`
  color: #212121;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const FoodItemList = styled.div`
  width: 65rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const FoodItem = styled.div`
  width: 21.125rem;
  height: 7rem;
  border: 0.0625rem solid #cacaca;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 0.5rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }

  span {
    color: #6142f8;
    font-weight: 600;
    font-size: 0.75rem;
  }
`;

export const Food = styled.span`
  color: #212121;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Text = styled.span`
  color: #888;
  font-size: 0.75rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
