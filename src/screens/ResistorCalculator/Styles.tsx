import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE_300};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 44px 20px 32px;
`;

export const Img = styled.Image.attrs(() => ({
  resizeMode: "contain",
}))`
  max-width: 100%;
  width: 100%;
  margin: 7px 0 11px;
`;
