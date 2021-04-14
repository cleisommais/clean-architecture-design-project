class HapiAdapter {
    static create(fn: any) {
        return async function (req: any) {
            const obj = await fn(req.params, req.payload);
            return obj;
        };
    }
}

export default HapiAdapter;
