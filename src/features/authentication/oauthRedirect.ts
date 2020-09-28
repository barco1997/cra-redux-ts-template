import { AUTH_URL, CLIENT_ID } from "../../consts";

export const getPathFromUrl = (url: string) => {
  return url.split("?")[0];
};
export default function oauthRedirect() {
  window.location.href = `${AUTH_URL}/?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${getPathFromUrl(
    window.location.href
  )}`;
  return null;
}

export const oauthClear = () => {
  window.location.href = getPathFromUrl(window.location.href);
  return null;
};
