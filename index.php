<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('common/imports.html'); ?>
    <title data-lang-key="index.head.title"></title>
</head>

<body data-fade-in="true">

    <?php 
    
        include('common/header.html');

        include('sections/hero.html'); 
        include('sections/about.html'); 
        include('sections/video.html'); 
        include('sections/funfacts.html'); 
        include('sections/news.html'); 
        include('sections/quotes.html'); 

        $portfolioId = 'indexPortfolio';
        include('common/portfolio.php'); 
        
        include('sections/testimonials.html'); 
        include('sections/clients.html'); 
        include('sections/connect.html'); 
        include('common/contact.html'); 

        include('common/footer.html'); 
        include('common/scripts.html'); 
    ?>

</body>

</html>
