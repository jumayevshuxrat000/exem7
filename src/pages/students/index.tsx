import { Table, Input, Select, Button, Space, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useQueryHandler } from "../../hooks/useQuery";

export default function StudentsPage() {
  const [status, setStatus] = useState<string>("ALL");
  const [search, setSearch] = useState<string>("");

  const filterOptions = [
    { label: "ALL", value: "ALL" },
    { label: "Faol", value: "faol" },
    { label: "Nofaol", value: "nofaol" },
    { label: "Yakunladi", value: "yakunladi" },
  ];

  const queryParams: string[] = [];
  if (search.trim()) queryParams.push(`name=${encodeURIComponent(search)}`);
  if (status !== "ALL")
    queryParams.push(`status=${encodeURIComponent(status)}`);
  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

  const { data, isLoading, isError, refetch } = useQueryHandler({
    url: `student/get-all-students${queryString}`,
    pathname: ["students", search, status],
  });

  const columns = [
    { title: "Ism", dataIndex: "first_name", key: "first_name" },
    { title: "Familiya", dataIndex: "last_name", key: "last_name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Guruh", dataIndex: "group", key: "group" },
    { title: "Holat", dataIndex: "status", key: "status" },
  ];

  const students = Array.isArray(data?.data) ? data.data : [];

  return (
    <div>
      <h2>Studentlar ro'yxati</h2>

      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 16,
          justifyContent: "flex-end",
        }}
      >
        <Space.Compact style={{ width: 280 }}>
          <Input
            placeholder="Qidiruv..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => refetch()}
          >
            Qidiruv
          </Button>
        </Space.Compact>

        <Select
          value={status}
          onChange={(value) => setStatus(value)}
          options={filterOptions}
          style={{ width: 130 }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={students}
        loading={isLoading}
        rowKey="_id"
        bordered
        pagination={{ pageSize: 10 }}
        locale={{
          emptyText: (
            <Empty
              description={
                search || status !== "ALL"
                  ? "Mos student topilmadi"
                  : "Hozircha studentlar mavjud emas"
              }
            />
          ),
        }}
      />

      {isError && <div style={{ color: "red" }}>Xatolik yuz berdi!</div>}
    </div>
  );
}
