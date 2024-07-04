import { ID, Account, Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.anthony.aora',
    projectId: '6685ddb2000be9309d60',
    databaseId: '6685def5000c7de9a666',
    userCollectionId: '6685df1700001dd64a5c',
    videoCollectionId: '6685df330025d0edd1f0',
    storageId: '6685e02700284382df46'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUSer = await
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error)
    }
}