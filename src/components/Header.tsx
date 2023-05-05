import { styled } from "../styles"
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from 'phosphor-react'

const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: 227,
  backgroundColor: '$presentation',
  marginBottom: 16,
})

const PresentationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 227,
  width: 560,
  margin: '1rem',
})

const LinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 180,
  gap: '0.5rem',
  fontSize: '1rem',
  margin: '1rem',

})

const ImageContainer = styled('img', {
  borderRadius: 5,
  width: 227,
  height: 227,
  marginRight: 5,
})

const User = styled('h1', {
  fontWeight: "bold",
  color: '$white',
})

const Graduation = styled('h2',{
  fontWeight: "bold",
  color: '$white',
  marginTop: '0.5rem',
})

const Email = styled('span', {
  color: '$white',
  marginTop: '0.5rem',
  gap: '0.2rem',
})

const Item = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$white',
  fontWeight: '700',
  gap: '0.8rem',
  fontSize: '1.25rem',
  textDecoration: 'none',

  '&:hover':{
    filter: 'brightness(0.8)',
    cursor: 'pointer',
  },
})

interface HeaderProps {
  user: string
}

export function Header(props: HeaderProps){

  return (
    <HeaderContainer>
      <ImageContainer src="https://avatars.githubusercontent.com/u/51082717?v=4" />
      <PresentationContainer>
        <User>{props.user}</User>
        <Graduation>Computer engineering student</Graduation>
        <Email><EnvelopeSimple size={16}/> hitalorodriguesdev@gmail.com</Email>
      </PresentationContainer>
      <LinksContainer >
        <Item href="https://www.linkedin.com/in/hitalorodrigues/" ><LinkedinLogo/>LinkedIn</Item>
        <Item href="https://github.com/Hzimr"><GithubLogo/>Github</Item>
      </LinksContainer>
      
    </HeaderContainer>
  )
}