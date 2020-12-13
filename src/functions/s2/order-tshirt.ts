import { TShirtService } from "../../lib/t-shirt-service";
import { SNSEvent } from "aws-lambda";

const handler = async (event: SNSEvent) => {
	await Promise.all(
		event.Records.map(record => {
			const userId = record.Sns.Message;
			console.log(`Order t-shirt for ${userId}`);
			return TShirtService.orderNewTShirt(userId, true);
		})
	);
};
exports.handler = handler;
