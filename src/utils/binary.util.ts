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
