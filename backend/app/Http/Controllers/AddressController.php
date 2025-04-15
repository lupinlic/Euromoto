<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $address = Address::all();
        
        return response()->json([
            "message" => "đã tạo danh mục thành công",
            "data" => $address,
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
    public function store(Request $request)
    {
        //
        $address = Address::create($request->all());
        return response()->json([
            "message" => "đã tạo danh mục thành công",
            "data" => $address,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($addressid)
    {
        //
        $address = Address::find($addressid); // Tìm theo addressID

        if (!$address) {
            return response()->json([
                "message" => "Không tìm thấy danh mục",
                "data" => null
            ], 404);
        }
    
        return response()->json([
            "message" => "Hiển thị danh mục thành công",
            "data" => $address,
        ]);
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
    public function update(Request $request,$AddressID)
    {
        //
        $address = Address::find($AddressID);
        if (!$address) {
            return response()->json([
                "message" => "Không tìm thấy danh mục",
                "data" => null
            ], 404);
        }
    
        // Cập nhật dữ liệu
        $address->update($request->all());
    
        return response()->json([
            "message" => "Đã sửa danh mục thành công",
            "data" => $address,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($AddressID)
    {
        //
        $address = Address::find($AddressID);
        

    if (!$address) {
        return response()->json([
            "message" => "Không tìm thấy danh mục cần xóa"
        ], 404);
    }
        $address->delete();

        return response()->json([
            "message" => "đã xóa danh mục thành công"
        ]);
    }
    public function getAddressesByUser($user_id)
    {
        $customer = Customer::where('UserID', $user_id)->first();

       
        $addresses = $customer->addresses;

        return response()->json([
            'message' => 'Lấy địa chỉ thành công',
            'data' => $addresses
        ], 200);
    }
}