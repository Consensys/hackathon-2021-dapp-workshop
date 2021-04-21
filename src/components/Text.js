import styled from 'styled-components';
import theme, { textSizes } from '../theme';

const getColor = (p) => {
  // @ts-ignore
  if (theme[p.color]) return theme[p.color];
  if (p.color) return p.color;
  return theme.black;
};
const getAlignment = (p) => {
  if (p.center) return 'center';
  if (p.right) return 'right';
  if (p.left) return 'left';
  return 'inherit';
};
const getDisplay = (p) => {
  if (p.display) return p.display;
  if (p.block) return 'block';
  if (p.inline) return 'inline';
  return 'initial';
};
const getWeight = (p) => {
  if (p.bold) return 700;
  if (p.fontWeight) return p.fontWeight;
  return 'inherit';
};
const getLineHeight = (p) => {
  if (p.lineHeight) return p.lineHeight;
  return 'inherit';
};
const getSize = (p) => {
  if (p.t0) return textSizes.t0;
  if (p.t1) return textSizes.t1;
  if (p.t2) return textSizes.t2;
  if (p.t3) return textSizes.t3;
  if (p.t4) return textSizes.t4;
  if (p.t5) return textSizes.t5;
  if (p.t6) return textSizes.t6;

  return 'inherit';
};
const getTransform = (p) => {
  if (p.capitalize) return 'capitalize';
  if (p.uppercase) return 'uppercase';
  return '';
};

const Text = styled.span`
  font-family: ${(p) => p.fontFamily || 'Noto Sans'};
  text-decoration: ${(p) => (p.underline ? 'underline' : '')};
  text-transform: ${getTransform};
  cursor: ${(p) => (p.pointer ? 'pointer' : '')};
  text-align: ${getAlignment};
  font-style: ${(p) => (p.italic ? 'italic' : '')};
  font-size: ${getSize};
  font-weight: ${getWeight};
  display: ${getDisplay};
  color: ${getColor};
  overflow: ${(p) => (p.ellipsis ? 'hidden' : 'inherit')};
  text-overflow: ${(p) => (p.ellipsis ? 'ellipsis' : 'inherit')};
  white-space: ${(p) => (p.ellipsis ? 'nowrap' : '')};
  line-height: ${getLineHeight};
  opacity: ${(p) => p.opacity || 1};
`;

export default Text;
