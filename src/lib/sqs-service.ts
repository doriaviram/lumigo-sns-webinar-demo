import { SQS } from "aws-sdk";

export class SqsService {
	private static async getQueueUrl(queueName: string): Promise<string> {
		const sqs = new SQS();
		const result = await sqs.getQueueUrl({ QueueName: queueName }).promise();
		return result.QueueUrl || "unkown";
	}

	static async publishMessage(queueName: string, userId: string): Promise<void> {
		const queueUrl = await this.getQueueUrl(queueName);
		const sqsClient = new SQS();
		await sqsClient
			.sendMessage({
				QueueUrl: queueUrl,
				MessageBody: userId
			})
			.promise();
	}
}
