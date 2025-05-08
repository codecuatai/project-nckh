import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Carousel,
} from "react-bootstrap";
import JobCard from "../components/JobCard";
import TagFilter from "../components/TagFilter";
import Pagination from "../components/Pagination";
import jobs, { locationFilters } from "../data/jobs";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTag, setActiveTag] = useState(locationFilters[0]);
  const jobsPerPage = 12;

  // Lọc công việc theo location
  const filteredJobs =
    activeTag === "Ngẫu Nhiên"
      ? jobs
      : jobs.filter(
          (job) =>
            job.location.includes(activeTag) || activeTag.includes(job.location)
        );

  // Tính toán công việc hiển thị trên trang hiện tại
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <>
      {/* Search Section */}
      <div className="search-section">
        <Container>
          <h4>Tìm kiếm việc làm mới nhất nhanh chóng và tiện lợi</h4>
          <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
            <Form.Control
              className="search"
              type="text"
              style={{ maxWidth: "300px" }}
              placeholder="Vị trí việc làm, tuyển dụng"
            />
            <Form.Select className="search" style={{ maxWidth: "200px" }}>
              <option>Địa điểm</option>
              <option>Hà Nội</option>
              <option>TP.HCM</option>
              <option>Đà Nẵng</option>
            </Form.Select>
            <Button variant="success" className="rounded-pill px-4 search">
              Tìm kiếm
            </Button>
          </div>
          <div className="mb-2 fw-bold">hoặc</div>
          <Button className="cv-search-btn">
            Tìm kiếm dựa trên CV của bạn
          </Button>
        </Container>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <Container>
          <Carousel id="jobCarousel">
            <Carousel.Item>
              <div className="carousel-item">
                <img
                  src="/assets/qauntrikinhdoanh.jpg"
                  alt="Quản trị kinh doanh"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Job List Section */}
      <Container className="py-3">
        <h4 className="fw-bold text-success mb-3">Việc làm tốt nhất</h4>

        {/* Filter tags */}
        <TagFilter
          tags={locationFilters}
          activeTag={activeTag}
          onSelectTag={setActiveTag}
        />

        {/* Alert */}
        <Alert variant="info">
          Gợi ý: Di chuột vào tiêu đề để xem thêm thông tin chi tiết
        </Alert>

        {/* Job list */}
        <Row className="g-3">
          {currentJobs.map((job) => (
            <Col lg={4} md={6} key={job.id}>
              <JobCard job={job} />
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </>
  );
};

export default HomePage;
