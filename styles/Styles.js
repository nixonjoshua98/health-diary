import styled from 'styled-components';

const NavigationView = styled.View
`
display: flex;
align-items: center;
height: 10%;
backgroundColor: ${props => props.background ? props.background : "white"}
flexDirection: row;
`;

export { NavigationView };