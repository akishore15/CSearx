@page
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<!DOCTYPE html>
<html>
<head>
    <title>CSearx</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <form id="searchForm">
        <input type="text" id="query" placeholder="Search..." required>
        <button type="submit">Search</button>
    </form>
    <div id="results"></div>
</body>
</html>
