<template>
    <div class="page">
        <NavBar actual-page="about" />

        <h1 id="title">Connected weather station</h1>

        <div class="flexColumn">
            <div class="flexRow">
                <div class="aboutText flexColumn" id="textLeft">
                    <h3 class="centerItself">What is it ?</h3>
                    This site is the realization of a student project as part of an advanced Web programming course in
                    the
                    third year of engineering school. The school name is ENSG, located in Champs-sur-Marne near Paris in
                    France.
                    The project consist of implementing the Software part of a weather station composed of probes and a
                    central unit. Each probe is connected to several sensors which provide various information :

                    <ul>
                        <li>Temperature</li>
                        <li>Hygrometry</li>
                        <li>Atmospheric pressure</li>
                        <li>Rainfall</li>
                        <li>Brightness</li>
                        <li>Wind speed and direction</li>
                        <li>GPS position and time</li>
                    </ul>

                    A weather station can be subscribed to several probes and presents the data of the latter.
                    The job was to create the software part of the two elements, using exclusively WEB technologies
                    (html/CSS/javascript/node.js).
                </div>
                <div class="aboutText flexColumn" id="textRight">
                    <h3 class="centerItself">Who we are ?</h3>
                    <div class="flewRow container bottomSpace">
                        <div class="flexColumn center">
                            <img class="image" src="./../../assets/img_avatar_femme.png" alt="Avatar">
                            <h4> Lina Saba </h4>
                        </div>
                        <div class="flexColumn center">
                            <img class="image" src="./../../assets/img_avatar_homme.png" alt="Avatar">
                            <h4> Omran Edoo </h4>
                        </div>
                    </div>
                    We are both from the ENSG School were we specialize in Information Science Technology.
                    <h6>Lina :</h6> I am ...
                    <h6>Omran :</h6> Passionated with programming, cars, chess and a lot of other stuff, you can check
                    my portefolio website if you want to discover more about me !
                    <a href="https://omranedoo.vercel.app">omranedoo.vercel.app</a>
                </div>
            </div>
            <div class="flexColumn" id="textBottom">
                <h3 class="centerItself">What we used ?</h3>
                For the front, we used the framework Vue3 with vue-cli for the project
                instanciation. To create the chart we used the vue-chart API and for responsiveness and design we
                exploited bootstrap and mdb-vue-ui-kit.
                For the back, we used influxDB to create the database and we create our routes with the Express
                framework.
            </div>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'


export default {
    name: 'AboutPage',
    components: {
        NavBar,
        FooterBar
    }
}
</script>

<style scoped>
.page {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
}

#title {
    padding: 50px;
}

.aboutText {
    text-align: justify;
    width: 50%;
}

#textLeft {
    padding-left: 100px;
    padding-right: 50px;
}

#textRight {
    padding-right: 100px;
    padding-left: 50px;
}

#textBottom {
    padding-top: 50px;
    padding-right: 100px;
    padding-left: 100px;
    text-align: justify;
}

.bottomSpace {
    padding-bottom: 20px !important;
}

.flexColumn {
    display: flex;
    flex-direction: column;
}

.flexRow {
    display: flex;
    flex-direction: row;
}

.center {
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
}

.centerItself {
    justify-self: center;
    align-self: center;
    width: fit-content;
    padding-bottom: 10px;
}

.image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
</style>
