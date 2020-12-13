import { DynamoDB } from "aws-sdk";
import { getRandomId } from "./random";

const TABLE_NAME = "webinar-demo-Users";

export class UsersService {
	static async addNewUser(userName: string): Promise<string> {
		const userId = getRandomId();
		const ddbClient = new DynamoDB.DocumentClient();
		await ddbClient
			.put({
				Item: {
					userId,
					userName
				},
				TableName: TABLE_NAME
			})
			.promise();
		return userId;
	}
}
