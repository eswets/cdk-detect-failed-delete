import { Bucket } from '@aws-cdk/aws-s3/lib/bucket';
import * as cdk from '@aws-cdk/core';

export class CdkDetectFailedDeleteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "Bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const output = new cdk.CfnOutput(this, "Output", {
      value: bucket.bucketName
    })
  }
}
