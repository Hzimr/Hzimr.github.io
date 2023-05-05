import { styled } from "../styles"
import { Header } from "../components/Header";
import { MenuContainer } from "../components/MenuContainer";
import { House, FolderStar, Medal, ProjectorScreen, IdentificationBadge } from 'phosphor-react'

const Layoutpag = styled('div', {
  margin:'auto',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white', /*'linear-gradient(180deg, $discorverdark 0%, $green300 100%)'*/
  width: '100%',
  boxSizing: 'border-box',
})

const Layout = styled('div', {
  margin:'auto',
  marginTop: 5,
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  backgroundColor: '$white', /*'linear-gradient(180deg, $discorverdark 0%, $green300 100%)'*/
  width: '100%',
  boxSizing: 'border-box',
})

const Sidebar = styled('aside', {
  padding: '1.5rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

})

const Navegation = styled('nav',{
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

const Item = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$sidebar',
  fontWeight: '700',
  gap: '1.25rem',
  fontSize: '1.25rem',
  textDecoration: 'none',

  '&.active': {
    color: '$successbase',
  },

  '&:hover':{
    filter: 'brightness(0.8)',
    cursor: 'pointer',
    color: '$warningbase',
  },
})

const Logo = styled('svg', {
  width: '2rem',
  height: '2rem',
})

const Button = styled('button', {
  marginTop: 10,
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  width: 230,
  height: 50,

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  },

})

export default function Home() {
  return (
    <Layoutpag>
      <Header user="HÍTALO RODRIGUES DE OLIVEIRA" />
      
      <Layout>

        <Sidebar>
          <Navegation>
            <Item className="active"><House weight="fill" width={"2rem"} height={"2rem"}/>Home</Item>
            <Item><IdentificationBadge weight="fill" width={"2rem"} height={"2rem"}/>Sobre mim</Item>
            <Item><Medal weight="fill" width={"2rem"} height={"2rem"}/>Certificados</Item>
            <Item><FolderStar weight="fill" width={"2rem"} height={"2rem"}/>Projetos</Item>
            <Item><ProjectorScreen weight="fill" width={"2rem"} height={"2rem"}/>Repositório</Item>

            <Button>
              <span>Aguarde... </span>
              Em construção!
            </Button>
          </Navegation>
        </Sidebar>
        <MenuContainer project="Em Construção, Aguarde!" />
      </Layout>
    </Layoutpag>
    
  )
}
