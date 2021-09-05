import { css } from 'styled-components';
import {mobile} from '../Breakpoint';

const font = {
  noto:'Noto Serif',
  allura:'Allura',
  amatic:'Amatic SC'
}

const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

const _noto = css`
  font-family: ${font.noto}, serif;
  word-break: break-word;
`

const _allura = css`
  font-family: ${font.allura}, cursive;
  word-break: break-word;
`

const _amatic = css`
  font-family: ${font.allura}, cursive;
  word-break: break-word;
`

export const _notoh1 = css`
  ${_noto};
  font-size: 11px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`

export const _allurah1 = css`
  ${_allura};
  font-size: 11px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`

export const _amatich1 = css`
  ${_amatic};
  font-size: 11px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`