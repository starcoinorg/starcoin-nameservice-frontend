import { User } from "../../data/user";
import StarMaskOnboarding from '@starcoin/starmask-onboarding'
import { providers } from "@starcoin/starcoin";


const currentUrl = new URL(window.location.href)
const forwarderOrigin = currentUrl.hostname === 'localhost'
    ? 'http://localhost:9032'
    : undefined

const { isStarMaskInstalled } = StarMaskOnboarding


export class StarMaskAuthProvider {
    isAuthenticated: boolean = false;
    async signIn(callback: (user: User) => void): Promise<void> {
        try {
            if (window.starcoin) {
                let provider = new providers.Web3Provider(window.starcoin, "any")
                const blockNumber = await provider.getBlockNumber()
                console.log(blockNumber)
                let onboarding = new StarMaskOnboarding({ forwarderOrigin })
                let accounts = await window.starcoin.request({
                    method: 'stc_requestAccounts',
                })
                if (accounts.length > 0) {
                    this.isAuthenticated = true;
                    console.log(accounts[0])
                    callback(accounts[0]);
                } else {
                    console.log("No accounts found")
                    return null
                }
            } 
        } catch (error) {
            console.log(error)
        }
    }
    signOut(callback: () => void): void {
        this.isAuthenticated = false;
        setTimeout(callback, 1000);
    }
}