# CDK demo app

I have chosen to use typescript, but you can use whichever language you would like, would be good to see it working in other languages if you have a different preference to me.
## Steps to build initial application
1) run `cdk init app --language typescript`, replace with language of choice, bare in mind other languages will diverge from this repo
2) Install the cdk lambda package `npm install @aws-cdk/aws-lambda`. NOTE: Make sure when you install any new aws-cdk packages that all the version are the same.
3) run `cdk bootstrap`. This will populate a given environment with the resources required by the CDK to perform deployments into that environment. You should only need to run this once.
4) run `npm run build` just to check your initial setup is working correctly.


### Default Commands
The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
