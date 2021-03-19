
import { DynamoDBClient, PutItemCommand, PutItemInput } from '@aws-sdk/client-dynamodb'

export const handler = async (event: any): Promise<any> => {
    console.log("request:", JSON.stringify(event, undefined, 2));
    const databaseName = process.env.DATABASE_NAME

    const params: PutItemInput = {
        TableName: databaseName,
        Item: {
            Foo: {
                S: 'BAR'
            },
            primaryKey: {
                S: `${event.primaryKey}`
            }
        }
    }

    const dbclient = new DynamoDBClient({ region: "eu-west-1" });

    let data;
    const run = async () => {
        try {
            console.log("Before DB Request");
            data = await dbclient.send(new PutItemCommand(params));
            console.log({data});
        } catch (err) {
            console.error({err});
        }
    };
    await run();
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: `Sent Data: ${JSON.stringify(data)}\n`
    };
};
