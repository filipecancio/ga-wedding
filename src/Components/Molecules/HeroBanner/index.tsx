import React from 'react';
import {Container,HeroContainer,Title,TitleE,Subtitle,Background} from './styles';
import fundo from '../../../util/png/fundo.png'


const Index: React.FC = props => {
      return (
        <>
            <Container>
              <HeroContainer>
                <Title>Gleisson <TitleE>&</TitleE> Angelina</Title>
                <Subtitle>Esboço e Planejamento</Subtitle>
              </HeroContainer>
              <Background src={fundo}/>
            </Container>
        </>
      );
    }

export default Index;