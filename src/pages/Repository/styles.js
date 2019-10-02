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

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #ccc;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          line-height: 20px;
          display: inline-block;
          padding: 0 6px;
          margin-left: 7px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
