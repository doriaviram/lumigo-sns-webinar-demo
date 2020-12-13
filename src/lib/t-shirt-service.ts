import axios from "axios";

const URL = "https://t-shirt-order.free.beeceptor.com";

export class TShirtService {
	static async orderNewTShirt(userId: string, fail: boolean = false) {
		const url = fail ? `${URL}/fail` : URL;
		await axios.post(url, {
			userId: userId
		});
	}
}
