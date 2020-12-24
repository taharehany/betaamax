<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/icofont.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <title>glow skin beauty boutiue</title>
</head>

<body>
    <div class="wrapper">
        <!--<img class="main-image" src="imgs/main-block-decor.png" />-->
        <!-- Header Nav Start -->
        <header dir="ltr">
            <nav class="navbar navbar-inverse navbar-expand-lg header-nav fixed-top light-header">
                <div class="container">
                    <a class="navbar-brand" href="http://msaeeddigital.com/">
                        <img src="imgs/logo.png" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCodeply">
                        <i class="icofont icofont-navigation-menu"></i>
                    </button>
                    <div class="collapse navbar-collapse navbar-nav" id="navbarCodeply" dir="rtl">
                        <ul class="nav navbar-nav ml-auto">
                            <li><a class="nav-link active" data-scroll="home" href="#home">الرئيسية</a> </li>
                            <li><a class="nav-link" data-scroll="about" href="#about">نبذة عنا</a></li>
                            <li><a class="nav-link" data-scroll="services" href="#product">صور المنتج</a></li>
                            <li><a class="nav-link" data-scroll="contact" href="#contact">تواصل معنا</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Header Nav End -->

        <style>
            body {
                text-align: center
            }

            .header-nav {
                top: 0;
                margin-top: 0;
                padding: 12px 10px;
                -webkit-box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
                -ms-box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
                -o-box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
                box-shadow: 0px 1px 27px -3px rgba(0, 0, 0, 0.2);
            }

            footer {
                position: absolute;
                bottom: 0;
                width: 100%
            }

        </style>

        <!-- /menubar -->
        <main id="main" style="margin-top: 150px;">
            <section id="about">
                <div class="container">
                    <header class="section-header">
                        <h3>
                            <?php
                        $email= "mahmoud@advertizeragency.com";

                        if (!empty($_POST)){

                            if(empty($_POST['name']) or empty($_POST['tel']) or empty($_POST['email']) or empty($_POST['message'])){
                                echo("لم تقم بتعبئة جميع الخانات <br>");

                            }
                            $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
                            if(!preg_match($regex, $_POST['email'])){
                                echo("بريد خاطئ");

                            }
                            else{
                                $message  = "الاسم :\n{$_POST["name"]}\n";
                                $message .= "التليفون :\n{$_POST["tel"]}\n";
                                $message .= "البريد الإلكتروني :\n{$_POST["email"]}\n";
                                $message .= "الرسالة :\n{$_POST["message"]}\n";
                                $message .= "أي بي :\n{$_SERVER['REMOTE_ADDR']}\n";
                                $message = stripslashes($message);
                                $message = wordwrap($message, 70);
                                mail($email,"glow skin landing",$message,"From: {$_POST["name"]} <{$_POST["email"]}>");

                                echo("تم استلام رسالتك وسيتم التواصل معك في أقرب وقت، شكرا لك");
                            }
                        }
                        ?>
                        </h3>
                    </header>
                </div>
            </section><!-- #contact -->
        </main>


        <!-- Footer Start -->
        <footer id="footer" class="footer" dir="rtl">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="footer-copyright text-center">
                            <p>جميع الحقوق محفوظة &copy; 2020 تم التصميم بواسطة <br /><a href="http://advertizer.sa.com/">شركة أدفرتيزر للتسويق الإلكتروني</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer End -->
    </div>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
