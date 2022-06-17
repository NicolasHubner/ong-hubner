import { 
  AnchorLinks,
  BackDropImage, 
  Contact, 
  ContactContainer, 
  ImageCats, 
  ImagesContent, 
  MainContent, 
  TextContent, 
  TitleContent 
} from "./style";
import digo from '../../images/digo.jpeg'
import lucca from '../../images/lucca.jpeg'



export default function LandingPage() {
  return (
    <MainContent>
      <TitleContent>ONG Hubner</TitleContent>
      <BackDropImage />
      <TextContent>
          Olá, tudo bem? 
          <br/>
          <br/>
          Nós somos a ONG HUBNER, durante a pandemia, nossa família, teve a iniciativa de cuidar, abrigar e alimentar gatos com intuito de arrumar um lar definitivo para esses seres maravilhosos. 
          <br/>
          <br/>
          Devido o aumento signficato desses animais que estamos encontrando, decidimos criar esse site para contar com a colaboração suas e achar uma casa para eles.
          <br/>
          <br/>
          <ImagesContent>
          <ImageCats src={digo} alt="digo" />
          <ImageCats src={lucca} alt="lucca" />
          </ImagesContent>
          <br/>
          Contatos
          <ContactContainer>
          <Contact>
          <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/undefined/external-camera-instagram-flatart-icons-outline-flatarticons.png" alt="Instagram" width="30px"/>
            <AnchorLinks href="https://www.instagram.com/onghubner/" target="_blank">Instagram</AnchorLinks>
          </Contact>
          <Contact>
          <img src="https://img.icons8.com/material-outlined/24/undefined/whatsapp--v1.png" alt="WhatsApp" width="30px"/>
          <AnchorLinks href="https://wa.me/5531988882969?text=Oi%2C+tudo+bem%3F+Vim+a+respeito+da+ONG+Hubner..." target="_blank">WhatsApp</AnchorLinks>
          </Contact>
          </ContactContainer>
      </TextContent>

    </MainContent>
  );
}
