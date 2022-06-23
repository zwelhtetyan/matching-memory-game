import styled from 'styled-components';

export const DashboardWrapper = styled.div`
    height: calc(100vh - 203px);

    overflow: hidden;
    padding: 2.5rem 1rem 1rem 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const DashboardInner = styled.div`
    width: 450px;
    height: 400px;

    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 480px) {
        width: 380px;
        height: 330px;
    }

    @media screen and (max-width: 380px) {
        height: 310px;
    }

    @media screen and (max-width: 350px) {
        height: 260px;
    }
`;
