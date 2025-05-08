import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
    // Xử lý đăng ký ở đây
    console.log("Đăng ký với:", formData);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h3>Đăng ký tài khoản mới</h3>
        <Form onSubmit={handleSubmit}>
          <div className="text-start">Họ và tên</div>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mb-3"
          />

          <div className="text-start">Email</div>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-3"
          />

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
            className="mb-3"
          />

          <div className="text-start">Xác nhận mật khẩu</div>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="mb-4"
          />

          <Button
            type="submit"
            className="w-100"
            style={{ backgroundColor: "#00c260", border: "none" }}
          >
            Đăng ký
          </Button>

          <div className="mt-3 text-center">
            <span>Đã có tài khoản? </span>
            <Link to="/login" style={{ color: "white" }}>
              Đăng nhập
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
