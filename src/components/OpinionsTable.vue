<template>
  <div>
    <b-container fluid="lg">
      <section>

        <div v-if="!opinions">
          <b-alert variant="danger" show>No existen opiniones por administrar.</b-alert>
        </div>

        <div v-else>
          <b-table responsive hover :items="items" :fields="fields" class="text-wrap">
            <template #cell(btn_selected)="data">
              <div class="btn-group-custom">
                <b-button variant="danger" @click="deleteOpinion(data.value)">Eliminar</b-button>
                <b-button variant="info" @click="editOpinion(data.value)" class="ms-2">Editar</b-button>
              </div>
            </template>
          </b-table>
          <!--Modal-->
          <div>
            <b-modal id="confirm-modal" @hidden="resetModal" @ok="handleOk" title="Confirmación">¿Está seguro de realizar la eliminación del
              comentario # {{this.opinionNum}}?</b-modal>
          </div>
          <!---->
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'OpinionsTable',
    data() {
      return {
        opinionNum: null,
      }
    },
    computed: {
      opinions() {
        if (this.$store.getters.getGamesOpinions.length)
          return true;
        else
          return false;
      },
      fields() {
        return [{
            key: 'index',
            label: '#',
            sortable: true,
          },
          {
            key: 'persona',
            sortable: true,
          },
          {
            key: 'juego',
            sortable: true,
          },
          {
            key: 'opinion',
            label: 'Opinión',
          },
          {
            key: 'btn_selected',
            label: '',
          }
        ]
      },
      items() {

        const data = this.$store.getters.getGamesOpinions;
        const newArray = [];
        data.forEach((el, index) => {
          let val = index + 1;
          newArray.push({
            index: val,
            persona: el.personName,
            juego: el.gameName,
            opinion: el.personOpinion,
            btn_selected: index
          })
        });
        return newArray;
      }
    },
    methods: {
      deleteOpinion(index) {
        this.opinionNum = index + 1;
        this.$bvModal.show('confirm-modal')
      },
      editOpinion(index) {
        console.log(typeof index)
      },
      resetModal() {
        this.opinionNum = null;
      },
      handleOk() {
        if (this.opinionNum) { //si no es null
          const index = parseInt(this.opinionNum) - 1;
          this.$store.dispatch('deleteOpinion', index);
          this.resetModal();
          console.log('Se elimino el indice...' + index);
        }
      }
    }
  }
</script>

<style scoped>
  .btn-group-custom {
    display: flex;
  }
</style>