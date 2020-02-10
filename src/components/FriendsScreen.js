import React from 'react';
import styled from 'styled-components/native';
import {withNavigation} from 'react-navigation';

const FriendsScreen = () => (
  <StyledContainer>
    <StyledText testID={'friends'}>Friends</StyledText>
  </StyledContainer>
);

const StyledText = styled.Text`
  font-size: 20px;
  color: black;
`;

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default withNavigation(FriendsScreen);
