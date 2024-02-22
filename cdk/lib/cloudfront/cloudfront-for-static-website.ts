import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {Construct} from "constructs";

import {environment} from "../../environment"

export class CloudfrontForStaticWebsite extends CloudFrontToS3 {
    constructor(scope: Construct, bucket: s3.IBucket) {
        super(scope, 'CloudFrontForStaticWebsite', {
            existingBucketObj: bucket,
            originPath: environment.cloudfrontOriginPath,
            cloudFrontDistributionProps: {
                defaultRootObject: environment.defaultRootObject,
                errorResponses: [{
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: `/${environment.defaultRootObject}`,
                }]
            }
        })
    }
}