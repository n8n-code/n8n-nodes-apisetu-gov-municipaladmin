import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovMunicipaladminApi implements ICredentialType {
        name = 'N8nDevApisetuGovMunicipaladminApi';

        displayName = 'Apisetu Gov Municipaladmin API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovMunicipaladmin/apisetu-gov-municipaladmin.svg', dark: 'file:../nodes/ApisetuGovMunicipaladmin/apisetu-gov-municipaladmin.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/municipaladmin/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/municipaladmin/v3',
                        description: 'The base URL of your Apisetu Gov Municipaladmin API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
