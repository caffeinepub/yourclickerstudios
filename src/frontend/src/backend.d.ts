import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    id: bigint;
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface PortfolioItem {
    id: bigint;
    title: string;
    description: string;
    category: string;
}
export interface backendInterface {
    addPortfolioItem(title: string, category: string, description: string): Promise<bigint>;
    getPortfolio(): Promise<Array<PortfolioItem>>;
    getSubmissions(): Promise<Array<Submission>>;
    getVisitCounter(): Promise<bigint>;
    incrementVisitCounter(): Promise<void>;
    submitForm(name: string, email: string, phone: string, service: string, message: string): Promise<bigint>;
}
