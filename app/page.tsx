"use client";

import { useState } from "react";

const products = [
  {
    name: "Cloudrunner 2",
    category: "Running",
    price: "$148",
    color: "3 colors",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    imageLabel: "Red running sneaker on a bright studio background",
    tag: "BEST SELLER",
    tone: "bg-[#f2ece6]",
  },
  {
    name: "Everyday 01",
    category: "Lifestyle",
    price: "$126",
    color: "4 colors",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
    imageLabel: "Neutral low-top sneaker viewed from above",
    tag: "JUST DROPPED",
    tone: "bg-[#e9ece8]",
  },
  {
    name: "Pace Trainer",
    category: "Running",
    price: "$138",
    color: "2 colors",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    imageLabel: "White and charcoal performance sneaker",
    tag: "LIGHTWEIGHT",
    tone: "bg-[#eeedf1]",
  },
  {
    name: "Ridge Move",
    category: "Trail",
    price: "$162",
    color: "3 colors",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
    imageLabel: "Trail sneaker ready for the outdoors",
    tag: "ALL TERRAIN",
    tone: "bg-[#e9e9e2]",
  },
];

const filters = ["All shoes", "Running", "Lifestyle", "Trail"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All shoes");
  const [bagCount, setBagCount] = useState(0);
  const visibleProducts =
    activeFilter === "All shoes"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#20211f]">
      <div className="bg-[#20211f] px-4 py-2.5 text-center text-[10px] font-semibold tracking-[0.2em] text-white sm:text-[11px]">
        COMPLIMENTARY SHIPPING ON ORDERS OVER $100
      </div>

      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <a href="#top" aria-label="Forme home" className="text-[25px] font-black tracking-[-0.07em]">
          forme<span className="text-[#e4482e]">.</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[12px] font-semibold sm:flex">
          <a className="transition-colors hover:text-[#e4482e]" href="#new-arrivals">Shop</a>
          <a className="transition-colors hover:text-[#e4482e]" href="#story">Our approach</a>
          <a className="transition-colors hover:text-[#e4482e]" href="#footer">Journal</a>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search products" className="hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-[#efede9] sm:grid">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.7]"><circle cx="10.8" cy="10.8" r="6.3" /><path d="m15.5 15.5 4.2 4.2" /></svg>
          </button>
          <button aria-label={`Shopping bag with ${bagCount} items`} className="flex h-10 items-center gap-2 rounded-full border border-[#dedbd5] px-3.5 text-[12px] font-semibold transition-colors hover:bg-[#efede9]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.7]"><path d="M5 8.5h14l1 12H4l1-12Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>
            <span>Bag ({bagCount})</span>
          </button>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-[1440px] gap-7 px-5 pb-14 sm:px-8 md:grid-cols-[0.92fr_1.08fr] md:gap-8 md:px-14 md:pb-20">
        <div className="flex min-h-[390px] flex-col justify-center pb-2 pt-7 md:min-h-[560px] md:py-12">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#e4482e]">
            <span className="h-[1px] w-7 bg-[#e4482e]" /> MADE TO MOVE, MADE TO LAST
          </p>
          <h1 className="max-w-[620px] text-[54px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[72px] lg:text-[88px]">
            Find your <span className="font-serif font-normal italic">own</span> pace.
          </h1>
          <p className="mt-6 max-w-[390px] text-[14px] leading-6 text-[#696a65] sm:text-[15px]">
            Thoughtful footwear for wherever the day takes you. Comfort that keeps up, design that stands apart.
          </p>
          <a href="#new-arrivals" className="mt-8 inline-flex w-fit items-center gap-4 rounded-full bg-[#e4482e] px-6 py-4 text-[12px] font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c93c25]">
            Find your pair
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[1.8]"><path d="M3 10h13M11 4l6 6-6 6" /></svg>
          </a>
          <div className="mt-12 flex items-center gap-3 text-[11px] text-[#696a65]">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#d7bca8]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#7c8d7b]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#fbfaf8] bg-[#d98765]" />
            </div>
            <span><strong className="text-[#20211f]">4.9/5</strong> from 2,400+ happy feet</span>
          </div>
        </div>

        <div className="relative min-h-[390px] overflow-hidden bg-[#e8e5df] sm:min-h-[480px] md:min-h-[560px]">
          <div role="img" aria-label="Bright red running shoe photographed against a warm neutral background" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=90')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 flex h-[72px] w-[72px] rotate-[-10deg] flex-col items-center justify-center rounded-full bg-[#e4482e] text-center text-[9px] font-bold leading-[1.25] tracking-[0.08em] text-white sm:left-8 sm:top-8">
            NEW<br />SEASON<br /><span className="text-[15px]">&#8599;</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em]">THE CLOUD COLLECTION</p>
              <p className="mt-1 text-[22px] font-semibold tracking-[-0.04em] sm:text-[28px]">Light on your feet.</p>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/70 text-xl">&#8599;</span>
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="border-t border-[#e8e5df] bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-14">
        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] font-bold tracking-[0.22em] text-[#e4482e]">THE GOOD STUFF</p>
              <h2 className="text-[36px] font-semibold leading-none tracking-[-0.055em] sm:text-[48px]">A fresh step forward.</h2>
            </div>
            <a href="#new-arrivals" className="group inline-flex items-center gap-2 pb-1 text-[12px] font-bold">Shop all footwear <span className="transition-transform group-hover:translate-x-1">&#8594;</span></a>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto border-b border-[#e8e5df] pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold transition-colors ${activeFilter === filter ? "bg-[#20211f] text-white" : "text-[#696a65] hover:bg-[#f1f0ed] hover:text-[#20211f]"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <article key={product.name} className="group min-w-0">
                <div className={`relative aspect-[0.88] overflow-hidden ${product.tone}`}>
                  <div role="img" aria-label={product.imageLabel} className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${product.image}')` }} />
                  <span className="absolute left-2.5 top-2.5 bg-white/90 px-2 py-1.5 text-[8px] font-bold tracking-[0.14em] sm:left-3.5 sm:top-3.5 sm:text-[9px]">{product.tag}</span>
                  <button onClick={() => setBagCount((count) => count + 1)} aria-label={`Add ${product.name} to bag`} className="absolute bottom-2.5 right-2.5 grid h-9 w-9 place-items-center rounded-full bg-white text-xl transition-colors hover:bg-[#e4482e] hover:text-white sm:bottom-3.5 sm:right-3.5 sm:h-10 sm:w-10">+</button>
                </div>
                <div className="flex items-start justify-between gap-2 pt-3.5">
                  <div className="min-w-0">
                    <h3 className="truncate text-[12px] font-semibold sm:text-[14px]">{product.name}</h3>
                    <p className="mt-1 text-[10px] text-[#777872] sm:text-[11px]">{product.color}</p>
                  </div>
                  <span className="shrink-0 text-[12px] font-semibold sm:text-[14px]">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-[1440px] gap-6 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-12 lg:px-14">
        <div className="flex min-h-[280px] flex-col justify-center bg-[#dfe6df] p-8 sm:min-h-[360px] sm:p-12">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#54705c]">BETTER BY DESIGN</p>
          <h2 className="mt-4 max-w-[450px] text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[50px]">Less waste.<br />More places.</h2>
          <p className="mt-4 max-w-[370px] text-[13px] leading-6 text-[#59635b]">Every pair starts with considered materials and ends with a smaller footprint. Good for your everyday, gentler on what’s beyond it.</p>
          <a href="#footer" className="mt-6 w-fit border-b border-[#20211f] pb-1 text-[11px] font-bold">How we make them <span aria-hidden="true">&#8594;</span></a>
        </div>
        <div className="relative min-h-[280px] overflow-hidden bg-[#ded9d1] sm:min-h-[360px]">
          <div role="img" aria-label="A person walking outdoors in comfortable sneakers" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1100&q=85')" }} />
        </div>
      </section>

      <footer id="footer" className="bg-[#20211f] px-5 py-8 text-white sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="text-[22px] font-black tracking-[-0.07em]">forme<span className="text-[#e4482e]">.</span></a>
          <p className="text-[10px] tracking-[0.08em] text-white/60">GOOD SHOES. GOOD DAYS. © 2025 FORME STUDIO</p>
          <div className="flex gap-5 text-[11px] text-white/80"><a href="#new-arrivals" className="hover:text-white">Instagram</a><a href="#story" className="hover:text-white">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
