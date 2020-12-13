import { SNSEvent } from "aws-lambda";
import { MailService } from "../../lib/mail-service";

const handler = async (event: SNSEvent) => {
	await Promise.all(
		event.Records.map(record => {
			const userId = record.Sns.Message;
			console.log(`Order t-shirt for ${userId}`);
			return MailService.sendMail(
				"dori@lumigo.io",
				`User ${userId} created`,
				"Good job"
			);
		})
	);
};
exports.handler = handler;
