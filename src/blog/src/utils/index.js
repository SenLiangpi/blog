/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-09-23 14:56:20
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-10-21 15:42:27
 */
export function environment_variable(){
  let data = {}
  console.log(process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case 'production':
      // data.url = 'static/'
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
    case 'development':
      // data.url = 'static/'
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
    case 'dev':
      data.url = 'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/'
      break;
  }
  return data
}

export function snowF() {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 50);
    };
  window.requestAnimationFrame = requestAnimationFrame;
  var flakes = [],
    canvas = document.getElementById("Snow"),
    ctx = canvas.getContext("2d"),
    flakeCount = parseInt(canvas.getAttribute('data-count')),
    mX = -100,
    mY = -100;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
        x = mX,
        y = mY,
        minDist = parseInt(canvas.getAttribute('data-dist')),
        x2 = flake.x,
        y2 = flake.y;
      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
        dx = x2 - x,
        dy = y2 - y;
      if (dist < minDist) {
        var force = minDist / (dist * dist),
          xcomp = (x - x2) / dist,
          ycomp = (y - y2) / dist,
          deltaV = force / 2;
        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }
      ctx.fillStyle =
        "rgba(" + canvas.getAttribute('data-color') + "," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;
      if (flake.y >= canvas.height || flake.y <= 0) {
        reset(flake);
      }
      if (flake.x >= canvas.width || flake.x <= 0) {
        reset(flake);
      }
      ctx.beginPath();

      // ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      // ❉❄❅❆...❄️
      const snowflake = ['❉','❄','❅','❆','❄️'];
      // (parseInt(Math.random() * 10)+5)
      ctx.font = '8px serif';
      // parseInt(Math.random() * 5)
      ctx.fillText(snowflake[1], flake.x, flake.y);
      ctx.fill();
    }
    requestAnimationFrame(snow);
  }
  function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + parseInt(canvas.getAttribute('data-size'));
    flake.speed = Math.random() * 1 + parseInt(canvas.getAttribute('data-speed'));
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity =
      Math.random() * 0.5 + parseInt(canvas.getAttribute('data-opacity'));
  }
  function init() {
    for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
        y = Math.floor(Math.random() * canvas.height),
        size = Math.random() * 3 + parseInt(canvas.getAttribute('data-size')),
        speed = Math.random() * 1 + parseInt(canvas.getAttribute('data-speed')),
        opacity =
          Math.random() * 0.5 + parseInt(canvas.getAttribute('data-opacity'));
      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: (Math.random() / 30) * parseInt(canvas.getAttribute('data-step')),
        step: 0,
        angle: 180,
        opacity: opacity,
      });
    }
    snow();
  }
  document.addEventListener("mousemove", function (e) {
    (mX = e.clientX), (mY = e.clientY);
  });
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  init();
}