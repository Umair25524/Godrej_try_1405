import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/projects.css";

function TableContent({ data, fullScreen, toggleFullScreen }) {
  if (!data.length) {
    return (
      <div className="content-area">
        <p>No data found</p>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div
      className={`content-area ${fullScreen ? "full-screen" : ""}`}
      onClick={toggleFullScreen}
    >
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProjectsPage() {
  const [fullScreen, setFullScreen] = useState(false);

  const [activeTable, setActiveTable] = useState(1);

  const [tableData1, setTableData1] = useState([]);
  const [tableData2, setTableData2] = useState([]);

  // SAFE CSV PARSER
  const parseCSV = (text) => {
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    // HEADERS
    const headers =
      lines[0]
        .match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
        ?.map((header) =>
          header.replace(/^"|"$/g, "").trim()
        ) || [];

    // ROW DATA
    const data = lines.slice(1).map((line) => {
      const values =
        line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];

      const row = {};

      headers.forEach((header, index) => {
        row[header] = values[index]
          ?.replace(/^"|"$/g, "")
          .trim() || "";
      });

      return row;
    });

    return data;
  };

  // LOAD CFA CSV
  useEffect(() => {
    fetch("/data/CFA.csv")
      .then((res) => res.text())
      .then((text) => {
        setTableData1(parseCSV(text));
      })
      .catch((err) => {
        console.error("CFA CSV Load Error:", err);
      });
  }, []);

  // LOAD RWH CSV
  useEffect(() => {
    fetch("/data/RWH.csv")
      .then((res) => res.text())
      .then((text) => {
        setTableData2(parseCSV(text));
      })
      .catch((err) => {
        console.error("RWH CSV Load Error:", err);
      });
  }, []);

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <PageHeader title="Employee Details" />
      </header>

      {/* BUTTONS */}
      <div className="button-container">
        <button
          className={activeTable === 1 ? "active" : ""}
          onClick={() => setActiveTable(1)}
        >
          CFA
        </button>

        <button
          className={activeTable === 2 ? "active" : ""}
          onClick={() => setActiveTable(2)}
        >
          RWH
        </button>
      </div>

      {/* TABLE */}
      <TableContent
        data={activeTable === 1 ? tableData1 : tableData2}
        fullScreen={fullScreen}
        toggleFullScreen={() =>
          setFullScreen(!fullScreen)
        }
      />

      {/* NAVIGATION */}
      <Navigation />
    </div>
  );
}