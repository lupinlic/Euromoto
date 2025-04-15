<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Customer;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function addToCart(Request $request)
    {
        $quantity = $request->Quantity ?? 1;

        $item = CartItem::where('UserID', $request->UserID)
                        ->where('ProductID', $request->ProductID)
                        ->first();

        if ($item) {
            $item->Quantity += $quantity;
            $item->save();
        } else {
            CartItem::create([
                'UserID' => $request->UserID,
                'ProductID' => $request->ProductID,
                'Quantity' => $quantity
            ]);
        }

        return response()->json(['message' => 'Added to cart successfully']);
    }
    public function getCart($user_id)
    {
        $cartItems = CartItem::with('product')
                    ->where('UserID', $user_id)
                    ->get();

        return response()->json([
            'message' => 'Success',
            'data' => $cartItems
        ]);
    }
    public function updateCart(Request $request)
    {
        $item = CartItem::where('UserID', $request->UserID)
                        ->where('ProductID', $request->ProductID)
                        ->first();

        if (!$item) return response()->json(['message' => 'Cart item not found'], 404);

        $item->Quantity = $request->Quantity;
        $item->save();

        return response()->json(['message' => 'Cart updated']);
    }

    public function removeFromCart(Request $request)
    {
       

        $deleted = CartItem::where('UserID', $request->UserID)
                            ->where('ProductID', $request->ProductID)
                            ->delete();

        if ($deleted) {
            return response()->json(['message' => 'Item removed from cart']);
        }

        return response()->json(['message' => 'Item not found'], 404);
    }
}