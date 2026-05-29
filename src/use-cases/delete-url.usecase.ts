import api from "@/api/api";
import { AxiosResponse } from "axios";

export class DeleteUrlUsecase {
  private client = api;

  async handle(id: number): Promise<void> {
    const { data } = await this.client.delete<unknown, AxiosResponse>(
      `/urls/${id}`,
    );
    return data;
  }
}
