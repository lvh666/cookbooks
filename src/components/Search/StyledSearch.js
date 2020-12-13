import styled from "styled-components";

const Container = styled.div `
  padding: 1.2rem 1rem;
  > div {
    display: flex;
    height: 1.5rem;
    border: solid 1px #ee742f;
    border-radius: .6rem;
    justify-content: center;
    align-items: center;
    background: #fff;
    
    svg {
      width: 1rem;
      height: 1rem;
      margin-right: .6rem;
      fill: #ee742f;
    }
    
    span {
      color: #666;
    }
  }
`
export {
    Container
}
