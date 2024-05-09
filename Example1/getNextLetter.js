// Đoán chữ cái
// Input : chữ cái đứng liền trước đó
// Output: Chữ cái cần đoán
// Chú ý: Trước chữ A là Z

function getNextLetter(previousLetter) {
  // Chuyển đổi ký tự trước đó sang mã Unicode
  const unicode = previousLetter.charCodeAt(0);

  // Xác định mã Unicode của ký tự tiếp theo
  let nextUnicode;
  if (unicode === 65) {
    // Nếu ký tự trước đó là 'A', chuyển sang 'Z'
    nextUnicode = 90;
  } else {
    // Ngược lại, lấy ký tự liền sau trong bảng mã Unicode
    nextUnicode = unicode + 1;
  }

  // Chuyển đổi mã Unicode sang ký tự
  const nextLetter = String.fromCharCode(nextUnicode);

  return nextLetter;
}

function getNextLetter(previousLetter) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Chuỗi chứa tất cả các chữ cái

  // Tìm vị trí của ký tự trước đó trong chuỗi alphabet
  const index = alphabet.indexOf(previousLetter);

  // Tìm vị trí của ký tự tiếp theo trong chuỗi alphabet
  const nextIndex = index === alphabet.length - 1 ? 0 : index + 1;

  // Trả về ký tự tiếp theo
  return alphabet[nextIndex];
}

function getNextLetter(previousLetter) {
  const charMap = {
    A: "B",
    B: "C",
    C: "D",
    D: "E",
    E: "F",
    F: "G",
    G: "H",
    H: "I",
    I: "J",
    J: "K",
    K: "L",
    L: "M",
    M: "N",
    N: "O",
    O: "P",
    P: "Q",
    Q: "R",
    R: "S",
    S: "T",
    T: "U",
    U: "V",
    V: "W",
    W: "X",
    X: "Y",
    Y: "Z",
    Z: "A", // 'A' sẽ được map thành 'Z'
  };

  return charMap[previousLetter];
}

// Thử nghiệm hàm với đầu vào là 'C'
console.log(guessLetter("C")); // Output sẽ là 'D'
