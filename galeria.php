<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('common/imports.html'); ?>
    <title data-lang-key="portfolio.head.title"></title>
</head>

<body data-fade-in="true">

    <?php 
        include('common/header.html');
        include('sections/portfolio/hero.html');

        $portfolioId = 'fullPortfolio';
        include('common/portfolio.php'); 

        include('common/footer.html');
        include('common/scripts.html'); 
    ?>

</body>

</html>
