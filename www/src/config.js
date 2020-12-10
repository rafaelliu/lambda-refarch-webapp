// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "28r9tcjd3e8tes5nt8pj63nqgh",     // CognitoClientID
  "api_base_url": "https://xh100jfzzi.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-webapp-ref.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1bclit6iy68ms.amplifyapp.com"                                      // AmplifyURL
};

export default config;
