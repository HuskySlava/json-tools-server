import {readFileSync} from "fs";

interface ServerConfig {
    listenPort: number
}

const loadJsonFile = (path: string) : object => {
    return JSON.parse(readFileSync(path).toString());
};

export default {
    get server(): ServerConfig {
        return <ServerConfig>loadJsonFile("cfg/server.json");
    }
};
