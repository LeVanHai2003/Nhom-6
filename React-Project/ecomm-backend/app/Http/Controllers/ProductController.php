<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    public function products(Request $req)
    {
        $product = new Product;
        $product -> name = $req->input('name');
        $product -> file = $req->file('file')->store('products');
        $product -> description = $req->input('description');
        $product -> price = $req->input('price');
        $product -> save();
        return $product;
    }
    function list()
    {
        return Product::all();
    }

    // public function index()
    // {
    //     $products = Product::all();
    //     return response()->json($products);
    // }

    // public function store(Request $request)
    // {
    //     $product = new Product();
    //     $product->name = $request->input('name');
    //     $product->description = $request->input('description');
    //     $product->price = $request->input('price');
    //     $product->save();
    //     return response()->json($product);
    // }

    // public function update(Request $request, $id)
    // {
    //     $product = Product::find($id);
    //     $product->name = $request->input('name');
    //     $product->description = $request->input('description');
    //     $product->price = $request->input('price');
    //     $product->save();
    //     return response()->json($product);
    // }

    // public function destroy($id)
    // {
    //     $product = Product::find($id);
    //     $product->delete();
    //     return response()->json(['message' => 'Product deleted']);
    // }
}
