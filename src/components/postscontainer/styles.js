import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const Container = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 60px 0 20px 0;
`;

export const Post = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 15px 0;
  padding: 5px 10px;
  box-shadow: 0 .1px 1px 0px rgba(0, 0, 0, 0.1) , 0 .3px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: ${collorPallete.white};
  .name-div {
    display: flex;
    align-items: center;
    height: 35px;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    font-size: 18px;
  }
  .post-body {
    display: flex;
    flex-direction: column;
    width: 92%;
    #comments {
      position: absolute;
      bottom: -7px;
      right: 9px;
      font-size: 13.5px;
      font-weight: 300;
    }
    button {
      appearance: none;
      border: none;
      background: none;
      cursor: pointer;
      text-align: left;
      font-size: 15.5px;
    }
    #favorite {
      position: absolute;
      top: 5px;
      right: 0px;
      transition: .1s;
      color: ${collorPallete.darkestWhite};
      i {
        font-size: 30px;
        text-shadow: 0 0 2px rgba(0, 0, 0, .2), 0 0 2px rgba(0, 0, 0, .2);
        -moz-text-shadow: 0 0 2px rgba(0, 0, 0, .2), 0 0 2px rgba(0, 0, 0, .2);
        -webkit-text-shadow: 0 0 2px rgba(0, 0, 0, .2), 0 0 2px rgba(0, 0, 0, .2);
      }
      .on {
        color: ${collorPallete.favorites};
      }
      .off {
        color: ${collorPallete.darkestWhite};
      }
    }
  }
`;
