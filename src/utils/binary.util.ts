export enum OperationStatus {
  AND = "and",
  OR = "or",
  NOT = "not",

}
export const generateBinary = ({
  length,
  DecNumber,
}: {
  length: number;
  DecNumber: number;
}) => {
  const maxDecimal = Math.pow(2, length) - 1;
  const randomDecimal = Math.floor(DecNumber * (maxDecimal + 1));
  const binaryString = randomDecimal.toString(2).padStart(length, "0");

  return binaryString;
};

export const generateRandomDec = ({
  length,
  DecNumber,
}: {
  length: number;
  DecNumber: number;
}) => {
  const maxDecimal = Math.pow(2, length) - 1;
  const randomDecimal = Math.floor(DecNumber * (maxDecimal + 1));
  const binaryString = randomDecimal.toString(2).padStart(length, "0");

  return {randomDecimal,binaryString};
};
export const sumBinaryNumber = ({
  first_num,
  second_num,
}: {
  first_num: string;
  second_num: string;
}) => {
  //   const decimal1 = parseInt(first_num, 2);
  //   const decimal2 = parseInt(second_num, 2);
  //   const sum = decimal1 + decimal2;
  //   return sum.toString(2); // back to binary
  let result = "";
  let carry = 0;
  let carryRow = "";

  for (let i = first_num.length - 1; i >= 0; i--) {
    const bitA = parseInt(first_num[i], 2);
    const bitB = parseInt(second_num[i], 2);

    const total = bitA + bitB + carry;
    const sumBit = total % 2;
    carry = Math.floor(total / 2);

    result = sumBit.toString() + result;
    carryRow = carry.toString() + carryRow;
  }
  if (carry) {
    result = "1" + result;
    carryRow = "0" + carryRow; // shift carry row for alignment
  }

  return { total: result, carry: carryRow };
};

export const checkIfUserAddRightNumber = ({
  user_number,
  check_number,
}: {
  user_number: { total: string; carry: string };
  check_number: { total: string; carry: string };
}) => {
  return (
    user_number.total == check_number.total &&
    user_number.carry == check_number.carry
  );
};

 export function subtractBinaryStrings(...binaries: string[]): {
    result: number[];
    borrows: number[];
  } 
  {
    if (binaries.length < 2) {
      throw new Error("Provide at least two binary numbers to subtract.");
    }

    const maxLength = Math.max(...binaries.map((b) => b.length));
    const padded = binaries.map((b) => b.padStart(maxLength, "0"));

    const result: number[] = [];
    const borrows: number[] = [];
    let borrow = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
      const minuend = parseInt(padded[0][i]);
      const subtrahend = padded
        .slice(1)
        .reduce((sum, bin) => sum + parseInt(bin[i]), 0);

      const temp = minuend - subtrahend - borrow;

      if (temp >= 0) {
        result.unshift(temp);
        borrows.unshift(0);
        borrow = 0;
      } else {
        result.unshift(temp + 2);
        borrows.unshift(1);
        borrow = 1;
      }
    }

    return {result, borrows};
  }