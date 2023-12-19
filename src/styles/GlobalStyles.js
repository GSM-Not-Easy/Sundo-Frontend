import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBlack from './fonts/woff2/Pretendard-Black.woff2';
import PretendardExtraBold from './fonts/woff2/Pretendard-ExtraBold.woff2';
import PretendardBold from './fonts/woff2/Pretendard-Bold.woff2';
import PretendardSemiBold from './fonts/woff2/Pretendard-SemiBold.woff2';
import PretendardMedium from './fonts/woff2/Pretendard-Medium.woff2';
import PretendardRegular from './fonts/woff2/Pretendard-Regular.woff2';
import PretendardLight from './fonts/woff2/Pretendard-Light.woff2';
import PretendardExtraLight from './fonts/woff2/Pretendard-ExtraLight.woff2';
import PretendardThin from './fonts/woff2/Pretendard-Thin.woff2';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBlack}) format('woff2');
    font-weight: 900;
    font-display: swap;
  }

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardExtraBold}) format('woff2');
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardBold}) format('woff2');
  font-weight: 700;
  font-display: swap;

}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardSemiBold}) format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardMedium}) format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardRegular}) format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardLight}) format('woff2');
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardExtraLight}) format('woff2');
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: 'Pretendard';
  src: url(${PretendardThin}) format('woff2');
  font-weight: 100;
  font-display: swap;
}
    body{
      font-family: 'Pretendard', sans-serif;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
