#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDetectFailedDeleteStack } from '../lib/cdk-detect-failed-delete-stack';

const app = new cdk.App();
new CdkDetectFailedDeleteStack(app, 'CdkDetectFailedDeleteStack');
