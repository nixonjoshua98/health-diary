import styled from 'styled-components';

const NavigationView = styled.View
`
position: absolute;
bottom: 0;
display: flex;
align-items: center;
height: 10%;
backgroundColor: #fbf7f5;
flexDirection: row;
`;

const RootView = styled.View
`
margin-bottom: 20%;
height: 100%;
backgroundColor: #fbf7f5;
`;

const LockView = styled.View
`
flex: 1;
justify-content: center;
backgroundColor: #fbf7f5;
align-items: center;
`;

const DiaryEntryView = styled.View
`
justify-content: center;
backgroundColor: #fbf7f5;
align-items: center;
`;

const ColumnRow = styled.View
`
flexDirection: row;
`

const ColumnFlex = styled.View
`
flexDirection: column;
`

export { NavigationView, RootView, LockView, ColumnRow, ColumnFlex, DiaryEntryView };
