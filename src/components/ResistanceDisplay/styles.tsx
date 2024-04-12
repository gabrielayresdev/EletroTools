import styled from "styled-components/native";

export const Container = styled.View`
  padding: 2px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.WHITE_200};
  border-radius: 8px;
  gap: 6px;
`;

export const Icon = styled.Image`
  width: 24px;
  aspect-ratio: 1/1;
`;

export const ResistanceValue = styled.Text`
  font-size: ${({ theme }) => `${theme.FONT_SIZE.LG}px`};
  min-width: 69px;
  text-align: right;
`;
