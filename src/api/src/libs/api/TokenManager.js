// const axios = require('axios');
import {
  accessExpiredAt,
  accessToken,
  refreshExpiredAt,
  refreshToken,
} from '../';

class TokenManager {
  constructor() {
    this._accessToken = null;
    this._refreshToken = null;
    this._accessExpiredAt = null;
    this._refreshExpiredAt = null;
    this.initToken();
  }

  validateToken(expiredString, token) {
    if (!expiredString || !token) return false;
    return this.calculateMinutes(expiredString, 1) >= new Date();
  }

  calculateMinutes(currentDate, addMinute) {
    const expiredAt = currentDate ? new Date(currentDate) : new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);
    return expiredAt;
  }

  initToken() {
    if (typeof window === 'undefined') return;
    this._accessToken = localStorage.getItem(accessToken);
    this._refreshToken = localStorage.getItem(refreshToken);
    this._accessExpiredAt = localStorage.getItem(accessExpiredAt);
    this._refreshExpiredAt = localStorage.getItem(refreshExpiredAt);
  }

  setTokens(tokens) {
    this._accessToken = tokens.accessToken;
    this._refreshToken = tokens.refreshToken;
    this._accessExpiredAt = tokens.accessExpiredAt;
    this._refreshExpiredAt = tokens.refreshExpiredAt;

    localStorage.setItem(accessToken, tokens.accessToken);
    localStorage.setItem(refreshToken, tokens.refreshToken);
    localStorage.setItem(accessExpiredAt, tokens.accessExpiredAt);
    localStorage.setItem(refreshExpiredAt, tokens.refreshExpiredAt);
  }

  removeTokens() {
    if (typeof window === 'undefined') return;
    this._accessToken = null;
    this._refreshToken = null;
    this._accessExpiredAt = null;
    this._refreshExpiredAt = null;

    localStorage.removeItem(accessToken);
    localStorage.removeItem(refreshToken);
    localStorage.removeItem(accessExpiredAt);
    localStorage.removeItem(refreshExpiredAt);
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get accessExpired() {
    return this._accessExpiredAt;
  }

  get refreshExpired() {
    return this._refreshExpiredAt;
  }

  // async reissueToken() {
  //   try {
  //     const { data } = await axios.patch(
  //       `${process.env.REACT_PUBLIC_API_URL}/auth/refresh`,
  //       {},
  //       {
  //         withCredentials: true,
  //         headers: {
  //           RefreshToken: `Bearer ${this.refreshToken}`,
  //         },
  //       }
  //     );
  //     this.setTokens(data);
  //     return true;
  //   } catch (e) {
  //     this.removeTokens();
  //     return false;
  //   }
  // }
}

export default TokenManager;
