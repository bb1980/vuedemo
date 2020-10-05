<template>
  <div>
    <v-container>
        <v-layout row>
            <v-flex md10>
                <v-text-field
                    placeholder="Provide author's last name e.g. King"
                    outlined
                    v-model="lastName"
                ></v-text-field>
            </v-flex>
            <v-flex md2>
                <v-btn
                    x-large
                    @click="submit()"
                >
                Get Info
                </v-btn>
            </v-flex>
        </v-layout>

    </v-container>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',

  data() {
    return {
        lastName: ''
    }
  },

  methods: {
    ...mapActions(['getAuthor']),

    async submit() {
        try {
            this.$store.commit("IS_LOADING", true)
            this.$store.commit("AUTHOR", null)
            await this.getAuthor({
                lastName: this.lastName,
            })
            .then((response) => {
                this.$store.commit("AUTHOR", response)
                this.$store.commit("IS_LOADING", false)
            })
        } catch (error) {
            this.$store.commit("IS_LOADING", false)
        }
    }
  }

}
</script>

