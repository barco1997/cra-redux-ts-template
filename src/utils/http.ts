import axios from "axios";
import ls from "./ls";
import { store } from "../app/store";
import { startLoader, stopLoader } from "../app/state/appSlice";

export class HttpService {
  static source = axios.CancelToken.source();
  static token = ls.get("token");

  static getToken() {
    return ls.get("token");
  }

  static setToken(token: string) {
    ls.set("token", token);
    HttpService.token = token;
  }

  static removeToken() {
    ls.remove("token");
    HttpService.token = null;
  }

  static get(url: string, options?: any) {
    return HttpService.makeRequest({
      url,
      method: "get",
      ...options,
    });
  }

  static post(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: "post",
      data,
      ...options,
    });
  }

  static put(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: "put",
      data,
      ...options,
    });
  }
  static patch(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: "patch",
      data,
      ...options,
    });
  }

  static delete(url: string, data: any, options?: any) {
    return HttpService.makeRequest({
      url,
      method: "delete",
      data,
      ...options,
    });
  }

  static makeRequest(config: any) {
    //let newConfig = config;
    let location: any;

    if (config.location) {
      location = config.location;
      delete config.location;
      store.dispatch(startLoader(location));
      //store.dispatch({ type: SpinnerAction.START, location });
    }

    const cancelToken = this.source.token;
    const token = HttpService.getToken();

    if (token) {
      config.headers = Object.assign(config.headers || {}, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "x-api-key": "n02wIwHelV3Xd9H9YSSwL6kuoJ0ZQnFy7Y3yuh69",
      });
    }

    return axios
      .request({ ...config, cancelToken })
      .then((res) => {
        /*if (res.headers.Identity) {
          HttpService.setToken(res.headers.Identity);
        }*/
        store.dispatch(stopLoader(location));
        return res;
      })
      .catch((e) => {
        /* store.dispatch({ type: NOTIFICATIONS.ADD, notification }); */
        store.dispatch(stopLoader(location));
        console.log("error", e);
        throw e;
      });
  }
}
