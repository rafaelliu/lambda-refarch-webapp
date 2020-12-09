// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4ge42fbukn891ctt5c62shgocb",     // CognitoClientID
  "api_base_url": "https://5bedapziuf.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-webapp-ref.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1fxkd2vejp9do.amplifyapp.com"                                      // AmplifyURL
};

export default config;
