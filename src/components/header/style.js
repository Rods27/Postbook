import styled from 'styled-components';
import collorPallete from '../../utils/collor-pallete'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: ${collorPallete.orange};
  color: ${collorPallete.darkWhite};
  button {
    appearance: none;
    border: none;
    background: none;
    transition: .1s;
    color: ${collorPallete.darkWhite};
    &:hover {
      color: ${collorPallete.favorites};
      }
    i {
      font-size: 26px;
    }
  }
`;
