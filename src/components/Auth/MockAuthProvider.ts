export class MockAuthProvider {
  isAuthenticated: boolean = false;
  signIn(callback: () => void): void {
    this.isAuthenticated = true;
    setTimeout(callback, 1000);
  }
  signOut(callback: () => void): void {
    this.isAuthenticated = false;
    setTimeout(callback, 1000);
  }
}
