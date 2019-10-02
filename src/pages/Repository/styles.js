import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    position: relative;
    color: #7159c1;
    i {
      font-size: 22px;
      position: absolute;
      left: -22px;
      top: -4px;
      font-weight: bold;
      transition: left 0.15s;
    }
    &:hover i {
      left: -24px;
    }
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 15px;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
