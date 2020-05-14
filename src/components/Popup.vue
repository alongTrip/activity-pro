<!-- 弹出层组件 -->
<template>
  <div class="popContainer" v-if="isShow">
    <div class="popuping">
      <div class="popupImg">
        <p class="congratulate">恭喜您 中奖啦!</p>
        <div class="goods"><img id="img" src="../assets/image/Popup/hundred.png" alt="中奖物品"></div>
        <p class="describe">京东购物卡50元</p>
        <p class="explain">前往长城炼金术-我的奖品查看卡号卡密！</p>
        <div class="result">我知道了</div>
      </div>
      <div class="buttonBox">
        <div class="circle" @touchstart="closeAction"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PopContainer',
  props: { isShow: { type: Boolean, default: () => { return false } } },
  methods: {
    closeAction() {
      console.log(this.isShow)
      // this.isShow = !this.isShow
      this.$emit('isShowAction', !this.isShow)
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
  font-family: 'Light';
  src: url('../assets/font/PingFang Light.ttf');
  font-weight: normal;
  font-style: normal;
}

.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .8);
  /*opacity: 0.8;*/
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .popuping {
    width: 82%;
    height: 670px;

    .popupImg {
      width: 100%;
      height: 570px;
      background: url('../assets/image/Popup/popup.png') no-repeat;
      background-size: 100% 100%;
      position: relative;

      .congratulate {
        /*height: 24px;*/
        text-align: center;
        font-size: 25px;
        font-family: myFont, sans-serif;
        font-weight: 400;
        color: rgba(226, 17, 44, 1);
        line-height: 50px;
        /*letter-spacing: 1px;*/
        height: 100px;
        line-height: 102px;
      }

      .goods {
        width: 100%;
        height: 56px;
        display: flex;
        justify-content: center;

        img {
          display: block;
          width: 95px;
        }
      }

      .describe {
        font-size: 30px;
        font-family: myFont, sans-serif;
        font-weight: 500;
        color: rgba(226, 17, 44, 1);
        text-align: center;
        line-height: 94px;
      }

      .explain {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 22px;
        font-family: Font, sans-serif;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        transform: scale(0.8);
      }

      .result {
        width: 413px;
        height: 75px;
        line-height: 75px;
        background: linear-gradient(0deg, rgba(252, 206, 157, 1) 0%, rgba(253, 229, 195, 1) 100%);
        border-radius: 38px;
        position: absolute;
        top: 390px;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 38px;
        font-family: myFont, sans-serif;
        font-weight: 500;
        color: rgba(212, 19, 41, 1);
        text-align: center;
      }
    }

    .buttonBox {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;

      .circle {
        width: 56px;
        height: 56px;
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 50%;
        position: relative;
      }

      .circle:before,
      .circle:after {
        position: absolute;
        left: 28px;
        top: 8px;
        content: ' ';
        height: 40px;
        width: 1.5px;
        background-color: #fff;
      }

      .circle:before {
        transform: rotate(45deg);
      }

      .circle:after {
        transform: rotate(-45deg);

      }
    }
  }
}

</style>
