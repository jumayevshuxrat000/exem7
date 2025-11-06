import { Table } from "antd";
import { useQueryHandler } from "../../hooks/useQuery";

export default function ManagersPage() {
  const { data, isLoading, isError } = useQueryHandler({
    url: "staff/all-managers",
    pathname: "managers",
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (id: string) => id?.slice(0, 2),
    },
    { title: "Ism", dataIndex: "first_name", key: "first_name" },
    { title: "Familiya", dataIndex: "last_name", key: "last_name" },
  ];
  const tableData = Array.isArray(data?.data) ? data.data : [];

  return (
    <div>
      <h2>Managers</h2>
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
