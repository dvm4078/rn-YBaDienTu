/**
 * Trả về `true` nếu tham số đầu vào là một email hợp lệ, ngược lại trả về `false`
 *
 * @param {string} email
 */
const validate = email => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export default validate;
