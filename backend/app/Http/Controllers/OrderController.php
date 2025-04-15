<?php

namespace App\Http\Controllers;


use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $orders = Order::with('customer')->get();
        
        return response()->json([
            "message" => "đã hiển thị đơn hàng thành công",
            "data" => $orders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request)
    {
        //
        $order = Order::create([
            'CustomerID' => $request->CustomerID,
            'AddressID' => $request->AddressID,
            'OrderDate' => now(),
            'OrderStatus' => 'Chờ xác nhận',
            'TotalPrice' => 0, // sẽ cập nhật sau
            'PaymentMethod' => $request->PaymentMethod,
        ]);
        
        $totalPrice = 0;

    foreach ($request->items as $item) {
        $product = Product::find($item['ProductID']);

        if (!$product) continue;

        $price = $product->ProductPrice ?? 0;

        $orderItem = $order->items()->create([
            'ProductID' => $item['ProductID'],
            'ProductVersionID' => $item['ProductVersionID'] ?? null,
            'ProductColorID' => $item['ProductColorID'] ?? null,
            'Quantity' => $item['Quantity'],
        ]);

        $totalPrice += $price * $item['Quantity'];
    }

    // Cập nhật lại tổng tiền
    $order->update(['TotalPrice' => $totalPrice]);

    return response()->json([
        'message' => 'Đặt hàng thành công',
        'data' => $order->load('items')
    ]);
    }
    public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'OrderStatus' => 'required|in:Chờ xác nhận,Đang vận chuyển,Đã giao,Đã hủy'
        ]);

        $order->update([
            'OrderStatus' => $request->OrderStatus
        ]);

        return response()->json([
            'message' => 'Cập nhật trạng thái thành công',
            'data' => $order
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OrderRequest $request, Order $order)
    {
        $order->update($request->all());

        return response()->json([
            "message" => "đã sửa đơn hàng thành công",
            "data" => $order,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            "message" => "đã xóa đơn hàng thành công"
        ]);
    }
    public function getOrderDetailOfOrder(Order $order)
    {
        $order_details = $order->items()->with(['product', 'productVersion', 'productColor'])->get();

        if ($order_details->isNotEmpty()) {
            return response()->json([
                "message" => "Đã lấy các đơn hàng được đặt",
                "data" => $order_details, // Trả về danh sách đặt bàn thay vì customer
            ]);
        } else {
            return response()->json([
                "message" => "ko có đơn hang nào cả",
            ], 404);
        }
    }
    public function UpdateTotalAmount(Order $order)
    {
        $orderDetails = $order->items()->with('product')->get();
        if ($orderDetails->isEmpty()) {
            return response()->json([
                "message" => "Không có đơn hàng chi tiết nào cả",
            ], 404);
        }
    
        $totalPrice = 0;
    
        foreach ($orderDetails as $item) {
            if ($item->product) {
                $price = $item->product->ProductPrice ?? 0;
                $totalPrice += $price * $item->Quantity;
            }
        }
    
        $order->update(['TotalPrice' => $totalPrice]);
    
        return response()->json([
            "message" => "Đã cập nhật tổng tiền đơn hàng thành công",
            "data" => $order
        ]);
    }
}