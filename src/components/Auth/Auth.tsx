import React, { useState } from "react";
import { User } from "../../data/user";
import { MockAuthProvider } from "./MockAuthProvider";

export interface AuthContextType {
  user: User;
  signIn: (user: User, callback: () => void) => void;
  signOut: (callback: () => void) => void;
  update: (user: User) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export interface AuthProviderState {
  user: User;
}

export class AuthProvider extends React.Component<any, AuthProviderState> {
  provider: any = new MockAuthProvider();
  constructor(props: any) {
    super(props);

    this.state = {
      user: null,
    };
  }

  render() {
    let value: AuthContextType = {
      user: this.state.user,
      signIn: (user: User, callback: () => void) => {
        return this.provider.signIn(() => {
          this.setState({ user: user });
          callback();
        });
      },
      signOut: (callback: () => void) => {
        return this.provider.signOut(() => {
          this.setState({ user: null });
          callback();
        });
      },
      update: (user: User) => {
        this.setState({ user: user });
      }
    };
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
