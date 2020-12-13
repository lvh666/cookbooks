import styled from 'styled-components'

const Container = styled.div `
  //background: #fff;
  header {
    width: 100%;
    height: 50px;
    background: #ee742f;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #fff;
  }
`

const SwiperWarp = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 53.3333%;
  position: relative;
  
  .slider.am-carousel {
    position: static !important; 
  }
`
const HotCateWrap = styled.div `
  >div {
    height: 2rem;
    padding-left: .1rem;
    color: #666;
    line-height: 2rem;
    background: #fff;
    border-bottom: solid 1px #ccc;
  }
`

export {
    Container,
    SwiperWarp,
    HotCateWrap
}
