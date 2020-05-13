<template>
  <div class="activity">
    <div class="active_Header">
      <div class="myPrize"></div>
      <div class="hammer"></div>
      <div class="convert">立即兑换</div>
      <div class="trumpet"><img src="../assets/image/Activity/trumpet.png" alt="喇叭" />
        <div id="gongaodiv">
          <div id="scroll_div" class="scroll_div">
            <div id="scroll_begin">
              恭喜138****9564 获得8888积分
            </div>
            <div id="scroll_end"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="prizes"><img src="../assets/image/Activity/prizes.png" alt="奖金池" /></div>
    <div class="lightspot"><img src="../assets/image/Activity/lightspot.png" alt="长城炼金术亮点" /></div>
    <div class="experience">
      <div class="experienceBox">立即体验</div>
    </div>
    <div class="footBox">
      <h3><i>活动规则</i></h3>
      <ul>
        <li>1.活动时间</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Activity',
  mounted() {
    this.$nextTick(() => {
      this.ScrollImgLeft()
    })
  },
  methods: {
    ScrollImgLeft() {
      var speed = 100
      var scrollBegin = document.getElementById('scroll_begin')
      var scrollEnd = document.getElementById('scroll_end')
      var scrollDiv = document.getElementById('scroll_div')
      scrollEnd.innerHTML = scrollBegin.innerHTML

      function Marquee() {
        if (scrollEnd.offsetWidth - scrollDiv.scrollLeft <= 0) {
          scrollDiv.scrollLeft -= scrollBegin.offsetWidth
        } else {
          scrollDiv.scrollLeft++
        }
      }
      var MyMar = setInterval(Marquee, speed)
      scrollDiv.οnmοuseοver = function() { clearInterval(MyMar) }
      scrollDiv.οnmοuseοut = function() { MyMar = setInterval(Marquee, speed) }
    }
  }
}

</script>
<style scoped lang="scss">
@font-face {
  font-family: 'myFont';
  src: url('../assets/font/PingFang Heavy.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Font';
  src: url('../assets/font/PingFang Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'HanSerif';
  src: url('../assets/font/SourceHanSerifCN-Bold.otf');
  font-weight: normal;
  font-style: normal;
}

.activity {
  width: 100%;
  height: 3084px;
  background: #A31929;

  .active_Header {
    width: 100%;
    height: 1334px;
    background: url('../assets/image/Activity/goldenEgg.png') no-repeat;
    background-size: 100% 100%;
    position: relative;

    .myPrize {

      width: 82px;
      height: 77px;
      position: absolute;
      top: 0;
      left: 604px;
      background: url('../assets/image/Activity/myPrize.png') no-repeat;
      background-size: 100% 100%;
    }

    .hammer {
      width: 200px;
      height: 187px;
      position: absolute;
      top: 366px;
      left: 426px;
      background: url('../assets/image/Activity/hammer.png') no-repeat;
      background-size: 100% 100%;
    }

    .convert {
      width: 640px;
      height: 105px;
      position: absolute;
      bottom: 180px;
      left: 50%;
      transform: translate(-50%, 0);
      background: linear-gradient(180deg, rgba(254, 230, 196, 1) 0%, rgba(251, 205, 155, 1) 100%);
      border-radius: 53px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: myFont, sans-serif;
      font-size: 45px;
      font-weight: 500;
      color: rgba(212, 19, 41, 1);
    }

    .trumpet {
      width: 480px;
      height: 50px;
      border: 2px solid rgba(252, 211, 165, 1);
      border-radius: 25px;
      position: absolute;
      bottom: 85px;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      align-items: center;
      padding-left: 58px;

      img {
        width: 35px;
        height: 35px;
        display: block;
      }

      #gongaodiv {
        width: 360px;
        height: 23px;
        overflow: hidden;
        margin-left: 28px;
        font-size: 24px;
        font-family: Font, sans-serif;
        font-weight: 400;
        color: rgba(253, 223, 185, 1);

        .scroll_div {
          width: 100%;
          height: 23px;
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;

          #scroll_begin,
          #scroll_end {
            display: inline
          }
        }

      }
    }
  }

  .prizes {
    width: 100%;
    height: 515px;
    position: relative;
    margin-bottom: 10px;

    img {
      width: 697px;
      height: 100%;
      display: block;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  .lightspot {
    width: 100%;
    height: 480px;
    display: flex;
    justify-content: center;

    img {
      width: 697px;
      height: 100%;
      display: block;
    }
  }

  .experience {
    width: 100%;
    height: 105px;
    display: flex;
    justify-content: center;
    margin: 60px 0 100px 0;

    .experienceBox {
      width: 654px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: myFont, sans-serif;
      font-size: 45px;
      font-weight: 500;
      color: rgba(212, 19, 41, 1);
      background: linear-gradient(180deg, rgba(254, 230, 196, 1) 0%, rgba(251, 205, 155, 1) 100%);
      border-radius: 53px;
    }
  }

  .footBox {
    padding-left: 40px;

    h3 {
      height: 100px;
      line-height: 100px;
      font-size: 38px;
      font-weight: bold;
      font-style: italic;
      color: rgba(254, 211, 173, 1);
    }

    ul li {
      font-size:12px;
      color: rgba(254, 211, 173, 1);
    }
  }
}

</style>
