import "./Dashboard.css";

const metrics = [
  { label: "Total Orders", value: "12,846", change: "+8.4% vs last month" },
  { label: "Total Revenue", value: "$284,920", change: "+11.1% vs last month" },
  { label: "Avg Order Value", value: "$22.18", change: "+2.2% vs last month" },
  { label: "Total Customers", value: "5,392", change: "+6.7% vs last month" },
];

const recentOrders = [
  {
    id: "#SHC-10982",
    customer: "A. Rahman",
    items: "2 Sliders N Side, Fries",
    total: "$31.00",
    status: "Completed",
    date: "Apr 05, 2026",
  },
  {
    id: "#SHC-10983",
    customer: "M. Johnson",
    items: "Tender & Slider, Mac N Cheese",
    total: "$26.00",
    status: "Pending",
    date: "Apr 05, 2026",
  },
  {
    id: "#SHC-10984",
    customer: "S. Patel",
    items: "Single Slider, Loaded Fries",
    total: "$22.00",
    status: "Completed",
    date: "Apr 05, 2026",
  },
  {
    id: "#SHC-10985",
    customer: "L. Garcia",
    items: "2 Tenders N Side, Drink",
    total: "$24.00",
    status: "Cancelled",
    date: "Apr 04, 2026",
  },
  {
    id: "#SHC-10986",
    customer: "K. Ali",
    items: "Mac N Chick, Coleslaw",
    total: "$23.00",
    status: "Completed",
    date: "Apr 04, 2026",
  },
  {
    id: "#SHC-10987",
    customer: "D. Williams",
    items: "Single Tender, Fries, Drink",
    total: "$19.00",
    status: "Pending",
    date: "Apr 04, 2026",
  },
  {
    id: "#SHC-10988",
    customer: "R. Chen",
    items: "2 Sliders N Side, Mac N Cheese",
    total: "$33.00",
    status: "Completed",
    date: "Apr 03, 2026",
  },
  {
    id: "#SHC-10989",
    customer: "J. Smith",
    items: "Single Slider, Coleslaw",
    total: "$14.00",
    status: "Cancelled",
    date: "Apr 03, 2026",
  },
];

const Dashboard = () => {
  return (
    <section className="dashboard-page">
      <div className="dashboard-header">
        <p className="dashboard-eyebrow">Business Analytics</p>
        <h1>Sam&apos;s Hot Chicken Dashboard</h1>
      </div>

      <div className="dashboard-metrics-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="dashboard-metric-card">
            <p className="dashboard-metric-label">{metric.label}</p>
            <p className="dashboard-metric-value">{metric.value}</p>
            <p className="dashboard-metric-change">{metric.change}</p>
          </article>
        ))}
      </div>

      <section
        className="dashboard-chart-card"
        aria-label="Revenue trend chart"
      >
        <div className="dashboard-chart-header">
          <h2>Revenue Trend</h2>
          <span>Last 30 Days</span>
        </div>
        <div className="dashboard-chart-placeholder">
          <div className="chart-grid-lines" />
          <div className="chart-fake-line" />
          <div className="chart-fake-glow" />
        </div>
      </section>

      <section className="dashboard-table-card" aria-label="Recent orders">
        <div className="dashboard-table-header">
          <h2>Recent Orders</h2>
          <span>8 latest transactions</span>
        </div>

        <div className="dashboard-table-wrap">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.items}</td>
                  <td>{order.total}</td>
                  <td>
                    <span
                      className={`dashboard-status-badge dashboard-status-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
