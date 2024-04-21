import {
  toTypedRxJsonSchema,
  type ExtractDocumentTypeFromTypedRxJsonSchema,
  type RxJsonSchema,
} from "rxdb";

export const tabSchemaLiteral = {
  title: "Opened tabs that will be shown on dashboard",
  primaryKey: {
    key: "tabId",
    fields: ["id"],
    separator: "|",
  },
  type: "object",
  version: 5,
  properties: {
    tabId: {
      // ---- RxDocumentId
      type: "string",
      maxLength: 100,
    },
    id: {
      // ---- MongoDocumentId
      type: "string",
      maxLength: 100,
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    isDeleted: {
      type: "boolean",
    },
    activeSync: {
      type: "boolean",
    },
    source: {
      type: "string",
    },
    type: {
      type: "string",
    },
    property: {
      type: "object",
      properties: {
        request: {
          type: "object",
          properties: {
            method: {
              type: "string",
            },
            body: {
              type: "object",
              properties: {
                raw: {
                  type: "string",
                },
                urlencoded: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      key: {
                        type: "string",
                      },
                      value: {
                        type: "string",
                      },
                      checked: {
                        type: "boolean",
                      },
                    },
                  },
                },
                formdata: {
                  type: "object",
                  properties: {
                    text: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          key: {
                            type: "string",
                          },
                          value: {
                            type: "string",
                          },
                          checked: {
                            type: "boolean",
                          },
                        },
                      },
                    },
                    file: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          key: {
                            type: "string",
                          },
                          value: {
                            type: "string",
                          },
                          base: {
                            type: "string",
                          },
                          checked: {
                            type: "boolean",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            url: {
              type: "string",
            },
            headers: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                  },
                  value: {
                    type: "string",
                  },
                  checked: {
                    type: "boolean",
                  },
                },
              },
            },
            queryParams: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                  },
                  value: {
                    type: "string",
                  },
                  checked: {
                    type: "boolean",
                  },
                },
              },
            },
            autoGeneratedHeaders: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  key: {
                    type: "string",
                  },
                  value: {
                    type: "string",
                  },
                  checked: {
                    type: "boolean",
                  },
                },
              },
            },
            response: {
              type: "object",
              properties: {
                headers: {
                  type: "string",
                },
                status: {
                  type: "string",
                },
                body: {
                  type: "string",
                },
                size: {
                  type: "number",
                },
                time: {
                  type: "number",
                },
              },
            },
            state: {
              type: "object",
              properties: {
                requestBodyLanguage: {
                  type: "string",
                },
                requestBodyNavigation: {
                  type: "string",
                },
                requestAuthNavigation: {
                  type: "string",
                },
                requestNavigation: {
                  type: "string",
                },
                responseNavigation: {
                  type: "string",
                },
                responseBodyLanguage: {
                  type: "string",
                },
                responseBodyFormatter: {
                  type: "string",
                },
                requestExtensionNavigation: {
                  type: "string",
                },
                requestSplitterDirection: {
                  type: "string",
                },
                requestLeftSplitterWidthPercentage: {
                  type: "number",
                },
                requestRightSplitterWidthPercentage: {
                  type: "number",
                },
                isExposeEditDescription: {
                  type: "boolean",
                },
                isSendRequestInProgress: {
                  type: "boolean",
                  default: false,
                },
                isSaveDescriptionInProgress: {
                  type: "boolean",
                  default: false,
                },
                isSaveRequestInProgress: {
                  type: "boolean",
                },
              },
            },
            auth: {
              type: "object",
              properties: {
                bearerToken: {
                  type: "string",
                },
                basicAuth: {
                  type: "object",
                  properties: {
                    username: {
                      type: "string",
                    },
                    password: {
                      type: "string",
                    },
                  },
                },
                apiKey: {
                  type: "object",
                  properties: {
                    authKey: {
                      type: "string",
                    },
                    authValue: {
                      type: "string",
                    },
                    addTo: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
        folder: {
          type: "string",
        },
        collection: {
          type: "string",
        },
        workspace: {
          type: "string",
        },
      },
    },
    isActive: {
      type: "boolean",
    },
    isSaved: {
      type: "boolean",
    },
    path: {
      type: "object",
      properties: {
        workspaceId: {
          type: "string",
        },
        collectionId: {
          type: "string",
        },
        folderId: {
          type: "string",
        },
      },
    },
    timestamp: {
      type: "string",
      maxLength: 100,
    },
    index: {
      type: "number",
    },
  },
  required: ["id", "name"],
  indexes: ["timestamp"],
} as const;

const schemaTyped = toTypedRxJsonSchema(tabSchemaLiteral);

export type TabDocType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>;

export const tabSchema: RxJsonSchema<TabDocType> = tabSchemaLiteral;
