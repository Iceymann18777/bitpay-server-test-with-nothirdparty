export const type='custom';
export const connectionLabel='{{server_url}}';
export const test={
url: '{{bundle.authData.server_url}}/api/v1/server/info',
method: 'GET',
params: {},
headers: {
Authorization: 'token {{bundle.authData.api_key}}'
},
body: {},
removeMissingValuesFrom: {},
// TODO validate the API key. Does it have all the Store ID permissions? Nothing more? Nothing less?
};
export const fields=[
{
computed: true,
key: 'server_url',
required: true,
label: 'BTCPay Server URL',
type: 'string',
helpText: 'Enter your BTCPay Server URL.',
default: 'https://mybtcpay.com',
},
{
computed: true,
key: 'api_key',
required: true,
label: 'API Key',
type: 'string',
helpText: 'You can create an API key by going to **My Account > API Keys** in BTCPay Server. \n'+
'[Learn more about selecting the right permissions.](https://github.com/btcpayserver/zapier#which-permissions-should-i-choose-for-my-api-key)',
}
];
export const customConfig={};
