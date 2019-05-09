"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var HttpRequest = /** @class */ (function () {
    function HttpRequest(url, args) {
        this.path = " ";
        this.host = " ";
        this.url = url;
        this.processUrl(this.url);
        if (!!args) {
            this.processArgs(args);
        }
        this.args = [];
    }
    HttpRequest.prototype.processUrl = function (url) {
        var tld = url.lastIndexOf('.');
        var sep = url.indexOf('/', tld);
        this.host = url.slice(0, sep);
        this.path = url.slice(sep + 1);
    };
    HttpRequest.prototype.processArgs = function (args) {
        var sep = args.indexOf('&');
        if (sep < 0) {
            return;
        }
        var argpair = args.slice(0, sep);
        var apsep = argpair.indexOf('=');
        var k = argpair.slice(0, apsep);
        var v = argpair.slice(apsep + 1);
        this.args.push([k, v]);
        this.processArgs(args.slice(sep + 1));
    };
    HttpRequest.prototype.preparePath = function () {
        var _this = this;
        var path = "?";
        this.args.forEach(function (arg, i) {
            var k = arg[0];
            var v = arg[1];
            path += k + '=' + v;
            if (i == _this.args.length - 1) {
                return;
            }
            path += '&';
        });
        return path;
    };
    HttpRequest.prototype.addArg = function (key, value) {
        try {
            this.args.push([key, value]);
        }
        catch (err) {
            console.log(err);
        }
    };
    HttpRequest.prototype.addArgs = function (args) {
        var _this = this;
        args.forEach(function (arg) {
            _this.args.push(arg);
        });
    };
    HttpRequest.prototype.get = function (cb) {
        var opts = {
            'host': this.host,
            'path': "/" + this.path + "/" + this.preparePath()
        };
        http.request(opts, function (r) {
            var data = '';
            r.on('data', function (chunk) {
                console.log('Got chunk: ' + chunk);
                data += chunk;
            });
            r.on('end', function () {
                console.log('Response has ended');
                console.log(data);
                cb(data);
            });
            r.on('error', function (err) {
                console.log('Following error occured during request:\n');
                console.log(err);
            });
        }).end();
    };
    HttpRequest.prototype.test = function () {
        console.log(this.preparePath());
        console.log("/" + this.path + "/" + this.preparePath());
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=HttpRequest.js.map