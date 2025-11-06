import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  DoughnutController,
  ArcElement,
  BarElement,
  BarController,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  DoughnutController,
  ArcElement,
  BarElement,
  BarController,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Tickets Solved",
        data: [23, 34, 29, 48, 42, 53, 61],
        borderColor: "#6C63FF",
        backgroundColor: "rgba(108, 99, 255, 0.1)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Tickets Created",
        data: [17, 28, 35, 41, 46, 58, 62],
        borderColor: "#4fd1b6",
        backgroundColor: "rgba(79, 209, 182, 0.1)",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Tickets",
        data: [19, 28, 35, 44, 30],
        backgroundColor: "#6C63FF",
        borderRadius: 4,
      },
    ],
  };

  const doughnutData = {
    labels: ["Sales", "Ship", "Shop", "Rewards"],
    datasets: [
      {
        label: "Tickets By Type",
        data: [40, 23, 21, 16],
        backgroundColor: ["#6C63FF", "#4fd1b6", "#FF63C3", "#ffd600"],
      },
    ],
  };

  const doughnutReturnData = {
    labels: ["Returned Tickets", "New Tickets"],
    datasets: [
      {
        label: "Returned",
        data: [1200, 4300],
        backgroundColor: ["#B85FFF", "#222A45"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#14182b] text-white px-8 py-8 font-sans">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-[#24263B] rounded-xl p-5 flex flex-col items-center justify-center gap-2 shadow-lg">
          <span className="text-sm text-[#e5e5e5]">Avg First Reply Time</span>
          <span className="text-3xl font-semibold">
            30 <span className="text-xl">h</span> 15{" "}
            <span className="text-xl">min</span>
          </span>
        </div>
        <div className="bg-[#24263B] rounded-xl p-5 flex flex-col items-center justify-center gap-2 shadow-lg">
          <span className="text-sm text-[#e5e5e5]">Avg Full Resolve Time</span>
          <span className="text-3xl font-semibold">
            22 <span className="text-xl">h</span> 40{" "}
            <span className="text-xl">min</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#24263B] rounded-xl p-5 flex items-center justify-between shadow-lg">
            <span>Messages</span>
            <span className="bg-[#FF63C3] rounded-lg px-3 py-1 text-sm">
              20%
            </span>
          </div>
          <div className="bg-[#24263B] rounded-xl p-5 flex items-center justify-between shadow-lg">
            <span>Emails</span>
            <span className="bg-[#4fd1b6] rounded-lg px-3 py-1 text-sm">
              93%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-[#222A45] rounded-xl p-6 shadow-lg col-span-2">
          <div className="text-lg mb-4 flex justify-between">
            <span>Tickets Created vs Tickets Solved</span>
            <span className="bg-[#6C63FF] px-2 py-1 rounded text-xs">
              Mar: 0.61
            </span>
          </div>
          <Line
            key="line-main"
            data={lineData}
            options={{
              plugins: { legend: { labels: { color: "white" } } },
              scales: {
                x: { ticks: { color: "white" }, grid: { color: "#444" } },
                y: { ticks: { color: "white" }, grid: { color: "#444" } },
              },
            }}
          />
        </div>
        <div className="bg-[#222A45] rounded-xl p-6 shadow-lg flex flex-col gap-4">
          <div className="text-lg mb-2">First Reply and Full Resolve Time</div>
          <div className="flex gap-2 items-center">
            <div className="text-lg bg-[#4fd1b6] px-4 py-1 rounded-full flex items-center gap-2">
              2.5 Hours
              <span className="text-xs">●</span>
            </div>
          </div>
          <Line
            key="line-secondary"
            data={{
              labels: ["Jan", "Feb", "Mar"],
              datasets: [
                {
                  label: "Time",
                  data: [1.5, 2.5, 2],
                  borderColor: "#FF63C3",
                  backgroundColor: "rgba(255,99,195,0.2)",
                },
              ],
            }}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: "white" }, grid: { color: "#444" } },
                y: { ticks: { color: "white" }, grid: { color: "#444" } },
              },
            }}
          />
          <button className="bg-[#222A45] border border-[#6C63FF] px-2 py-1 rounded text-[#6C63FF] text-xs mt-2">
            View full statement
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#222A45] rounded-xl p-6 shadow-lg">
          <div className="mb-4 text-lg">Tickets By Type</div>
          <Doughnut
            key="doughnut-type"
            data={doughnutData}
            options={{
              plugins: { legend: { labels: { color: "white" } } },
            }}
          />
        </div>
        <div className="bg-[#222A45] rounded-xl p-6 shadow-lg">
          <div className="mb-4 text-lg">New Tickets vs Returned Tickets</div>
          <Doughnut
            key="doughnut-return"
            data={doughnutReturnData}
            options={{
              plugins: { legend: { labels: { color: "white" } } },
            }}
          />
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="bg-[#FF63C3] rounded px-2 py-1 text-xs">
              Returned Tickets: 1200
            </span>
            <span className="bg-[#6C63FF] rounded px-2 py-1 text-xs">
              %48 New Tickets
            </span>
          </div>
        </div>
        <div className="bg-[#222A45] rounded-xl p-6 shadow-lg">
          <div className="mb-4 text-lg">Number of Tickets / Week Day</div>
          <Bar
            key="bar-week"
            data={barData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: "white" }, grid: { color: "#444" } },
                y: { ticks: { color: "white" }, grid: { color: "#444" } },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
