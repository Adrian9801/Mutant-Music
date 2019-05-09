export declare class HttpRequest {
    url: string;
    private path;
    private host;
    private args;
    constructor(url: string, args?: string);
    private processUrl;
    private processArgs;
    private preparePath;
    addArg(key: string, value: string): void;
    addArgs(args: Array<Array<string>>): void;
    get(cb: (res: any) => any): void;
    test(): void;
}
