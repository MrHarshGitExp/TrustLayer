function showPrice(params) {
    document.getElementById("CMS").classList.add('btn-outline-primary')
    document.getElementById("WnW").classList.add('btn-outline-primary')
    document.getElementById("DomainName").classList.add('btn-outline-primary')
    document.getElementById("VpsNHost").classList.add('btn-outline-primary')

    document.getElementById("WnW").classList.remove('btn-primary')
    document.getElementById("CMS").classList.remove('btn-primary')
    document.getElementById("DomainName").classList.remove('btn-primary')
    document.getElementById("VpsNHost").classList.remove('btn-primary')

    if (params == "CMS") {
        document.getElementById("CMS").classList.add('btn-primary')
        document.getElementById("CMS").classList.remove('btn-outline-primary')


        document.getElementById("pricingCont").innerHTML = `
            <div  style="margin-top: 20px;">
                <h4> Caterering Management Software </h4>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Free Trial </h3>
                        <p class="card-text"> Get Free Version of Software for 1 month, but with minimal features ! </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Includes Basic Features </li>
                        <li class="list-group-item"> Best to Start with ! </li>
                    </ul>
                </div>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Gold Version </h3>
                        <p class="card-text"> Get Full Catering Software forever </p>
                        <h5> Price - ₹2999 </h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Unlock all features </li>
                        <li class="list-group-item">
                            Fully Customizable <br>
                            [ Note - additional charges will be required if there is complex Customization ]
                        </li>
                        <li class="list-group-item"> Get Free Trust Layer Domain and cheaper vps and hosting </li>
                    </ul>
                </div>
            </div>
        `
    }
    if (params == "WnW") {
        document.getElementById("WnW").classList.add('btn-primary')
        document.getElementById("WnW").classList.remove('btn-outline-primary')

        document.getElementById("pricingCont").innerHTML = `
             <div style="margin-top: 40px;">
                <h4> Basic Websites and Webpage </h4>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> One WebPage </h3>
                        <p class="card-text"> Make your webpage as your requirement </p>
                        <h5> Price - ₹399 </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Excluding VPS, Domain Name </li>
                    </ul>
                </div>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> One WebSite </h3>
                        <p class="card-text"> Make your WebSite as your requirement </p>
                        <h5> Price - ₹2999 </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Includes 10 pages <br>
                            [ Additional charges per page after 10 pages ]
                        </li>
                        <li class="list-group-item">
                            Price will drop to ₹1999 if website is Reuseable <br>
                            <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                        </li>
                        <li class="list-group-item"> Excluding VPS, Domain Name </li>
                    </ul>
                </div>
            </div>
        `
    }
    if (params == "DomainName") {
        document.getElementById("DomainName").classList.add('btn-primary')
        document.getElementById("DomainName").classList.remove('btn-outline-primary')

        document.getElementById("pricingCont").innerHTML = `
            <div style="margin-top: 40px;">
                <h4> Domain Name </h4>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Trust Layer Domain Name </h3>
                        <p class="card-text"> Get Trust Layer Domain Name And Configure to your Site </p>
                        <h5> Price - ₹99 /yr </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Excluding Your Domain name price </li>
                    </ul>
                </div>
            </div>
        `
    }
    if (params == "VpsNHost") {
        document.getElementById("VpsNHost").classList.add('btn-primary')
        document.getElementById("VpsNHost").classList.remove('btn-outline-primary')

        document.getElementById("pricingCont").innerHTML = `
            
            <div style="margin-top: 40px;">
                <h4> VPS And Hosting services </h4>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> One Website </h3>
                        <p class="card-text"> Make your Website Online [Static Page] </p>
                        <h5> Price - ₹99 </h5>
                    </div>
                </div>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Monthy Plan </h3>
                        <p class="card-text"> Make your Website Online [Dynamic Page] </p>
                        <h5> Price - ₹599 /mo </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                </div>
                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Yearly Plan </h3>
                        <p class="card-text"> Make your Website Online [Dynamic Page] </p>
                        <h5> Price - ₹499 /mo </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                </div>
                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> 2 Year Plan </h3>
                        <p class="card-text"> Make your Website Online [Dynamic Page] </p>
                        <h5> Price - ₹399 /mo </h5>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                </div>

                <div class="card" style="width: 90%; margin: auto;margin-top: 20px;">
                    <div class="card-body">
                        <h3 class="card-title"> Free one </h3>
                        <p class="card-text"> Make your Website Online [Dynamic Page] </p>
                        <div style="text-align: right; font-size: small;"> [ * Conditions Applied ] </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Server Sleeps after 15 min of inactivity </li>
                        <li class="list-group-item"> Server takes 2-3 min to wake up on getting request after its on sleep </li>
                    </ul>
                </div>
            </div>
        `
    }
}

