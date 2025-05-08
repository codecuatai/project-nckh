import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log("Đăng nhập với:", formData);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h3>Chào mừng bạn quay trở lại</h3>
        <Form onSubmit={handleSubmit}>
          <div className="text-start">Tên tài khoản</div>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mb-3"
          />

          <div className="text-start">Mật khẩu</div>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mb-2"
          />

          <div className="text-end mb-4">
            <Link to="#" style={{ color: "white" }}>
              Quên mật khẩu
            </Link>
          </div>

          <Button
            type="submit"
            className="w-100"
            style={{ backgroundColor: "#00c260", border: "none" }}
          >
            Đăng nhập
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
