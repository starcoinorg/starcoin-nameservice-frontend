import React, { useState } from "react";
import { User } from "../../data/user";
import { StarMaskAuthProvider } from "./AuthProvider";
import { MockAuthProvider } from "./MockAuthProvider";

export interface AuthContextType {
  user: User;
  signIn: (callback: (user: User) => void) => User;
  signOut: (callback: () => void) => void;
  update: (reason: string) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export interface AuthProviderState {
  user: User;
}

export class AuthProvider extends React.Component<any, AuthProviderState> {
  provider: any = new StarMaskAuthProvider();
  constructor(props: any) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    let signIn = (callback: (user: User) => void) => {
      return this.provider.signIn((user: User) => {
        this.setState({ user: user });
        callback(user);
      });
    };
    let signOut = (callback: () => void) => {
      return this.provider.signOut(() => {
        this.setState({ user: null });
        callback();
      });
    };
    let value: AuthContextType = {
      user: this.state.user,
      signIn: signIn,
      signOut: signOut,
      update: (reason: string) => {
        signIn(() => {
          console.log(`resign in ${reason}`);
        });
      },
    };
    if (window.starcoin) {
      window.starcoin.on("chainChanged", () => {
        value.update("chain changed");
      });
      window.starcoin.on("accountsChanged", () => {
        value.update("accounts changed");
      });
    }
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export function useAuth() {
  return React.useContext(AuthContext);
}
