import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway'

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testLambdaProps: lambda.FunctionProps = {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('dist'),
      handler: "testLambdaHandler.handler"
    }
    const testLambda = new lambda.Function(this, 'testLambdaId', testLambdaProps);

    const lambdaRestApiProps: apigw.RestApiProps = {
      deploy: true
    }
    const apiGateway = new apigw.RestApi(this,"Rest Api", lambdaRestApiProps)

    // @ts-ignore
    apiGateway.root.addResource("Test").addMethod("GET", new apigw.LambdaIntegration(testLambda))

    // The code that defines your stack goes here
  }
}
