import styled from "styled-components/native";

export const Container = styled.View`
  gap: 9px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity<{ backgroud: string }>`
  width: 100%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroud};
  padding: 8px;
`;

export const Text = styled.Text<{ color?: string }>`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.MD}px`};
  color: ${(props) => (props.color ? props.color : props.theme.COLORS.BLACK)};
`;
