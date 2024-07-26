import "./Grid.css";
import { useState } from "react";
import viteLogo from "/vite.svg";

export default function Grid() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="logo">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div className="large-title">
          <h2>美国Offer - 在美CS学生的福音</h2>
        </div>
        <div className="item">
          <p>我们帮你两个月内拿到面试</p>
        </div>
        <div className="item">
          <p>) ) ) ) ) ) ) ) ) 戳这里加导师微信 ( ( ( ( ( ( ( ( ( (</p>
        </div>
        <div className="item">
          <button onClick={() => setCount((count) => count + 1)}>
            你狂戳我们{count}次!
          </button>
        </div>
      </div>
    </>
  );
}
