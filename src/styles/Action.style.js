import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0 0.5rem;
    }

    @media screen and (max-width: 355px) {
        flex-direction: column;
    }
`;

export const ActionWrapper = styled.div`
    display: flex;
    align-items: center;

    flex-wrap: wrap;
`;

export const Action = styled.div`
    width: ${({ width }) => width};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    border: 1px solid;
    border-left-color: rgba(25, 210, 106, 1);
    border-top-color: rgba(25, 210, 106, 1);
    border-right-color: rgba(122, 205, 250, 1);
    border-bottom-color: rgba(122, 205, 250, 1);
    padding: 2px 0;
    border-radius: 15px;

    @media screen and (max-width: 480px) {
        margin-right: 0.5rem;
    }
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;

    @media screen and (max-width: 480px) {
        width: 20px;
        height: 20px;
    }

    & + span {
        padding-left: 0.3rem;
        font-weight: bold;
    }
`;
