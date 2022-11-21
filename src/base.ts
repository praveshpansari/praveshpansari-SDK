import fetch from "isomorphic-unfetch";

type Config = {
  permanentToken?: string;
  baseUrl?: string;
};

export abstract class Base {
  private permanentToken?: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.permanentToken = config.permanentToken;
    this.baseUrl = config.baseUrl || "https://the-one-api.dev/v2";
  }

  protected async request<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(url, { headers });
    if (response.ok) {
      return response.json() as T;
    }
    throw new Error(response.statusText);
  }

  protected async requestAuth<T>(endpoint: string, token: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    if (!this.permanentToken && !token) {
      throw new Error("Please provide authorization token.");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.permanentToken || token}`,
    };

    const response = await fetch(url, { headers });
    if (response.ok) {
      return response.json() as T;
    }
    throw new Error(response.statusText);
  }
}
