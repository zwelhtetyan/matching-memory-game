import styled from 'styled-components';
import AnimateCard from '../ui/AnimateCard';

export const Wrapper = styled.div`
    height: calc(100vh - 172px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WelcomeCard = styled(AnimateCard)`
    margin-top: -11rem;
    height: 180px;
`;
