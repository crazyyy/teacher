<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>My first Blog</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>

<body>
  <section class="container">
    <h3>My first blog</h3>
    <article class="article">
      <h1><?=$article['title']?></h1>
      <em>Published: <?=$article['date']?></em>
      <p>
        <?=$article[ 'content']?>
      </p>
    </article>
  </section>

</body>

</html>
