<template>
  <div>
    <Navbar />

    <section>
      <b-container class="my-5">
        <div v-if="opinion==null">
          <h1>No existe comentario a editar para el parámetro ingresado ingresado</h1>
        </div>

        <div v-else>
          <h1 class="mb-5 text-center">Editando La Opinión de: {{opinion.gameName}}</h1>

          <form ref="form" @submit.stop.prevent="handleSubmit($event)">
            <b-form-group label="Name" label-for="name-input" invalid-feedback="El nombre es requerido"
              :state="opi.nameState">
              <b-form-input id="name-input" :state="opi.nameState" required :value="opinion.personName">
              </b-form-input>
            </b-form-group>

            <b-form-group label="Opiniones" label-for="opinion-input" invalid-feedback="La opinión es requerida"
              :state="opi.opinionState" class="mt-3">
              <b-form-textarea id="opinion-input" rows="4" no-resize class="mt-2" :state="opi.opinionState" required
                :value="opinion.personOpinion">
              </b-form-textarea>
            </b-form-group>

            <div class="my-4 d-flex justify-content-end">
              <b-button type="button" variant="primary" @click="backTo()">Regresar</b-button>
              <b-button type="submit" variant="info" class="ms-3">Guardar</b-button>
            </div>
          </form>
        </div>
        <b-modal id="modal-save"  @cancel="algo()" ok-only hide-header-close>
          Se ha guardado el cambio.
        </b-modal>
      </b-container>
    </section>

  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  export default {
    name: 'Edit',
    components: {
      Navbar,
    },
    props: {
      numOpinion: {
        type: String,
        default: 'null'
      }
    },
    data() {
      return {
        opi: {
          nameState: null,
          opinionState: null,
        }
      }
    },
    computed: {
      opinion() {
        if (this.numOpinion != 'null') {
          let data = this.$store.getters.getOneGamesOpinion(this.numOpinion - 1)
          if (data) {
            return data;
          } else
            return null;
        } else
          return null;
      }
    },
    methods: {
      handleSubmit(event) {

        this.$store.dispatch('editOpinion', {
          index: this.numOpinion - 1,
          personName: event.target[0].value,
          personOpinion: event.target[1].value,
        })
        //abrir alert
        this.$bvModal.show('modal-save');
      },
      backTo() {
        this.$router.go(-1);
      },
      algo(){
        console.log('algo')
      }
    }
  }
</script>