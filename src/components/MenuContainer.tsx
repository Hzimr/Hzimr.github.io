import { styled } from "../styles"

const Container = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: 1000,
  height: 700,
  backgroundColor: '$fundowhite',
  color: '$gray900',
  gap: 5,
  padding: 16,
  border: 3,
  borderStyle: 'solid',
  borderColor: '#ccc',
})

interface MenuContainerProps {
  project: string,
}

export function MenuContainer(props: MenuContainerProps){
  
  return (
    <Container>
      {props.project}
      <iframe width="600" height="400" src="https://www.youtube.com/embed/z6e4O7LIGlA" title="Apresetanção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Container>
  )
}