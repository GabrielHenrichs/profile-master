import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #5484f8;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 195px;
  font-weight: 300;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#5484f8')};
  }
`
