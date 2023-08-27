type Campaign = {
  pId: string;
  owner: string;
  title: string;
  description: string;
  image: string;
  target: bigint;
  deadline: bigint;
  amountCollected: bigint;
  hasDisbursed: boolean;
  funders: string[];
  funds: bigint[];
  receivers: string[];
};

export default Campaign;
