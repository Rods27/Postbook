import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const Container = styled.div`
  width: 65%;
  max-width: 1000px;
  margin: 60px 0 20px 0;
`;

export const Post = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 15px 0;
  padding: 5px 15px;
  box-shadow: 0 .1px 1px 0px rgba(0, 0, 0, 0.1) , 0 .3px 2px 0px rgba(0, 0, 0, 0.1);
  .name-div {
    display: flex;
    align-items: center;
    height: 65px;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
    h5 { font-size: 18px; }
    button {
      appearance: none;
      border: none;
      background: none;
      cursor: pointer;
      text-align: left;
    }
    #favorite {
      position: absolute;
      top: 12px;
      right: 5px;
      transition: .1s;
      color: ${collorPallete.darkestWhite};
      i {
        font-size: 40px;
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
  .comments {
    align-self: center;
    width: 95%;
    #comment {
      background-color: ${collorPallete.darkestWhite};
      padding: 3px 15px;
      margin: 10px 0;
      border-radius: 8px;
    }
  }
`;
