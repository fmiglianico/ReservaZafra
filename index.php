<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('common/imports.html'); ?>
    <title data-lang-key="index.head.title"></title>
</head>

<body data-fade-in="true">

    <?php 
    
        include('common/header.html');

        include('sections/index/hero.html'); 
        include('sections/index/about.html'); 
        include('sections/index/video.html'); 
        include('sections/index/funfacts.html'); 
        include('sections/index/news.html'); 
        include('sections/index/quotes.html'); 

        $portfolioId = 'indexPortfolio';
        include('common/portfolio.php'); 
        
        include('sections/index/testimonials.html'); 
        include('sections/index/clients.html'); 
        include('sections/index/connect.html'); 
        include('common/contact.html'); 

        include('common/footer.html'); 
        include('common/scripts.html'); 
    ?>

</body>

</html>
