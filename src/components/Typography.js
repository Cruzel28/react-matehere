import styled from 'styled-components'


export const Text = styled.span`
color : #fff;
margin : .5rem;

`
export const Title = styled(Text)`
font-size : 3rem;
font-weight: 900;


`
export  const Subtitle = styled(Text)`
font-size : 1rem;
padding-bottom: 1rem;
`

export const SemiSubtitle = styled(Text)`
  font-size: 1rem;

  a:hover {
      color: #FFC125;
      cursor: pointer;
  }
`
