import React from 'react';
import styled from 'styled-components/native';
import {withNavigation} from 'react-navigation';

const ModalHelloScreen = ({navigation}) => (
  <StyledContainer>
    <StyledText>MODAL</StyledText>
    <StyledButton onPress={() => navigation.goBack()}>
      <StyledText>Go back !</StyledText>
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
  background-color: #ccc;
`;

const StyledButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  background-color: #07a;
  border-radius: 8px;
`;

export default withNavigation(ModalHelloScreen);
