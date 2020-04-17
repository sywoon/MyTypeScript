

module log {
    export let modelsOpen: any = {};

    export let any2str = (msg: any): string => {
        if (typeof msg === "object") {
            return JSON.stringify(msg);
        } else {
            return String(msg);
        }
    }

    export let i = (...args: any[]): void => {
        for (var i = 0; i < args.length; i++) {
            let msg = args[i];
            console.log(any2str(msg));
        }
    }

    export let d = (msg: any): void => {
        i(msg);
        console.trace();
    }
}