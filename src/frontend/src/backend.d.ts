import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    id: bigint;
    content: string;
    role: string;
    timestamp: bigint;
}
export interface Conversation {
    id: bigint;
    title: string;
    messages: Array<Message>;
    createdAt: bigint;
}
export interface UserProfile {
    username: string;
    displayName: string;
    createdDate: bigint;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createConversation(title: string): Promise<Conversation>;
    getAllConversations(): Promise<Array<[Principal, Array<Conversation>]>>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getConversation(conversationId: bigint): Promise<Conversation>;
    getConversations(): Promise<Array<Conversation>>;
    getMessages(conversationId: bigint): Promise<Array<Message>>;
    getProfile(username: string): Promise<UserProfile>;
    getUserConversation(user: Principal, conversationId: bigint): Promise<Conversation>;
    getUserConversations(user: Principal): Promise<Array<Conversation>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    login(username: string, password: string): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    sendMessage(conversationId: bigint, content: string, role: string): Promise<Message>;
    signUp(username: string, password: string, email: string, displayName: string): Promise<boolean>;
    systemDescription(): Promise<string>;
}
