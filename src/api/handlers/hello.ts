import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Callback,
} from "aws-lambda";

import { dataSource } from '../../infrastructure/dataSource';

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
      body: "HELLO YOU ARE MY ENEMY!!!",
    };

    dataSource.initialize()

    dataSource.manager.save({})

    callback(null, success(response));

    return response;
  } catch (err: any) {
    callback(err);

    return err;
  }
};
