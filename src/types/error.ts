export interface Response {
    data: Data;
    status: number;
    statusText: string;
    headers: ResponseHeaders;
    config: Config;
    request: Request;
}

export interface Config {
    transitional: Transitional;
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Env;
    headers: ConfigHeaders;
    method: string;
    url: string;
    data: string;
}

export interface Env {
    FormData: null;
}

export interface ConfigHeaders {
    Accept: string;
    "Content-Type": string;
}

export interface Transitional {
    silentJSONParsing: boolean;
    forcedJSONParsing: boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    message: string;
}

export interface ResponseHeaders {
    "content-length": string;
    "content-type": string;
}

export interface Request {
}