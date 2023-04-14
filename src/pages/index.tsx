import { styled } from "../styles"
import ferramentas from "../../public/ferramentas.png";

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, $rocketseatlow 0%, $rocketseatdark 100%)',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
})

const ImageContainer = styled('img', {
  borderRadius: 5,
  marginBottom: 20,
})

const Button = styled('button', {
  backgroundColor: '$ignitelight',
  borderRadius: 4,
  border: 0,
  padding: '4p 8px',
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
    <Container>
      <ImageContainer src={ferramentas.src} width={380} height={400} alt="" />
      <Button>
        <span>Aguarde... </span>
        Em construção!
      </Button>
    </Container>
    
  )
}
