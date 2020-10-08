# Simple stack to demonstrate deploy and diff behaviour to stacks in FAILED_DELETE state

Steps to reproduce:
```
npm install
npm run cdk -- --outputs-file out.json deploy && cat out.json | jq -r '.CdkDetectFailedDeleteStack.Output' | { read bucketName; aws s3 cp out.json s3://${bucketName} }
npm run cdk -- destroy
```

The stack will now be in a FAILED_DELETE state because we try to delete a bucket holding a file.

If we now run `cdk diff` or `cdk deploy`, this state is not detected.

