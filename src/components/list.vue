<template>
    <div class="list-wrapper">

        <div class="row card-wrapper">
            <div v-for="(user, index) in userData" :key="index" class="col-md-4 mb-3 ">
                <b-card  class="pointer" @click="handleLocation(user.location.coordinates)"  :img-src="user.picture.large" img-alt="Image" img-top tag="article"
                    style="max-width: 20rem;">
                    <b-card-text class="m-h">
                        <p class="pointer" @click="handleLocation(user.location.coordinates)">
                            <strong>Name:</strong>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}
                        </p>
                        <p  class="pointer" @click="handleLocation(user.location.coordinates)"><strong>country:</strong> {{ user.location.country }}</p>
                        <p  class="pointer" @click="handleLocation(user.location.coordinates)"><strong>Gender:</strong> {{ user.gender }}</p>
                        <p  class="pointer" @click="handleLocation(user.location.coordinates)"><strong>Email:</strong> {{ user.email }}</p>
                        <p  class="pointer" @click="handleLocation(user.location.coordinates)"><strong>DOP:</strong> {{formatDate( user.dob.date) }}</p>
                    </b-card-text>

                </b-card>
            </div>
        </div>
        <div class="btn-wrapper">

            <b-button variant="primary"  class="more-btn" @click="handleNext">NEXT</b-button>
        </div>
    </div>
</template>
  
<script>

import danial from "../services/list.service"

export default {
    name: 'LisT',

    data() {
        return {
            userData: [],
        }
    },
    methods: {

        async query() {
            this.$store.dispatch("changeQuerying", true);
            try {
                const promises = Array.from({ length: 5 }, () => danial.get());

                const responses = await Promise.all(promises);

                this.userData = responses.reduce((accumulator, response) => {
                    return accumulator.concat(response.data.results);
                }, []);
                console.log('✅ "this,userData"    ', this.userData)


            } catch (e) {
                console.error("Error fetching data:", e);
            } finally {
                this.$store.dispatch("changeQuerying", false);
            }
        },
        handleLocation(location) {
            this.$store.dispatch("setLocation", { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) });
            console.log('✅ "element"    ',this.$refs )
            let x = document.getElementById("mapRef").scrollIntoView({ behavior: "smooth" });
            console.log('✅ "x"    ', x)
            // this.$refs.focusElement.scrollIntoView({ behavior: "smooth" });
      
            
        },
        handleNext() {
            this.query()
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        },
        formatDate(dateString) {
            const options = { year: "numeric", month: "2-digit", day: "2-digit" };
            return new Date(dateString).toLocaleDateString("en-US", options);
        },
    },


    mounted() {
        this.query()
    }
}
</script>
  
<style scoped>
.m-h{
    min-height: 212px;
}
.more-btn {
    width: 150px;
    height: 55px;
    font-weight: 500;
}

.list-wrapper {
    width: 70%;
    margin: 0 auto;
}

.pointer {
    cursor: pointer;
}

.card-wrapper {
    padding: 80px 10px 10px 10px;
}

.btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
}
</style>
  