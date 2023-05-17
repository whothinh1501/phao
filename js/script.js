function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Lấy các phần tử DOM cần thiết
const form = document.querySelector('form');
const serialInput = document.getElementById('serial');
const weightInput = document.getElementById('weight');

// Định nghĩa hàm kiểm tra số serial
function validateSerial(serial) {
  const regex =  /^[A-Z0-9_]{6,}$/;; // Mẫu regex: chữ cái hoa, dấu _ và ký số, ít nhất 6 ký tự
  return regex.test(serial);
}

// Định nghĩa hàm kiểm tra trọng lượng
function validateWeight(weight) {
  const parsedWeight = parseFloat(weight);
  return !isNaN(parsedWeight) && parsedWeight > 0;
}

// Định nghĩa hàm xử lý sự kiện submit form
function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form đi

  // Lấy giá trị từ các trường nhập
  const serialValue = serialInput.value;
  const weightValue = weightInput.value;

  // Kiểm tra số serial
  if (!validateSerial(serialValue)) {
    alert('Số serial không hợp lệ! Số serial phải có ít nhất 6 ký tự và có thể chứa chữ cái hoa, dấu _ và ký số.');
    return; // Dừng xử lý nếu số serial không hợp lệ
  }

  // Kiểm tra trọng lượng
  if (!validateWeight(weightValue)) {
    alert('Trọng lượng không hợp lệ! Trọng lượng phải là một số lớn hơn 0.');
    return; // Dừng xử lý nếu trọng lượng không hợp lệ
  }

  // Nếu các mục nhập hợp lệ, tiếp tục xử lý form ở đây
  // Ví dụ: gửi dữ liệu đến máy chủ, xử lý thông tin, v.v.

  // Sau khi xử lý, có thể đóng modal hoặc thực hiện các hành động khác tùy ý
  closeModal();
}

// Định nghĩa hàm đóng modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// Gán sự kiện submit form cho hàm handleSubmit
form.addEventListener('submit', handleSubmit);

// Lấy phần tử DOM cần thiết
const shippingCostInput = document.getElementById('shipping-cost');

// Định nghĩa hàm kiểm tra chi phí vận chuyển
function validateShippingCost(weight, cost) {
  const parsedWeight = parseFloat(weight);

  // Kiểm tra trọng lượng và chi phí vận chuyển theo bảng giá
  if (parsedWeight >= 1 && parsedWeight <= 20 && cost != 35000) {
    return false;
  } else if (parsedWeight >= 21 && parsedWeight <= 50 && cost != 30000) {
    return false;
  } else if (parsedWeight > 50 && cost != 15000) {
    return false;
  }

  return true;
}

// Định nghĩa hàm xử lý sự kiện submit form
function handleSubmit(event) {
  event.preventDefault();

  // Lấy giá trị từ các trường nhập
  const weightValue = weightInput.value;
  const shippingCostValue = shippingCostInput.value;

  // Kiểm tra trọng lượng và chi phí vận chuyển
  if (!validateWeight(weightValue)) {
    alert('Trọng lượng không hợp lệ! Trọng lượng phải là một số lớn hơn 0.');
    return;
  }

  if (!validateShippingCost(weightValue, shippingCostValue)) {
    alert('Chi phí vận chuyển không hợp lệ! Vui lòng kiểm tra lại theo bảng giá.');
    return;
  }

  // Nếu các mục nhập hợp lệ, tiếp tục xử lý form ở đây

  closeModal();
}
