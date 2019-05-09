import * as http from 'http';

export class HttpRequest{
url: string;
private path: string = " ";
private host: string = " ";
private args: Array<Array<string>>;

constructor(url: string, args?: string){
    this.url = url;
    this.processUrl(this.url);
    if(!!args){
        this.processArgs(args);
    }
    this.args = [];
}
private processUrl(url: string): void {
    let tld: number = url.lastIndexOf('.')
    let sep: number = url.indexOf('/', tld);
    this.host = url.slice(0, sep);
    this.path = url.slice(sep+1);
}
private processArgs(args: string): void {
    let sep: number = args.indexOf('&');
    if(sep < 0){
        return ;
    }
    let argpair: string = args.slice(0, sep);
    let apsep: number = argpair.indexOf('=');
    let k: string = argpair.slice(0, apsep);
    let v: string = argpair.slice(apsep+1);
    this.args.push([k,v]);
    this.processArgs(args.slice(sep+1));
}
private preparePath(): string {
    let path: string = `?`;
    this.args.forEach((arg: Array<string>, i: number): void => {
        let k: string = arg[0];
        let v: string = arg[1];
        path += k + '=' + v;
        if(i == this.args.length-1){
            return ;
        }
        path += '&';
    });
    return path;
}
public addArg(key: string, value: string): void {
    try{
        this.args.push([key,value]);
    } catch(err) {
        console.log(err);
    }
}
public addArgs(args: Array<Array<string>>): void {
    args.forEach((arg: Array<string>): void => {
        this.args.push(arg);
    });
}
public get(cb: (res: any) => any): void {
    let opts = {
        'host': this.host,
        'path': `/${this.path}/${this.preparePath()}`
    };
    http.request(opts, (r: http.IncomingMessage): void => {
        let data = '';
        r.on('data', (chunk: string): void => {
            console.log('Got chunk: ' + chunk);
            data += chunk;
        });
        r.on('end', (): void =>{
            console.log('Response has ended');
            console.log(data);
            cb(data);
        });
        r.on('error', (err): void => {
            console.log('Following error occured during request:\n');
            console.log(err);
        })
    }).end();
}
public test(): void {
    console.log(this.preparePath());
    console.log(`/${this.path}/${this.preparePath()}`);
}
}