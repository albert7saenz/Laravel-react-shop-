<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request){
        //validar el registro
        $data = $request->validated();
        //registro de usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function login(LoginRequest $request){
        $data = $request->validated();

        //revisar el password
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['el Email o Password son incorrectos']
            ], 422);
        }

        $user = Auth::user();
        $user->tokens()->delete();
        $token = $user->createToken('token')->plainTextToken;
        
        return [
            'token' => $token,
            'user' => $user
        ];

    }

    public function logout(Request $request){

    }
}
