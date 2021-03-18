# CDK demo app

## Prerequisites
- Set up AWS credentials to the account you want to deploy your infrastructure to.
- Install the cdk, I intalled globally using `npm install -g aws-cdk` If you are not set up with node/npm ecosystem you will want to do that, ecosia is your friend (or google if you must)

## Steps to build initial application
I have chosen to use typescript, but you can use whichever language you would like, would be good to see it working in other languages if you have a different preference to me.

1) run `cdk init app --language typescript`, replace with language of choice, bare in mind other languages will diverge from this repo
2) Install the cdk lambda package `npm install @aws-cdk/aws-lambda`. NOTE: Make sure when you install any new aws-cdk packages that all the version are the same.
3) run `cdk bootstrap`. This will populate a given environment with the resources required by the CDK to perform deployments into that environment. You should only need to run this once.
4) run `npm run build` just to check your initial setup is working correctly.
5) Add the handler code that you want your lambda to run. If using typescript you will need to configure how you want to build your code, I built mine into a dist folder.
6) Add the lambda to the cdk stack in the lib folder, you will need to specify at least the following in the props:
    - runtime: what code is your lambda running
    - code: the folder location of you code, mine is `dist`
    - handler: the file.functionName of the handler code you wrote.
7) Run `npm run build` to build your typescript
8) Run `cdk deploy` to deploy your application - if your wiring worked this should deploy your working lambda.

### Default commands
The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
