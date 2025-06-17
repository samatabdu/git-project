<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Мой сайт</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js"></script>
</head>
<body>

<?php

$title = $_GET['title'];
$description = $_GET['description'];

echo $title . PHP_EOL;
echo $description;

?>


</body>
</html>