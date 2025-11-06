import { Table } from "antd";
import { useQueryHandler } from "../../hooks/useQuery";

export default function GroupsPage() {
  const { data, isLoading, isError } = useQueryHandler({
    url: "group/get-all-group?search=Frontend dasturlash N131",
    pathname: "groups",
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (id: string) => id?.slice(0, 2),
    },
    { title: "Guruh nomi", dataIndex: "name", key: "name" },
    { title: "Kurs", dataIndex: "course", key: "course" },
    { title: "O'qituvchi", dataIndex: "teacher", key: "teacher" },
    {
      title: "Talabalar soni",
      dataIndex: "student_count",
      key: "student_count",
    },
  ];

  const tableData = Array.isArray(data?.data) ? data.data : [];

  return (
    <div>
      <h2>Guruhlar</h2>
      <Table
        columns={columns}
        dataSource={tableData}
        loading={isLoading}
        rowKey="_id"
        bordered
        pagination={{ pageSize: 10 }}
      />
      {isError && <div style={{ color: "red" }}>Xatolik yuz berdi!</div>}
    </div>
  );
}
