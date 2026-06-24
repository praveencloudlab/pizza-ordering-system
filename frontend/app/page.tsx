const categories = ["Pizza", "Burgers", "Wraps", "Sides", "Drinks", "Desserts"];

export default function Home() {
  return (
      <main>
        <header>
          <h1>Slice Street</h1>
          <nav>
            <a>Home</a> | <a>Menu</a> | <a>Offers</a> | <a>Contact</a> | <a>Login</a>
          </nav>
        </header>

        <section>
          <h2>Fresh Pizza Delivered Hot</h2>
          <p>Enter your postcode to find your nearest store.</p>

          <input placeholder="Enter postcode e.g. L4 6SH" />
          <button>Find Store</button>

          <br /><br />

          <button>Delivery</button>
          <button>Collection</button>
        </section>

        <section>
          <h2>Categories</h2>
          {categories.map((category) => (
              <button key={category}>{category}</button>
          ))}
        </section>

        <section>
          <h2>Popular Pizzas</h2>
          <p>Pizza menu will come here next.</p>
        </section>
      </main>
  );
}