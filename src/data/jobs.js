const jobs = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Công việc ${i + 1}`,
  salary: `${10 + i} - ${20 + i} triệu`,
  location: i % 2 === 0 ? "Hà Nội" : "Thành phố Hồ Chí Minh",
  logo: "https://via.placeholder.com/50",
  companyName: `Công ty ${i + 1}`,
  postDate: "01/05/2025",
}));

export const cvTemplates = [
  {
    id: 1,
    title: "Chuyên Nghiệp 1",
    image: "/assets/pro_cv.webp",
    tags: [
      { name: "Thanh lịch", highlighted: true },
      { name: "1 trang", highlighted: false },
      { name: "+8", highlighted: false },
    ],
  },
  {
    id: 2,
    title: "Tham vọng",
    image: "/assets/idk.jpg",
    tags: [
      { name: "Kinh nghiệm", highlighted: false },
      { name: "Chuyên nghiệp", highlighted: false },
      { name: "+9", highlighted: false },
    ],
  },
  {
    id: 3,
    title: "Chuyên gia",
    image: "/assets/pro_cv_2.svg",
    tags: [
      { name: "Không ảnh", highlighted: false },
      { name: "Chuyên nghiệp", highlighted: false },
      { name: "+9", highlighted: false },
    ],
  },
];

export const locationFilters = [
  "Ngẫu Nhiên",
  "Hà Nội",
  "Thành phố Hồ Chí Minh",
];

export default jobs;
