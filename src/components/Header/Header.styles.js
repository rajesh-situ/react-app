import styled from 'styled-components';

export const Container = styled.div`
    border-top: 5px solid var(--main-header-color);
    box-shadow: 0 0 15px 0 var(--main-shadow-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    height: 65px;
    padding: 0 40px;
`;

export const Title = styled.h1`
    font-size: var(--font-size-medium);
`;