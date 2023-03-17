<template>
    <!-- Footer -->
    <MDBFooter :text="['center', 'lg-start', 'muted']">
        <!-- Section: Social media -->
        <section
            class="
                                                                                                                                                      d-flex
                                                                                                                                                      justify-content-center justify-content-lg-between
                                                                                                                                                      p-4
                                                                                                                                                      border-bottom
                                                                                                                                                    ">
            <!-- Left -->
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Left -->
            <!-- Right -->
            <div>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
                </a>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
                </a>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
                </a>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
                </a>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon>
                </a>
                <a href="" class="me-4 text-reset">
                    <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
                </a>
            </div>
            <!-- Right -->
        </section>
        <!-- Section: Social media -->
        <!-- Section: Links  -->
        <section class="">
            <MDBContainer class="text-center text-md-start mt-5">
                <!-- Grid row -->
                <MDBRow class="mt-3">
                    <!-- Grid column -->
                    <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>RASBERRY WEATHER 974
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.
                        </p>
                    </MDBCol>
                    <!-- Grid column -->
                    <!-- Grid column -->
                    <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Stack</h6>
                        <p>
                            <a href="https://vuejs.org/" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="https://www.influxdata.com/" class="text-reset">InfluxDB</a>
                        </p>
                        <p>
                            <a href="https://getbootstrap.com/" class="text-reset">Bootstrap</a>
                        </p>
                        <p>
                            <a href="https://expressjs.com/fr/" class="text-reset">Express JS</a>
                        </p>
                    </MDBCol>
                    <!-- Grid column -->
                    <!-- Grid column -->
                    <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                        <p>
                            <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Help</a>
                        </p>
                    </MDBCol>
                    <!-- Grid column -->
                    <!-- Grid column -->
                    <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                            <i class="fas fa-home me-3"></i> Champs-sur-Marne, France
                        </p>
                        <div class="containerRow">
                            <i class="fas fa-at"></i>

                            <p style="text-align: center;">
                                linasaba.18@gmail.com
                                omranedoo@gmail.com
                            </p>
                        </div>
                        <div class="containerRow">
                            <p>
                                <MDBIcon icon="phone" class="me-3" /> + 01 234 567 88
                            </p>
                        </div>
                        <div class="containerRow">
                            <p>
                                <i class="fab fa-linkedin"></i>
                                <a class="margL" href="https://www.linkedin.com/in/lina-s-59678a157/">Lina</a>
                                <br>
                                <a class="margL" href="https://www.linkedin.com/in/omran-edoo-6a170022a">Omran</a>
                            </p>
                            <p>
                                <i class="fab fa-github"></i>
                                <a class="margL" href="https://github.com/LinaSaba">Lina</a>
                                <br>
                                <a class="margL" href="https://github.com/OmranEdoo">Omran</a>
                            </p>
                        </div>
                    </MDBCol>
                    <!-- Grid column -->
                </MDBRow>
                <!-- Grid row -->
            </MDBContainer>
        </section>
        <!-- Section: Links  -->
        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->
</template>

<script>
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-vue-ui-kit';

export default {
    components: {
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBIcon
    },
};
</script>

<style>
.margL {
    margin-left: 30px;
    margin-right: 30px;
}

.containerRow {
    display: flex;
    flex-direction: row;
}
</style>