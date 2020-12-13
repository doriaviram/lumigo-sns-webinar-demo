import mailgun from "mailgun-js";
const DOMAIN = "sandbox8b64fdef968a4cfeba2e544a28e1f2e6.mailgun.org";
const mgClient = mailgun({
	apiKey: "11669f713838068559ed2ed92eb412aa-4879ff27-42a4ffba",
	domain: DOMAIN
});

export class MailService {
	static async sendMail(to: string, subject: string, text: string) {
		const data = {
			from:
				"Mailgun Sandbox <postmaster@sandbox8b64fdef968a4cfeba2e544a28e1f2e6.mailgun.org>",
			to: to,
			subject: subject,
			text: text
		};
		await mgClient
			.messages()
			.send(data)
			.catch(e => {
				console.log("Error while sending email", e);
			});
	}
}
