import { TShirtService } from "../../lib/t-shirt-service";
import { SQSEvent } from "aws-lambda";

let currentRetry: number = 0;

const handler = async (event: SQSEvent) => {
	const shouldFail = currentRetry <= 2;

	console.log("Current retry", {currentRetry, shouldFail});

	currentRetry++;

	await Promise.all(
		event.Records.map(record => {
			const userId = record.body;
			console.log(`Order t-shirt for ${userId}`);

			return TShirtService.orderNewTShirt(userId, shouldFail);
		})
	);

};
exports.handler = handler;
