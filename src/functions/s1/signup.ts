import { UsersService } from "../../lib/users-service";
import { MailService } from "../../lib/mail-service";
import { TShirtService } from "../../lib/t-shirt-service";

const handler = async () => {
	console.log("About to create user");
	const userId = await UsersService.addNewUser("Test");
	console.log(`User ${userId} created`);

	await MailService.sendMail("dori@lumigo.io", `User ${userId} created`, "Good job");
	console.log("Mail sent!");

	await TShirtService.orderNewTShirt(userId);
	console.log(`Order t-shirt for ${userId}`);
};
exports.handler = handler;
