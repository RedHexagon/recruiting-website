import "./Grid.css";
import viteLogo from "/vite.svg";
import wechatCode from "/wechatCode.png";
import { useState } from "react";

export default function Grid() {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div className="large-title">
          <h2>美国Offer - 在美CS学生的福音</h2>
        </div>
        <div className="item">
          <p>你是一名大四的计算机系学生吗？</p>
        </div>
        <div className="item">
          <p>你是否海投了几百份简历但是收不到回应?</p>
        </div>
        <div className="item">
          <p>你的学生签就要过期，但你不甘心就此打道回府，想要在美国生存下去!</p>
        </div>
        <div className="item">
          <p>如果你三样都符合，我们就是为你而存在,</p>
        </div>
        <div className="item">
          <p>
            保姆级服务，手把手帮你改简历，建立自己的网站展示作品，模拟technical
            interview,
          </p>
        </div>
        <div className="item">
          <p>
            保证六个星期内拿到首面，做不到前面的服务白送，100%退款,
            怎么着儿都不亏！
          </p>
        </div>
        <div className="item">
          {buttonClicked ? (
            <img src={wechatCode} className="wechatCode" alt="微信二维码" />
          ) : (
            <div>
              ) ) ) ) ) ) )
              <button
                className="button-to-add-wechat"
                onClick={() => {
                  setButtonClicked(true);
                }}
              >
                加导师微信免费咨询
              </button>
              ( ( ( ( ( ( (
            </div>
          )}
        </div>
      </div>
    </>
  );
}
