import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {AttributeType, Table, TableProps} from '@aws-cdk/aws-dynamodb';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const databaseTableName = "TestDynamoDbTableName"
    const databaseTableProps: TableProps = {
        partitionKey: {
          name: "primaryKey",
          type: AttributeType.STRING
        }
    }
    const databaseTable = new Table(this, databaseTableName, databaseTableProps )
    // Add Lambda Layer
    const lambdaLayer = new lambda.LayerVersion(this, 'powershiftCommonLayer', {
      code: lambda.Code.fromAsset('dist/lambdaLayer'),
      compatibleRuntimes: [lambda.Runtime.NODEJS_12_X],
      description: 'A layer containing the required node modules package'
    });

    const testLambdaProps: lambda.FunctionProps = {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('dist'),
      handler: "testLambdaHandler.handler",
      environment: {
        DATABASE_NAME: databaseTable.tableName,
        NODE_PATH: ":/opt/nodejs/node_modules"
      },
      layers: [lambdaLayer]
    }
    const testLambda = new lambda.Function(this, 'testLambdaId', testLambdaProps);

    //@ts-ignore
    databaseTable.grantReadWriteData(testLambda)
  }
}
