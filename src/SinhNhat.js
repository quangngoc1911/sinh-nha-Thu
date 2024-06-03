import React from "react";

function SinhNhat() {
  const style = {
    width: "240px",
    height: "240px",
    boxShadow: "0 0 30px #eee",
    position: "absolute",
    marginTop: "13rem",
    left: "calc(50% - 100px)",
    borderRadius: "120px",
    border: "5px solid rgb(255, 17, 0)",
  };
  return (
    <div
      style={{
        background: "url(../image/background.png)",
        backgroundSize: "cover", // Đảm bảo ảnh nền bao phủ toàn bộ phần tử
        height: "100vh", // Chiều cao của phần tử bằng chiều cao của viewport
        width: "100vw", // Chiều rộng của phần tử bằng chiều rộng của viewport
        margin: 0, // Bỏ margin nếu cần
        padding: 0, // Bỏ padding nếu cần
        backgroundPositionY: "-15rem",
      }}
    >
      {" "}
     <audio id="player" autoPlay loop>
        <source src="../music/music.mp3" type="audio/mp3" />
      </audio>
      <img src="../image/MyAvatar.jpg" alt="" style={style} />
    </div>
  );
}

export default SinhNhat;
