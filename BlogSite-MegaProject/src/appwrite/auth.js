import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new this.client();
    account;
    
    constructor(){
        this.client
        .setEndoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new this.account(this.client);
    }

    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);

            if
            (userAccount){
                //call another method
                return this.login({email,password});
            }else{
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
         throw error   
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
           return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new authService();

export default AuthService;
