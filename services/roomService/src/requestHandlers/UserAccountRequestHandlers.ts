import assert from 'assert';

/**
 * The format of a request to join a Town in Covey.Town, as dispatched by the server middleware
 */
export interface AccountLoginRequest {
  /** userName that the player has created an account for * */
  userName: string;
  /** password for that account * */
  password: string;
}

/**
 * The format of a response to logging in, as returned by the handler to the server middleware
 */
export interface AccountLoginResponse {
  /** userName that the player has created an account for * */
  userName: string;
  /** password for that account * */
  password: string;
  /** avatar chose and stored by user from their previous login session * */
  avatar: string;
}

/**
 * info user enter to create a new account
 */
export interface UserAccountCreateRequest {
  userName: string;
  password: string;
}

/**
 * Response from the server for a user account request
 */
export interface UserAccountCreateResponse {
  userName: string;
  password: string;
}

/**
 * Envelope that wraps any response from the server
 */
export interface ResponseEnvelope<T> {
  isOK: boolean;
  message?: string;
  response?: T;
}
