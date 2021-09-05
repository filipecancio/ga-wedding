import styled from 'styled-components';
import {_allurah1,_greath1,_notoh1} from '../../../Styles/Typography'


export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;
`;


export const HeroContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
`;


export const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Title = styled.p`
    ${_allurah1}
    display: flex;
    align-items: center;
    
`;


export const TitleE = styled.p`
    ${_greath1}
    margin: 0 20px;
`;

export const Subtitle = styled.p`
    ${_notoh1   }
    margin-top: 30px;
`;