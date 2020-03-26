import styled from 'styled-components';

const NavigationView = styled.View
`
display: flex;
align-items: center;
height: 10%;
backgroundColor: #fbf7f5;
flexDirection: row;
`;

const RootView = styled.View
`
flex: 1;
backgroundColor: #fbf7f5;
`;

const LockView = styled.View
`
flex: 1;
justify-content: center;
backgroundColor: #fbf7f5;
align-items: center;
`;

const BigButtonRowView = styled.View
`
flexDirection: row;
`

export { NavigationView, RootView, LockView, BigButtonRowView };
