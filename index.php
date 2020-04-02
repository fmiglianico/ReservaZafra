<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('sections/common/imports.html'); ?>
    <title data-lang-key="index.head.title"></title>
    <link rel="preload" href="static/img/backgrounds/bg-1.jpg" as="image">
</head>

<body data-fade-in="true">

    <?php 
    
        include('sections/common/header.html');

        include('sections/index/hero.html'); 
        include('sections/index/about.html'); 
        include('sections/index/video.html'); 
        include('sections/index/funfacts.html'); 
        include('sections/index/news.html'); 
        include('sections/index/quotes.html'); 
        include('sections/index/portfolio.html'); 
        include('sections/index/testimonials.html'); 
        include('sections/index/clients.html'); 
        include('sections/index/connect.html'); 
        include('sections/common/contact.html'); 

        include('sections/common/footer.html'); 
        include('sections/common/scripts.html'); 
    ?>

</body>

</html>
