import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Kecer",
					"value": "Kecer",
					"action": "Khatha Extract / Certificate",
					"description": "API to verify Khatha Extract / Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kecer/certificate"
						}
					}
				},
				{
					"name": "Tapcn",
					"value": "Tapcn",
					"action": "New Tap Connection",
					"description": "API to verify New Tap Connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tapcn/certificate"
						}
					}
				},
				{
					"name": "Tdlcs",
					"value": "Tdlcs",
					"action": "Trade License/ Certificate",
					"description": "API to verify Trade License/ Certificate.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tdlcs/certificate"
						}
					}
				},
				{
					"name": "Ugdcn",
					"value": "Ugdcn",
					"action": "Jalanidhi - New UGD Connection",
					"description": "API to verify Jalanidhi - New UGD Connection.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ugdcn/certificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /kecer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DocumentNumber\": \"123113\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Kecer"
					]
				}
			}
		},
		{
			"displayName": "POST /tapcn/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DocumentNumber\": \"12345678\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tapcn"
					]
				}
			}
		},
		{
			"displayName": "POST /tdlcs/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DocumentNumber\": \"SRP-JN-1-2015-16-NT\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Tdlcs"
					]
				}
			}
		},
		{
			"displayName": "POST /ugdcn/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"DocumentNumber\": \"12345678\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Ugdcn"
					]
				}
			}
		},
];
