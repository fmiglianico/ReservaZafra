<!-- Start Header -->
<div class="pre-loader">
    <div></div>
</div>

<nav class="navbar nav-down" data-fullwidth="true" data-menu-style="<?php echo $header_class ?>" data-animation="shrink">
    <!-- Styles: light, dark, transparent, transparent-to-dark | Animation: hiding, shrink -->
    <div class="container">

        <div class="navbar-header">
            <div class="container">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only" data-lang-key="header.menu"></span>
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>
                <a class="navbar-brand to-top" href="/#">
                    <img src="../static/img/assets/zafra-logo-light.png" class="logo-light" data-lang-key="header.logo.alt" data-lang-attr="alt">
                    <img src="../static/img/assets/zafra-logo-dark.png" class="logo-dark" data-lang-key="header.logo.alt" data-lang-attr="alt">
                </a>
            </div>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
            <div class="container">
                <ul class="nav navbar-nav menu-right">

                    <!-- Each section must have corresponding ID ( #hero -> id="hero" ) -->
                    <li><a href="#about" data-lang-key="header.about"></a></li>
                    <li><a href="#values" data-lang-key="header.values"></a></li>
                    <li><a href="#news" data-lang-key="header.news"></a></li>
                    <li><a href="#portfolio" data-lang-key="header.portfolio"></a></li>
                    <li><a href="#connect" data-lang-key="header.connect"></a></li>
                    
                    <li class="dropdown">
                        <a class="dropdown-toggle"><span data-lang-key="header.services"></span><i class="ion-ios-arrow-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/alojamiento.php" data-lang-key="header.accomodation"></a></li>
                        </ul>
                    </li>

                    <li class="nav-separator"></li>

                    <li class="nav-icon">
                        <a href="https://www.facebook.com/reservanaturalzafra/" target="_blank" title="Facebook">
                            <i class="ion-social-facebook"></i>
                        </a>
                    </li>
                    <li class="nav-icon">
                        <a href="https://www.instagram.com/reservazafra/" target="_blank" title="Instagram">
                            <i class="ion-social-instagram"></i>
                        </a>
                    </li>
                    <li class="nav-icon">
                        <a href="https://www.youtube.com/reservazafra/" target="_blank" title="Youtube">
                            <i class="ion-social-youtube"></i>
                        </a>
                    </li>
                    <li class="nav-icon">
                        <a href="https://api.whatsapp.com/send?phone=+573146796031" target="_blank"
                            title="WhatsApp">
                            <i class="ion-social-whatsapp"></i>
                        </a>
                    </li>

                    <li class="nav-separator"></li>
                    
                    <li class="dropdown">
                        <a class="dropdown-toggle lang">
                            <i class="ion-ios-world-outline world"></i>
                            <span class="badge" id="langBadge"></span>
                            <i class="ion-ios-arrow-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a id="langEs" href="#" data-lang-key="header.lang.es"></a></li>
                            <li><a id="langEn" href="#" data-lang-key="header.lang.en"></a></li>
                            <li><a id="langFr" href="#" data-lang-key="header.lang.fr"></a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</nav>
<!-- End Header -->