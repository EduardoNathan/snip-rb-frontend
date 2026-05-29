import api from "@/api/api";
import type { Url } from "@/typings/models/url.model";
import type { AxiosResponse } from "axios";

export class CreateUrlUsecase {
  private client = api;

  async handle(original: string): Promise<Url> {
    const { data } = await this.client.post<unknown, AxiosResponse<Url>>(
      "urls",
      {
        url: { original },
      },
    );
    return data;
  }
}
