import { SNSEvent } from "aws-lambda";
import { SqsService } from "../../lib/sqs-service";

const QUEUE_NAME = "webinar-demo-S3TShirtQueue";

const handler = async (event: SNSEvent) => {
	await Promise.all(
		event.Records.map(record =>
			SqsService.publishMessage(QUEUE_NAME, record.Sns.Message)
		)
	);
};
exports.handler = handler;
