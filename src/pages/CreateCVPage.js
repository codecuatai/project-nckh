import React, { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import CVCard from "../components/CVCard";
import { cvTemplates } from "../data/jobs";

const CreateCVPage = () => {
  const [language, setLanguage] = useState("Tiếng Việt");
  const [design, setDesign] = useState("Tất cả thiết kế");
  const [sortBy, setSortBy] = useState("mostUsed"); // 'mostUsed' or 'updated'

  return (
    <Container className="py-5">
      <h2 className="fw-bold">
        Mẫu CV xin việc tiếng Việt, Anh, Nhật chuẩn 2025
      </h2>
      <p className="text-muted">Tạo CV cho riêng bạn</p>

      {/* Bộ lọc */}
      <div className="d-flex gap-3 my-3 filter-bar">
        <Form.Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>Tiếng Việt</option>
          <option>English</option>
          <option>日本語</option>
        </Form.Select>

        <Form.Select value={design} onChange={(e) => setDesign(e.target.value)}>
          <option>Tất cả thiết kế</option>
          <option>Chuyên nghiệp</option>
          <option>Thanh lịch</option>
        </Form.Select>

        <div className="form-check ms-auto">
          <input
            className="form-check-input"
            type="radio"
            name="popular"
            id="updated"
            checked={sortBy === "updated"}
            onChange={() => setSortBy("updated")}
          />
          <label className="form-check-label" htmlFor="updated">
            Mới cập nhật
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="popular"
            id="mostUsed"
            checked={sortBy === "mostUsed"}
            onChange={() => setSortBy("mostUsed")}
          />
          <label className="form-check-label" htmlFor="mostUsed">
            Được dùng nhiều nhất
          </label>
        </div>
      </div>

      {/* Danh sách mẫu CV */}
      <Row className="g-4">
        {cvTemplates.map((cv) => (
          <Col md={4} key={cv.id}>
            <CVCard cv={cv} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CreateCVPage;
