<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('sections/common/imports.html'); ?>
    <title data-lang-key="portfolio.head.title"></title>
</head>

<body data-fade-in="true">

    <?php 
        include('sections/common/header.html');
        include('sections/portfolio/hero.html');

        $portfolioId = 'fullPortfolio';
        include('sections/common/portfolio.php'); 

        include('sections/common/footer.html');
        include('sections/common/scripts.html'); 
    ?>

</body>

</html>
