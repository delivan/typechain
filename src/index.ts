import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timeStamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();

  static validateStructure = (block: Block): boolean =>
    typeof block.index === "number" &&
    typeof block.previousHash === "string" &&
    typeof block.hash === "string" &&
    typeof block.data === "string" &&
    typeof block.timeStamp === "number";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timeStamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timeStamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timeStamp = timeStamp;
  }
}

const genesisBlock: Block = new Block(0, "whatever", "", "Hello", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLastBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const getHashForBlock = (block: Block): string =>
  Block.calculateBlockHash(
    block.index,
    block.previousHash,
    block.data,
    block.timeStamp
  );

const createNewBlock = (data: string): Block => {
  const previousBlock = getLastBlock();
  const newIndex = previousBlock.index + 1;
  const previousHash = previousBlock.hash;
  const newTimeStamp = getNewTimeStamp();
  const newHash = Block.calculateBlockHash(
    newIndex,
    previousHash,
    data,
    newTimeStamp
  );

  const newBlock = new Block(
    newIndex,
    newHash,
    previousHash,
    data,
    newTimeStamp
  );

  addBlock(newBlock);
  return newBlock;
};

const isBlockValid = (previousBlock: Block, candidateBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (block: Block): void => {
  if (isBlockValid(getLastBlock(), block)) {
    blockChain.push(block);
  }
};

createNewBlock("junghyuk");
createNewBlock("hyunjung");

console.log(getBlockChain());

export {};
