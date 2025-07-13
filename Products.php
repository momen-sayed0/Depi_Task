<?php #here include the db connection file and product featch ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Products – Sales</title>
  <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="CSS/Products_Styles.css" />
</head>

<body>
  <header>
    <div class="header-container">
      <h1>Sales</h1>
      <nav class="navbar">
        <div class="search-bar">
          <input type="text" id="searchInput" placeholder="Search products by name" />
        </div>
        <button id="logoutBtn">Logout</button>
      </nav>
    </div>
  </header>

  <section class="container">
    <h2>Our Products</h2>
    <div id="productGrid" class="product-grid">
      <?php
      if ($products) {
        foreach ($products as $product) {
          echo '<div class="product-card">';
          echo '<img src="" alt="' . htmlspecialchars($product['name']) . '">';
          echo '<h3 class="product-name">' . htmlspecialchars($product['name']) . '</h3>';
          echo '<p>' . htmlspecialchars($product['description']) . '</p>';
          echo '<button>Add to Cart</button>';
          echo '</div>';
        }
      } else {
        echo '<p>No products found.</p>';
      }
      ?>
    </div>
  </section>

  <script src="JS/Products_script.js"></script>
</body>

</html>