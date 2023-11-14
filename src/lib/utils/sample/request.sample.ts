import { AuthSection, AuthType } from "../enums/authorization.enum";
import { ItemType } from "../enums/item-type.enum";
import {
  RequestDataset,
  RequestDefault,
  RequestSection,
  RequestDataType,
} from "../enums/request.enum";

const createSampleRequest = (id: string) => {
  return {
    id,
    name: RequestDefault.NAME,
    type: ItemType.REQUEST,
    request: {
      method: RequestDefault.METHOD,
      body: {
        raw: "",
        urlencoded: [
          {
            key: "",
            value: "",
            checked: false,
          },
        ],
        formdata: {
          text: [
            {
              key: "",
              value: "",
              checked: false,
            },
          ],
          file: [
            {
              key: "",
              value: "",
              checked: false,
              base: "",
            },
          ],
        },
      },
      url: "",
      headers: [
        {
          key: "",
          value: "",
          checked: false,
        },
      ],
      queryParams: [
        {
          key: "",
          value: "",
          checked: false,
        },
      ],
      autoGeneratedHeaders: [
        {
          key: "Accept",
          value: "*/*",
          checked: true,
        },
        {
          key: "Connection",
          value: "keep-alive",
          checked: true,
        },
      ],
      state: {
        raw: RequestDataType.TEXT,
        dataset: RequestDataset.NONE,
        auth: AuthType.NO_AUTH,
        section: RequestSection.PARAMETERS,
      },
      auth: {
        bearerToken: "",
        basicAuth: {
          username: "",
          password: "",
        },
        apiKey: {
          authKey: "",
          authValue: "",
          addTo: AuthSection.HEADER,
        },
      },
      response: {
        headers: "",
        status: "",
        body: "",
        time: 0,
        size: 0,
      },
    },
    save: false,
    requestInProgress: false,
    path: null,
  };
};
export { createSampleRequest };
