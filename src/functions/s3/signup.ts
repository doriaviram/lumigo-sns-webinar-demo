import { UsersService } from "../../lib/users-service";
import { SignupSnsService } from "../../lib/signup-sns-service";

const TOPIC_NAME = "webinar-demo-S3UserSignupTopic";

const handler = async () => {
	console.log("About to create user");
	const userId = await UsersService.addNewUser("Test");
	console.log(`User ${userId} created`);

	await SignupSnsService.notifySign(TOPIC_NAME, userId);
	console.log(`Notify on ${userId}`);
};
exports.handler = handler;
