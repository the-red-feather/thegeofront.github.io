export declare function fetchJson(path: string): Promise<any>;
export declare function fetchText(path: string): Promise<string>;
export declare function asNumber(n: any): number;
export declare function asBoolean(n: any): boolean;
export declare function asString(n: any): string;
export declare function toJson(text: string): Object;
export declare function decode(text: string): Object;
export declare function encode(json: any): string;
export declare function stringify(json: any): string;
export declare function asList(any: any): any[];
export declare function log(data: any): void;
export declare function numberFromBinary(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean, f: boolean, g: boolean, h: boolean): number;
export declare function toBinary(n: number): [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];