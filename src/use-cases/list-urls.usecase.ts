import api from "@/api/api";
import type { Url } from "@/typings/models/url.model";
import type { AxiosResponse } from "axios";

export class ListUrlUsecase {
  private client = api;

  async handle(): Promise<Url[]> {
    const { data } = await this.client.get<unknown, AxiosResponse<Url[]>>(
      "/urls",
    );
    return data;
  }
}
