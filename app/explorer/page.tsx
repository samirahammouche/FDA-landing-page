"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Search, Loader2 } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

import Footer from "@/components/Footer";
import ExplorerNavbar from "@/components/ExplorerNavbar";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string; 
};

const COLORS = ["#F5B700", "#0B1526", "#3B82F6", "#10B981", "#EF4444", "#8B5CF6"];

export default function ExplorerPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortAsc, setSortAsc] = useState<boolean | null>(null); // null = no sort

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        if (!response.ok) throw new Error("Failed to fetch products");

        const json = await response.json();
        setProducts(json.products);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* FILTER + SORT */
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || p.category === selectedCategory)
    );
    if (sortAsc !== null) {
      result = [...result].sort((a, b) =>
        sortAsc ? a.price - b.price : b.price - a.price
      );
    }
    return result;
  }, [products, searchTerm, selectedCategory, sortAsc]);

  /* DERIVED ANALYTICS */
  const stats = useMemo(() => {
    if (filteredProducts.length === 0)
      return { total: 0, avg: 0, max: 0, min: 0 };
    const prices = filteredProducts.map((p) => p.price);
    return {
      total: filteredProducts.length,
      avg: prices.reduce((s, v) => s + v, 0) / prices.length,
      max: Math.max(...prices),
      min: Math.min(...prices),
    };
  }, [filteredProducts]);

  const categoryData = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [filteredProducts]);

  const priceBuckets = useMemo(() => {
    const buckets = [
      { range: "$0–50", min: 0, max: 50, count: 0 },
      { range: "$50–100", min: 50, max: 100, count: 0 },
      { range: "$100–500", min: 100, max: 500, count: 0 },
      { range: "$500+", min: 500, max: Infinity, count: 0 },
    ];
    filteredProducts.forEach((p) => {
      const b = buckets.find((b) => p.price >= b.min && p.price < b.max);
      if (b) b.count++;
    });
    return buckets.map(({ range, count }) => ({ range, count }));
  }, [filteredProducts]);

  const topExpensive = useMemo(
    () => [...filteredProducts].sort((a, b) => b.price - a.price).slice(0, 5),
    [filteredProducts]
  );

  /* RENDER  */
  return (
    <div className="min-h-screen bg-[#F1F4F9] dark:bg-[#0B1526]">
      <ExplorerNavbar />

      <main className="px-7 py-16 sm:px-10">
        <div className="mx-auto max-w-[1200px] pt-[98px]">
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-dp-navy hover:underline dark:text-dp-yellow"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <p className="mb-3 font-semibold text-dp-yellow">DATAPILOT EXPLORER</p>
            <h1 className="mb-4 text-4xl font-bold text-dp-navy dark:text-white md:text-5xl">
              Explore Your Data
            </h1>
            <p className="max-w-2xl text-lg text-dp-navy/70 dark:text-gray-300">
              Live product analytics — every chart and stat reacts to your filters.
            </p>
          </div>

          {/* Loading / Error */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="mb-4 h-10 w-10 animate-spin text-dp-yellow" />
              <p className="text-gray-500 dark:text-gray-300">Loading data...</p>
            </div>
          )}

          {!isLoading && error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950/30">
              <p className="font-semibold text-red-600 dark:text-red-400">Unable to load data</p>
              <p className="mt-2 text-sm text-red-500">{error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <>
              {/* ---- Controls row: search + category filter + sort ---- */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="flex max-w-xl flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-[#111E33]">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-dp-navy outline-none placeholder:text-gray-400 dark:text-white"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-dp-navy dark:border-gray-700 dark:bg-[#111E33] dark:text-white"
                >
                  <option value="all">All categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <button
                  onClick={() => setSortAsc(sortAsc === null ? true : !sortAsc)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dp-navy dark:border-gray-700 dark:bg-[#111E33] dark:text-white"
                >
                  {sortAsc === null ? "Sort: none" : sortAsc ? "Price ↑ low→high" : "Price ↓ high→low"}
                </button>
              </div>

              {/* ---- KPI stat cards ---- */}
              <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Products", value: stats.total },
                  { label: "Average Price", value: `$${stats.avg.toFixed(2)}` },
                  { label: "Price Range", value: `$${stats.min} – $${stats.max}` },
                  { label: "Categories", value: categoryData.length },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-[#111E33]">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
                    <p className="mt-2 text-2xl font-bold text-dp-navy dark:text-white">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* ---- Charts row ---- */}
              <div className="mb-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#111E33]">
                  <h3 className="mb-4 font-bold text-dp-navy dark:text-white">Products per Category</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#F5B700" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#111E33]">
                  <h3 className="mb-4 font-bold text-dp-navy dark:text-white">Price Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={priceBuckets} dataKey="count" nameKey="range" innerRadius={60} outerRadius={100} label>
                        {priceBuckets.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* ---- Top 5 table ---- */}
              <div className="mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-[#111E33]">
                <h3 className="border-b border-gray-200 p-5 font-bold text-dp-navy dark:border-gray-700 dark:text-white">
                  Top 5 Most Expensive
                </h3>
                <table className="w-full text-left text-sm">
                  <thead className="text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="p-4">#</th>
                      <th className="p-4">Product</th>
                      <th className="p-4">Category</th>
                      <th className="p-4 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-dp-navy dark:text-white">
                    {topExpensive.map((p, i) => (
                      <tr key={p.id} className="border-t border-gray-100 dark:border-gray-700">
                        <td className="p-4 text-gray-400">{i + 1}</td>
                        <td className="max-w-[300px] truncate p-4">{p.title}</td>
                        <td className="p-4 capitalize">{p.category}</td>
                        <td className="p-4 text-right font-semibold">${p.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ---- Product grid (your original, now driven by filters) ---- */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-dp-navy dark:text-white">Available Data</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{filteredProducts.length} results</p>
              </div>

              {filteredProducts.length === 0 ? (
                <p className="py-12 text-center text-gray-500">No products found.</p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-[#111E33]"
                    >
                      <div className="flex h-56 items-center justify-center bg-gray-50 p-6 dark:bg-[#17243A]">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={300}
                          height={224}
                          className="h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="p-6">
                        <p className="mb-2 text-sm font-medium capitalize text-dp-yellow">{product.category}</p>
                        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-dp-navy dark:text-white">{product.title}</h3>
                        <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                        <p className="text-xl font-bold text-dp-navy dark:text-white">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}