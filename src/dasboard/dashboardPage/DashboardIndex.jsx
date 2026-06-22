import React, { useState } from "react";
import "../../styles/DashboardIndex.css";
import {
  FiUsers,
  FiBox,
  FiTrendingUp,
  FiTrendingDown,
  FiCalendar,
  FiMoreHorizontal,
  FiArrowUp,
  FiArrowDown
} from "react-icons/fi";

const DashboardIndex = () => {
  // --- States for Interactions ---
  const [activeTab, setActiveTab] = useState("Monthly"); // Monthly, Quarterly, Annually
  const [salesTooltip, setSalesTooltip] = useState(null); // { x, y, value, month }
  const [statsTooltip, setStatsTooltip] = useState(null); // { x, y, label, revenue, target }
  
  // --- Data Sets ---
  const salesData = [
    { month: "Jan", sales: 160 },
    { month: "Feb", sales: 380 },
    { month: "Mar", sales: 200 },
    { month: "Apr", sales: 300 },
    { month: "May", sales: 170 },
    { month: "Jun", sales: 180 },
    { month: "Jul", sales: 290 },
    { month: "Aug", sales: 140 },
    { month: "Sep", sales: 220 },
    { month: "Oct", sales: 390 },
    { month: "Nov", sales: 280 },
    { month: "Dec", sales: 110 }
  ];

  const statisticsData = {
    Monthly: [
      { label: "Mon", revenue: 140, target: 110 },
      { label: "Tue", revenue: 180, target: 130 },
      { label: "Wed", revenue: 130, target: 150 },
      { label: "Thu", revenue: 230, target: 170 },
      { label: "Fri", revenue: 190, target: 160 },
      { label: "Sat", revenue: 245, target: 200 },
      { label: "Sun", revenue: 210, target: 190 }
    ],
    Quarterly: [
      { label: "Q1", revenue: 480, target: 400 },
      { label: "Q2", revenue: 620, target: 450 },
      { label: "Q3", revenue: 540, target: 500 },
      { label: "Q4", revenue: 720, target: 550 }
    ],
    Annually: [
      { label: "2021", revenue: 1600, target: 1200 },
      { label: "2022", revenue: 2200, target: 1500 },
      { label: "2023", revenue: 1900, target: 1800 },
      { label: "2024: ", revenue: 2800, target: 2200 },
      { label: "2025: ", revenue: 2600, target: 2400 }
    ]
  };

  // --- SVG Chart Helpers ---
  
  // Bezier path generator for line charts
  const getBezierPath = (points) => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpX1 = curr.x + (next.x - curr.x) / 3;
      const cpY1 = curr.y;
      const cpX2 = curr.x + 2 * (next.x - curr.x) / 3;
      const cpY2 = next.y;
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }
    return d;
  };

  // 1. Math for Monthly Target Gauge
  // Radius = 60. Center = 75, 75. 
  // Circumference = 377
  // Open gauge range is 270 degrees (3/4 of circle) -> stroke-dasharray active length = 282.7
  // We want to fill 75.55% of the 270 degree track -> active progress fill = 282.7 * 0.7555 = 213.6
  const targetCircumference = 377;
  const targetTrackLength = 282.7;
  const targetPercentage = 0.7555;
  const targetProgressLength = targetTrackLength * targetPercentage;

  // 2. Render Monthly Sales Bar Chart
  const renderSalesChart = () => {
    const width = 740;
    const height = 220;
    const paddingLeft = 40;
    const paddingRight = 10;
    const paddingTop = 15;
    const paddingBottom = 30;

    const plotWidth = width - paddingLeft - paddingRight;
    const plotHeight = height - paddingTop - paddingBottom;
    const maxSales = 400; // Y axis max scale
    
    // Y grid points (0, 100, 200, 300, 400)
    const yGridValues = [0, 100, 200, 300, 400];
    const barWidth = 16;
    const spacing = plotWidth / salesData.length;

    return (
      <div className="sales-chart-wrapper">
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
          {/* Grid lines & Y axis labels */}
          {yGridValues.map((val) => {
            const y = paddingTop + plotHeight - (val / maxSales) * plotHeight;
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  className="svg-chart-grid-line"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="svg-chart-text"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Bar rendering */}
          {salesData.map((d, index) => {
            const barHeight = (d.sales / maxSales) * plotHeight;
            const x = paddingLeft + index * spacing + (spacing - barWidth) / 2;
            const y = paddingTop + plotHeight - barHeight;

            return (
              <g key={d.month}>
                {/* Invisible hover trigger zone (wider for easier cursor activation) */}
                <rect
                  x={paddingLeft + index * spacing}
                  y={paddingTop}
                  width={spacing}
                  height={plotHeight}
                  className="bar-hover-rect"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setSalesTooltip({
                      x: x + barWidth / 2,
                      y: y,
                      value: d.sales,
                      month: d.month
                    });
                  }}
                  onMouseLeave={() => setSalesTooltip(null)}
                />
                
                {/* Visual Bar */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={4}
                  className="chart-bar"
                  fill={salesTooltip?.month === d.month ? "var(--primary)" : "#f97316"}
                />

                {/* X axis labels */}
                <text
                  x={x + barWidth / 2}
                  y={height - 10}
                  textAnchor="middle"
                  className="svg-chart-text"
                >
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Dynamic Tooltip */}
        {salesTooltip && (
          <div
            className="chart-tooltip"
            style={{
              left: `${(salesTooltip.x / width) * 100}%`,
              top: `${(salesTooltip.y / height) * 100}%`
            }}
          >
            {salesTooltip.month}: <strong>{salesTooltip.value}</strong>
          </div>
        )}
      </div>
    );
  };

  // 3. Render Statistics Line & Area Chart
  const renderStatisticsChart = () => {
    const width = 740;
    const height = 240;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const plotWidth = width - paddingLeft - paddingRight;
    const plotHeight = height - paddingTop - paddingBottom;
    
    const currentData = statisticsData[activeTab];
    
    // Find max value in current tab for scaling
    const maxVal = activeTab === "Annually" ? 3000 : activeTab === "Quarterly" ? 800 : 250;
    const yGridValues = activeTab === "Annually" 
      ? [0, 1000, 2000, 3000] 
      : activeTab === "Quarterly" 
        ? [0, 200, 400, 600, 800] 
        : [0, 50, 100, 150, 200, 250];

    const spacing = plotWidth / (currentData.length - 1);

    // Compute coordinates for lines
    const revenuePoints = currentData.map((d, index) => ({
      x: paddingLeft + index * spacing,
      y: paddingTop + plotHeight - (d.revenue / maxVal) * plotHeight,
      data: d
    }));

    const targetPoints = currentData.map((d, index) => ({
      x: paddingLeft + index * spacing,
      y: paddingTop + plotHeight - (d.target / maxVal) * plotHeight,
      data: d
    }));

    // Area path string (goes under revenue line)
    const areaPath = revenuePoints.length > 0 
      ? `${getBezierPath(revenuePoints)} L ${revenuePoints[revenuePoints.length - 1].x} ${paddingTop + plotHeight} L ${revenuePoints[0].x} ${paddingTop + plotHeight} Z`
      : "";

    return (
      <div className="sales-chart-wrapper">
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
          {/* Gradients */}
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Grid lines & Y axis labels */}
          {yGridValues.map((val) => {
            const y = paddingTop + plotHeight - (val / maxVal) * plotHeight;
            return (
              <g key={val}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  className="svg-chart-grid-line"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="svg-chart-text"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Area Fill under Revenue */}
          {areaPath && <path d={areaPath} fill="url(#areaGrad)" />}

          {/* Target Line (Dashed) */}
          <path
            d={getBezierPath(targetPoints)}
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Revenue Line (Solid Blue) */}
          <path
            d={getBezierPath(revenuePoints)}
            fill="none"
            stroke="#f97316"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Data point markers (dots) */}
          {revenuePoints.map((pt, i) => (
            <g key={i}>
               {/* Invisible interactive vertical slice for tooltips */}
              <rect
                x={pt.x - spacing / 2}
                y={paddingTop}
                width={spacing}
                height={plotHeight}
                fill="transparent"
                className="chart-interactive-slice"
                onMouseEnter={() => {
                  setStatsTooltip({
                    x: pt.x,
                    y: pt.y,
                    label: pt.data.label,
                    revenue: pt.data.revenue,
                    target: pt.data.target
                  });
                }}
                onMouseLeave={() => setStatsTooltip(null)}
              />

              {/* Dot on Revenue point */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={statsTooltip?.label === pt.data.label ? 6 : 4}
                fill="white"
                stroke="#f97316"
                strokeWidth="3"
                className="chart-marker-dot"
              />

              {/* Dot on Target point */}
              <circle
                cx={targetPoints[i].x}
                cy={targetPoints[i].y}
                r={statsTooltip?.label === pt.data.label ? 5 : 3.5}
                fill="white"
                stroke="#f97316"
                strokeWidth="2.5"
                className="chart-marker-dot"
              />

              {/* X Axis Labels */}
              <text
                x={pt.x}
                y={height - 10}
                textAnchor="middle"
                className="svg-chart-text"
              >
                {pt.data.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Statistics Tooltip */}
        {statsTooltip && (
          <div
            className="chart-tooltip"
            style={{
              left: `${(statsTooltip.x / width) * 100}%`,
              top: `${(statsTooltip.y / height) * 100}%`
            }}
          >
            <div className="chart-tooltip-header">
              {statsTooltip.label}
            </div>
            <div>Rev: <strong>{activeTab === "Annually" ? `$${statsTooltip.revenue}K` : statsTooltip.revenue}</strong></div>
            <div className="chart-tooltip-target">Target: <strong>{activeTab === "Annually" ? `$${statsTooltip.target}K` : statsTooltip.target}</strong></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard-page">
      
      {/* Top Cards & Targets Section */}
      <div className="dashboard-grid-container">
        
        {/* Left Column (Cards and Sales) */}
        <div className="dashboard-left-col">
          
          {/* Row of Stat Cards */}
          <div className="stats-cards-row">
            
            {/* Customers Card */}
            <div className="dashboard-card stat-card">
              <div className="stat-icon-wrapper">
                <FiUsers />
              </div>
              <div className="stat-label">Customers</div>
              <div className="stat-value-container">
                <span className="stat-value">3,782</span>
                <span className="trend-badge up">
                  <FiArrowUp /> 11.01%
                </span>
              </div>
            </div>

            {/* Orders Card */}
            <div className="dashboard-card stat-card orders">
              <div className="stat-icon-wrapper">
                <FiBox />
              </div>
              <div className="stat-label">Orders</div>
              <div className="stat-value-container">
                <span className="stat-value">5,359</span>
                <span className="trend-badge down">
                  <FiArrowDown /> 9.05%
                </span>
              </div>
            </div>

          </div>

          {/* Monthly Sales Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <div className="card-header-titles">
                <h3 className="card-title">Monthly Sales</h3>
              </div>
              <button className="card-actions-btn">
                <FiMoreHorizontal />
              </button>
            </div>
            {renderSalesChart()}
          </div>

        </div>

        {/* Right Column (Monthly Target Gauge Card) */}
        <div className="dashboard-right-col">
          <div className="dashboard-card target-card">
            <div className="card-header">
              <div className="card-header-titles">
                <h3 className="card-title">Monthly Target</h3>
                <span className="card-subtitle">Target you've set for each month</span>
              </div>
              <button className="card-actions-btn">
                <FiMoreHorizontal />
              </button>
            </div>

            {/* Gauge SVG Chart */}
            <div className="gauge-chart-container">
              <svg width="150" height="150" viewBox="0 0 150 150">
                {/* Gray Background Circle track (270 degrees) */}
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  stroke="var(--border-color)"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray={`${targetTrackLength} ${targetCircumference}`}
                  strokeLinecap="round"
                  transform="rotate(135 75 75)"
                />
                
                {/* Active Blue Progress arc (75.55%) */}
                <circle
                  cx="75"
                  cy="75"
                  r="60"
                  stroke="#f97316"
                  strokeWidth="11"
                  fill="none"
                  strokeDasharray={`${targetProgressLength} ${targetCircumference}`}
                  strokeLinecap="round"
                  transform="rotate(135 75 75)"
                />
              </svg>
              
              {/* Gauge Text overlay */}
              <div className="gauge-center-text">
                <span className="gauge-value">75.55%</span>
                <span className="gauge-sub-badge">+10%</span>
              </div>
            </div>

            <p className="target-desc-text">
              You earn $3287 today, it's higher than last month. Keep up your good work!
            </p>

            {/* Targets Footer Metrics */}
            <div className="target-footer-metrics">
              <div className="metric-col">
                <span className="metric-label">Target</span>
                <span className="metric-value-wrapper down">
                  $20K <FiArrowDown className="metric-arrow" />
                </span>
              </div>
              
              <div className="metric-col">
                <span className="metric-label">Revenue</span>
                <span className="metric-value-wrapper up">
                  $20K <FiArrowUp className="metric-arrow" />
                </span>
              </div>
              
              <div className="metric-col">
                <span className="metric-label">Today</span>
                <span className="metric-value-wrapper up">
                  $20K <FiArrowUp className="metric-arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Statistics Section */}
      <div className="dashboard-bottom-row">
        <div className="dashboard-card">
          <div className="statistics-card-header">
            <div className="card-header-titles">
              <h3 className="card-title">Statistics</h3>
              <span className="card-subtitle">Target you've set for each month</span>
            </div>

            <div className="statistics-header-right">
              {/* Tabs buttons */}
              <div className="tabs-container">
                {["Monthly", "Quarterly", "Annually"].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Date selection pill */}
              <button className="date-picker-button">
                <FiCalendar className="date-picker-icon" />
                <span>Jun 13 to Jun 19</span>
              </button>
            </div>
          </div>

          {/* SVG Line / Area chart */}
          {renderStatisticsChart()}
        </div>
      </div>

    </div>
  );
};

export default DashboardIndex;