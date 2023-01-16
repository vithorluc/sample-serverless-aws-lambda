import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Callback,
} from "aws-lambda";

const success = (response: any) => ({
  statusCode: 200,
  body: JSON.stringify(response),
});

const error = (err: any) => ({
  statusCode: 400,
  body: JSON.stringify(err),
});
export const handler: APIGatewayProxyHandler = async (
  _event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: "HELLO YOU ARE MY FRIEND!!!",
    };

    callback(null, success(response));

    return response;
  } catch (err: any) {
    callback(err);

    return err;
  }
};
