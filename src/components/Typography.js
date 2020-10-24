import styled from 'styled-components'


export const Text = styled.span`
color : #fff;
margin : .5rem;

`
export const Title = styled(Text)`
font-size : 3rem;
font-weight: 900;
margin-bottom: 2.5rem;


`
export  const Subtitle = styled(Text)`
font-size : 1.5rem;
padding-bottom: 1rem;
`

export const SemiSubtitle = styled(Text)`
  font-size: 1rem;
  padding-top: .5rem;

  a:hover {
      color: #FFC125;
      cursor: pointer;
  }
`

export const FooterText = styled(Text)`
  font-size: .5rem; 

`
export const TitlePost = styled(Text)`
  font-size: 2.5rem;
  font-weight: 900;
`
export const SubtitlePost = styled(Text)`
  font-size: 1rem;
  
`
export const RegisterLoginTilte = styled(Text)`
  font-size: 1.4rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 2rem;
  margin-left: 8.9rem;
  position: absolute;
  
`
export const RegisterLoginSubtitle = styled(Text)`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`
export const Register = styled(Text)`
width: 6rem;
margin-top: 26rem;
margin-left: 8.5rem;
  font-size: 1.4rem;
  padding-top: .5rem;
  color: #fff0cb;
text-decoration: underline;


  &:hover{
  color: #f96c01;
    cursor: pointer;
 }
`
export const RegisterTiltle = styled(Text)`
  font-size: 1.4rem;
  font-weight: 800;
  color: #000;
  margin-top: 7.8rem;
  margin-left: 8.9rem;
  
  
`