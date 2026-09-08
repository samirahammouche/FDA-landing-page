"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Loader2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string; // changed from image
};

export default function ExplorerPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const json: { products: Product[] } = await response.json();
        setProducts(json.products);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1526]">
      <Navbar />

      <main className="px-7 py-16 sm:px-10">
        <div className="mx-auto max-w-[1200px] pt-[98px]">

          {/* Back to home */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-dp-navy hover:underline dark:text-dp-yellow"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <p className="mb-3 font-semibold text-dp-yellow">
              DATAPILOT EXPLORER
            </p>

            <h1 className="mb-4 text-4xl font-bold text-dp-navy dark:text-white md:text-5xl">
              Explore Your Data
            </h1>

            <p className="max-w-2xl text-lg text-dp-navy/70 dark:text-gray-300">
              Discover how DataPilot can organize information
              and turn raw data into meaningful insights.
            </p>
          </div>

          {/* Search */}
          <div className="mb-10 flex max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-[#111E33]">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-dp-navy outline-none placeholder:text-gray-400 dark:text-white"
            />
          </div>

          {/* Loading */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="mb-4 h-10 w-10 animate-spin text-dp-yellow" />
              <p className="text-gray-500 dark:text-gray-300">
                Loading data...
              </p>
            </div>
          )}

          {/* Error */}
          {!isLoading && error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950/30">
              <p className="font-semibold text-red-600 dark:text-red-400">
                Unable to load data
              </p>
              <p className="mt-2 text-sm text-red-500">
                {error}
              </p>
            </div>
          )}

          {/* Products */}
          {!isLoading && !error && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-dp-navy dark:text-white">
                  Available Data
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredProducts.length} results
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <p className="py-12 text-center text-gray-500">
                  No products found.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-[#111E33]"
                    >
                      <div className="flex h-56 items-center justify-center bg-gray-50 p-6 dark:bg-[#17243A]">
                        <img
                           src={product.thumbnail}
                           alt={product.title}
                           className="h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="p-6">
                        <p className="mb-2 text-sm font-medium capitalize text-dp-yellow">
                          {product.category}
                        </p>

                        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-dp-navy dark:text-white">
                          {product.title}
                        </h3>

                        <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                          {product.description}
                        </p>

                        <p className="text-xl font-bold text-dp-navy dark:text-white">
                          ${product.price}
                        </p>
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