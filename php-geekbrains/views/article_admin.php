<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add content</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <section class="container">
    <article class="add-form">
      <form action="/admin/index.php?action=add" method="post">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" value="" class="form-item" autofocus required >
        <label for="date">Date:</label>
        <input type="date" name="date" id="date" value="" class="form-item" required >
        <label for="title">Content:</label>
        <textarea name="content" id="content" class="form-item" required ></textarea>
        <input type="submit" class="btn" value="Save">
      </form>
    </article>

  </section>
</body>
</html>
