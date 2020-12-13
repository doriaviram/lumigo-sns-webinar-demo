import { STS } from "aws-sdk";
export const getCurrentAccount = async (): Promise<string> => {
	const sts = new STS();
	const result = await sts.getCallerIdentity({}).promise();
	return result.Account || "unkown";
};

export const getCurrentRegion = () => process.env.AWS_REGION;

export const getSnsArn = async (topicName: string): Promise<string> => {
	const account = await getCurrentAccount();
	const region = getCurrentRegion();
	return ["arn", "aws", "sns", region, account, topicName].join(":");
};
