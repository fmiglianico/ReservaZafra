<!-- Portfolio -->
<section id="portfolio" class="pt100 pb110" style="display: none;">
    <div class="container">
        <div class="row text-center">

            <div class="col-md-12 text-center pb20">
                <h2>
                    <span data-lang-key="portfolio.title"></span>
                    <br>
                    <strong data-lang-key="portfolio.title.strong"></strong>
                </h2>
                <p class="lead" data-lang-key="portfolio.subtitle"></p>
            </div>

            <div class="portfolio" data-gap="20">
                <!-- Values: 10, 15, 20, 25, 30 and 35 -->

                <!-- Portfolio Category Filters -->
                <ul class="vossen-portfolio-filters" data-initial-filter="*" id="portfolioFilters">
                    <li data-filter="*" data-lang-key="portfolio.filter.all"></li>
                </ul>

                <!-- Portfolio Items Container-->
                <div class="vossen-portfolio" id="<?php echo $portfolioId ?>">
                </div>

            </div>

            <a href="/galeria.php" class="btn btn-md btn-ghost btn-square btn-appear mt30">
                <span><span data-lang-key="portfolio.button"></span> <i class="ion-arrow-right-c"></i></span>
            </a>

        </div>
    </div>
</section>
<!-- End Portfolio -->