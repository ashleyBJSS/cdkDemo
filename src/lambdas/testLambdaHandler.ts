export const handler = async (event: any): Promise<any> => {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: `Hello, CDK! Event: ${JSON.stringify(event)}\n`
    };
};
