import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Input = styled.input`
  font-family: verdana;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0px 0px 5px -2px gray;
  &:focus {
    outline: #2161c1;
    box-shadow:0px 0px 8px -1px #2161c1;
  }
`
