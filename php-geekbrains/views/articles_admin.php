<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin panel</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <table class="admin-table">
    <tr>
      <th>Date</th>
      <th>Title</th>
      <th>edit</th>
      <th>delete</th>
    </tr>
    <?php foreach($articles as $a): ?>
    <tr>
      <td><?=$a['date']?></td>
      <td><?=$a['title']?></td>
      <td>
        <a href="index.php?action=edit&id=<?=$a['id']?>">E</a>
      </td>
      <td>
        <a href="index.php?action=delete&id=<?=$a['id']?>">D</a>
      </td>
    </tr>
    <? endforeach ?>
    <tr>
      <td colspan="4">
        <a href="index.php?action=add">add article</a>
      </td>
    </tr>

  </table>
</body>
</html>
