<template>
  <div>
    <v-container>
        <v-flex md-12>

              <v-card
                v-for="author in authors_info"
                v-bind:key="author"
                class="mx-auto"
              >
                <v-card-text>
                  <div>{{ author.display }}</div>
                </v-card-text>
                <v-card-actions>

                </v-card-actions>
              </v-card>
        </v-flex>

    </v-container>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',

  data() {
    return {
        authors_info: []
    }
  },

  computed: {
    ...mapGetters(['author'])
  },

  watch: {
    author(val) {
        this.authors_info = []
        for(let i=0; i<val.author.length; i++) {
            this.authors_info.push({display: val.author[i].authordisplay})
        }
    }
  },

}
</script>

