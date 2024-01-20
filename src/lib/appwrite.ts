import { APPWRITE_PROJECT_ID } from '$env/static/private';
import { Account, Client } from 'appwrite';
export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID } from 'appwrite';
