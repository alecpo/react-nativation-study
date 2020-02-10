import React from 'react';
import styled from 'styled-components/native';
import {withNavigation} from 'react-navigation';

const HomeScreen = ({navigation}) => (
  <StyledContainer>
    <StyledText>Home</StyledText>
    <StyledButton
      testID={'gotofriends'}
      color="#f80"
      onPress={() => navigation.navigate('Friends')}>
      <StyledText>Go to Friends</StyledText>
    </StyledButton>
    <StyledButton
      color="#07a"
      onPress={() => navigation.navigate('HelloModal')}>
      <StyledText>Open Hello Modal !</StyledText>
    </StyledButton>
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

const StyledButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  background-color: ${({color}) => color};
`;

export default withNavigation(HomeScreen);
