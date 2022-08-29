import { User } from "../../data/user";
import StarMaskOnboarding from "@starcoin/starmask-onboarding";
import { providers } from "@starcoin/starcoin";
import { ExternalProvider } from "@starcoin/starcoin/dist/src/providers";

const currentUrl = new URL(window.location.href);
const forwarderOrigin =
  currentUrl.hostname === "localhost" ? "http://localhost:9032" : undefined;

const { isStarMaskInstalled } = StarMaskOnboarding;

declare global {
  interface Window {
    starcoin: any;
  }
}

export class StarMaskAuthProvider {
  isAuthenticated: boolean = false;
  async signIn(callback: (user: User) => void): Promise<User> {
    try {
      if (window.starcoin) {
        let provider = new providers.Web3Provider(window.starcoin, "any");
        const blockNumber = await provider.getBlockNumber();
        console.log(blockNumber);
        let network = await window.starcoin.request({
          method: "chain.id",
        });
        console.log(network);
        let onboarding = new StarMaskOnboarding({ forwarderOrigin });
        let accounts = await window.starcoin.request({
          method: "stc_requestAccounts",
        });
        if (accounts.length > 0) {
          this.isAuthenticated = true;
          console.log(accounts[0]);
          let account: User = {
            hash: accounts[0],
            primary_name: null,
            network: network.name,
            holdings: [],
          };
          callback(account);
          return account;
        } else {
          console.log("No accounts found");
          return null;
        }
      } else {
        console.log("No starcoin found");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
  signOut(callback: () => void): void {
    this.isAuthenticated = false;
    setTimeout(callback, 1000);
  }
}
