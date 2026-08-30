import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function POST(request) {
  await connectDB();

  const body = await request.json();

  const product = await Product.create(body);

  return Response.json(product, {
    status: 201,
  });
}