import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {Construct} from "constructs";

export class S3BucketForStaticWebsite extends s3.Bucket {
    constructor (scope: Construct) {
        super(scope, 'S3BucketForStaticWebsite', {
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });
    }
}