<template>
  <div>
    <b-container >

      <section>
        <div v-if="!opinions">
           <b-alert variant="danger" show>No existen opiniones por mostrar.</b-alert>
        </div>
        <div v-else class="my-accordion mb-5">
          <div class="item" v-for="(el,index) of gamesOpinions" :key="index">
            <button :id="'btn-'+index" class="button-custom first"
              @click="clickButton('btn-'+index,'icon-'+index,'text-'+index)">
              <div class="title-custom">Opinión creada por: {{el.personName}}. Para el juego:
                {{el.gameName}}
                </div>
                <i :id="'icon-'+index" class="fas fa-chevron-down"></i>
            </button>
            <div :id="'text-'+index" class="box">
              <p><strong>Opinión: </strong>{{el.personOpinion}}</p>
            </div>
          </div>
        </div>
      </section>
    </b-container>

  </div>
</template>

<script>
  export default {
    name: 'OpinionList',
    computed: {
      opinions() {
        if (this.$store.getters.getGamesOpinions.length)
          return true;
        else
          return false;
      },
      gamesOpinions() {
        return this.$store.getters.getGamesOpinions;
      }
    },
    methods: {
      spinIcon(idIcon) {
        const selected = document.getElementById(idIcon);
        if (selected.classList[2] == 'turn-up') {
          selected.classList.remove('turn-up')
          selected.classList.add('turn-down')
        } else if (selected.classList[2] == 'turn-down') {
          selected.classList.remove('turn-down')
          selected.classList.add('turn-up')
        } else
          selected.classList.add('turn-down');
      },
      clickButton(idButton, idIcon, idText) {
        let event = document.getElementById(idButton)
        if (event.classList[0] == 'button-custom') {
          event.classList = 'button-selected';
          document.getElementById(idText).style.display = 'block';
        } else {
          event.classList = 'button-custom';
          document.getElementById(idText).style.display = 'none';
        }
        this.spinIcon(idIcon);
      }
    }
  }
</script>

<style scoped>
  .box {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem 1rem;
    display: none;
  }

  button {
    width: 100%;
    margin: 0;
    padding: 10px 20px;
  }

  .button-custom {
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: white;
  }

  .item:first-child>button {
    border-radius: 5px 5px 0 0;
  }

  .item:last-child>button {
    border-radius: 0 0 5px 5px;
  }

  .button-selected {
    position: relative;
    z-index: 100;
    width: 100%;
    margin: 0;
    border-end-end-radius: 0 !important;
    border-end-start-radius: 0 !important;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #e7f1ff;
    color: #0c63e4;
    border: 0;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  /*rotar hacia abajo*/
  .turn-down {
    transform: rotate(-180deg);
    transition: transform 0.2s ease-in-out;
  }

  /*rotar hacia arriba, es decir regresar*/
  .turn-up {
    transform: rotate( 0deg);
    transition: transform 0.2s ease-in-out;
  }

  .title-custom{
    display:inline-block;
    width: 95%;
    font-weight: 500;
    text-align: initial;
  }

</style>