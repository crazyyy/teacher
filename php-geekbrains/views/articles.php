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
    <h1>My first blog</h1>
    <a href="/admin/">admin</a>
    <?php foreach($articles as $a): ?>
    <article class="article">
      <h2><a href="article.php?id=<?=$a['id']?>"><?=$a['title']?></a></h2>
      <em>Published: <?=$a['date']?></em>
      <p>
        <?=$a['content']?>
      </p>
    </article>
    <?php endforeach ?>
    
  </section>

</body>

</html>
