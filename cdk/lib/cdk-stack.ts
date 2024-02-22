import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {S3BucketForStaticWebsite} from "./s3/s3-bucket-for-static-website";
import {CloudfrontForStaticWebsite} from "./cloudfront/cloudfront-for-static-website";
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const privateS3Bucket = new S3BucketForStaticWebsite(this);

      new s3Deployment.BucketDeployment(this, 'StaticWebsiteDeployment', {
          sources: [s3Deployment.Source.asset('../dist')],
          destinationBucket: privateS3Bucket,
      });
    
    new CloudfrontForStaticWebsite(this, privateS3Bucket);
  }
}
