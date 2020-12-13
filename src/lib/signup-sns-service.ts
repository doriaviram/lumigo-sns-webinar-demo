import { SNS } from "aws-sdk";
import { getSnsArn } from "./aws-utils";

export class SignupSnsService {
	static async notifySign(topicName: string, userId: string): Promise<void> {
		const topicArn = await getSnsArn(topicName);
		const snsClient = new SNS();
		await snsClient
			.publish({
				TopicArn: topicArn,
				Message: userId
			})
			.promise();
	}
}