document.getElementById("CMS").click()


function showService(params) {
    document.getElementById("SCMS").classList.add('btn-outline-primary')
    document.getElementById("SWnW").classList.add('btn-outline-primary')
    document.getElementById("SVpsNHost").classList.add('btn-outline-primary')

    document.getElementById("SWnW").classList.remove('btn-primary')
    document.getElementById("SCMS").classList.remove('btn-primary')
    document.getElementById("SVpsNHost").classList.remove('btn-primary')

    if (params == "CMS") {
        document.getElementById("SCMS").classList.add('btn-primary')
        document.getElementById("SCMS").classList.remove('btn-outline-primary')


        document.getElementById("serviceCont").innerHTML = `
                <div class="card" style="width: 90%; margin: auto; margin-top: 30px;">
                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <video src="1V.mp4" width="100%" autoplay loop></video>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <video src="2V.mp4" width="100%" autoplay loop></video>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                    <div class="card-body">
                        <h4 class="card-title"> Caterering Management Software </h4>
                        <p class="card-text"> Take your business online smarter, faster, and more professional than
                            ever. </p>
                        <h5> Features </h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> Keeps Record of All order Online </li>
                        <li class="list-group-item"> Makes you work more efficiently </li>
                        <li class="list-group-item"> Get Order Menu, Material Pdf Instantly </li>
                        <li class="list-group-item"> Keep track of Billing of all Order </li>
                        <li class="list-group-item"> You can access Data from anywhere </li>
                        <li class="list-group-item"> No need of paperwork, be more professional in front of your client
                        </li>
                        <li class="list-group-item"> And Many More Features ... </li>
                        <li class="list-group-item"> Free Traning for Getting into </li>
                        <li class="list-group-item"> Get Free Trust Layer Domain and cheaper vps and hosting </li>
                    </ul>
                </div>

        `
    }
    if (params == "WnW") {
        document.getElementById("SWnW").classList.add('btn-primary')
        document.getElementById("SWnW").classList.remove('btn-outline-primary')

        document.getElementById("serviceCont").innerHTML = `
            <div class="card" style="width: 90%; margin: auto; margin-top: 30px;">

                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="12.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="11.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div class="card-body">
                    <h4 class="card-title"> Websites and Webpage </h4>
                    <p class="card-text"> Bring your ideas to life with fully customized websites. </p>
                    <h5> Features </h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> Develop personalized web pages and websites to match your vision.
                    </li>
                    <li class="list-group-item"> Note - 1 Websites include 10 Webpages [ additional chargers after
                        10 Webpage ] </li>
                    <li class="list-group-item"> Develop personalized web pages and websites to match your vision.
                </ul>
            </div>

        `
    }
    if (params == "VpsNHost") {
        document.getElementById("SVpsNHost").classList.add('btn-primary')
        document.getElementById("SVpsNHost").classList.remove('btn-outline-primary')

        document.getElementById("serviceCont").innerHTML = `
            <div class="card" style="width: 90%; margin: auto; margin-top: 30px;">
                <div class="card-body">
                    <h4 class="card-title"> VPS And Hosting </h4>
                    <p class="card-text"> Take your business online smarter, faster, and more professional than
                        ever. </p>
                    <h5> Features </h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Seamlessly host your web application for global accessibility </li>
                    <li class="list-group-item"> There is no requirement to emphasize server-side scripting or
                        backend processes. </li>
                    <li class="list-group-item"> Easily host a wide variety of applications with us—from Node.js and
                        WordPress to modern frameworks like Next.js, Nuxt.js, Remix, SvelteKit, and more. </li>
                </ul>
            </div>
        `
    }
}

document.getElementById("SCMS").click()


function scrollToTopDisplay() {
    document.getElementById("btnScrollTop").style.display = "none"
    if (window.scrollY > window.innerHeight + 100) {
        document.getElementById("btnScrollTop").style.display = "block"
    }
}
window.onscroll = function () { scrollToTopDisplay() };