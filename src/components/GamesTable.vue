<template>
  <div>
    <b-container fluid-md class="mt-5 mx-auto px-0">
      <section v-if="getErrored">
        <p v-text="textError"></p>
      </section>

      <section v-else class="px-0">
        <div v-if="getLoading" class="text-center px-0">
          <p>Cargando...</p>
          <div class="text-center mt-3">
            <b-spinner variant="dark" label=""></b-spinner>
          </div>
        </div>

        <!--Render games-->
        <b-container fluid="sm" class="bv-example-row mx-auto px-0 mb-3">
          <b-row cols="1" cols-sm="2" cols-lg="3">
            <b-col v-for="el in getData" :key="el.id" class="mb-4">
              <!--Render card-->
              <div class="h-100">
                <b-card no-body style="max-width: 20rem;" :img-src="el.background_image" img-alt="Image" img-top
                  class="h-100 mx-auto">

                  <b-card-body>
                    <b-card-title>{{el.name}}</b-card-title>
                  </b-card-body>

                  <div>
                    <b-list-group flush class="border-custom">
                      <b-list-group-item>Rating: {{el.rating}}</b-list-group-item>
                      <b-list-group-item>Released: {{el.released}}</b-list-group-item>
                      <b-list-group-item>Updated: {{el.updated}}</b-list-group-item>
                    </b-list-group>

                    <b-card-body class="text-center">
                      <b-button variant="primary" @click="showModal(el)">Opinar</b-button>
                    </b-card-body>
                  </div>

                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!--Modal-->
        <b-modal id="modal-prevent-closing" ref="modal" :title="'Escribe tu opinión para el juego: '+modal.title"
          @hidden="resetModal" @ok="handleOk" ok-title="Guardar" cancelTitle="Cerrar">
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group label="Name" label-for="name-input" invalid-feedback="El nombre es requerido"
              :state="modal.nameState">
              <b-form-input id="name-input" placeholder="Evan You" :state="modal.nameState" required
                v-model="modal.name"></b-form-input>
            </b-form-group>

            <b-form-group label="Opiniones" label-for="opinion-input" invalid-feedback="La opinión es requerida"
              :state="modal.opinionState" class="mt-3">
              <b-form-textarea id="opinion-input" placeholder="Tu opinión debe ir aquí..." rows="4" no-resize
                class="mt-2" :state="modal.opinionState" required v-model="modal.opinion">
              </b-form-textarea>
            </b-form-group>
          </form>
        </b-modal>
        <!---->

      </section>
    </b-container>
  </div>

</template>


<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'GamesTable',
    data() {
      return {
        textError: 'Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde.',
        modal: {
          id: '000011111',
          title: '',
          name: '',
          opinion: '',
          nameState: null,
          opinionState: null
        }
      }
    },
    computed: {
      ...mapGetters([
        'getLoading',
        'getErrored',
        'getData'
      ]),
    },
    methods: {
      showModal(el) {
        this.modal.id = el.id;
        this.modal.title = el.name;
        this.$refs['modal'].show();
      },
      checkFormValidity() {
        const nameValid = document.getElementById('name-input').checkValidity();
        this.modal.nameState = nameValid;
        const textValid = document.getElementById('opinion-input').checkValidity()
        this.modal.opinionState = textValid;
        return (nameValid & textValid)
      },
      resetModal() {
        this.modal.id = '',
        this.modal.title = '',
        this.modal.name = '';
        this.modal.opinion = '';
        this.modal.nameState = null;
        this.modal.opinionState = null;
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }

        this.$store.dispatch('setGamesOpinions', {
          id: this.modal.id,
          gameName: this.modal.title,
          personName: this.modal.name,
          personOpinion: this.modal.opinion
        })

        //clean
        this.resetModal();
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing');
        })
      }
    }
  }
</script>

<style scoped>
  img {
    height: 10rem;
    object-fit: cover;
  }

  .border-custom {
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
</style>