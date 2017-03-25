<template>
  <div class="mdev-modal-frame mdev-modal-bkg">
    <div class="mdev-modal-content">
      <a @click="closeMe" >CLOSE ME HERE</a>
      <slot></slot>    
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalComponent',

    methods: {
      closeMe() {
        this.$emit('close');
      }
    }
  };
</script>

<style lang="scss">

	/*-----/
	Global Main
	/-----*/
	@import '../../assets/styles/component-lean-main.scss';

	/*--------------------------------------*/
	/* Main Component Styles                */
	/*--------------------------------------*/

  .mdev-modal-frame {
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    top:0;
    left: 0;
  }

  .mdev-modal-bkg {
    background: rgba(0,0,0,.9);
  }

  .mdev-modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 30vw;
    border-radius: 4px;
    height: 20vw;
    padding: 2vw;
    background: $active-grey;
    color: $zucora-blue;

  }

</style>
