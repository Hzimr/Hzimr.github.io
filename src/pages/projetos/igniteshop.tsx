import { styled } from "../../styles"
import { MenuContainer } from "@/src/components/MenuContainer"

const IgniteContainer = styled('div', {
  width: '100%',
  display: 'flex',
})

const Video = styled('div', {
  width: 720,
  height: 400,
})

export default function Igniteshop() {
  return (
    <IgniteContainer>
          <MenuContainer project="Ignite"/>
    </IgniteContainer>


    
    
  )
}