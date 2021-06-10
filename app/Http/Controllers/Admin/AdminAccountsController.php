<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;
use DB;
use Hash;
use App\Permissions;
use App\AdminAccounts;
use App\Admin_Auth_Model;
class AdminAccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function add_role(Request $request){
        $role = new Role();
        $role->name = $request->name;
        $role->save();
        $permissions = new Permissions();
        $permissions->role_id = $role->id;
        $permissions->save();
    }
    public function get_permissions_by_role_id(Request $request){
        $permissions = DB::table('permissions')
                        ->where('role_id',$request->role_id)
                        ->get();
        return $permissions;
    }
    public function update_permissions(Request $request){
        $permissions = Permissions::find($request->permission_id);
        $permissions->dashboard = $request->lists[0]['check'];
        $permissions->customers = $request->lists[1]['check'];
        $permissions->products = $request->lists[2]['check'];
        $permissions->orders = $request->lists[3]['check'];
        $permissions->categories = $request->lists[4]['check'];
        $permissions->distributors = $request->lists[5]['check'];
        $permissions->permissions = $request->lists[6]['check'];
        $permissions->reports = $request->lists[7]['check'];
        $permissions->save();
    }
    public function get_roles(Request $request){
        $roles = DB::table('roles')->get();
        return $roles;
    }
    public function add_admin_account(Request $request){
        $new = new AdminAccounts();
        $new->name = $request->name;
        $new->username = $request->username;
        $new->password = $request->password;
        $new->role_id = $request->role_id;
        $new->status = 'Active';
        $new->save();

    }
    public function Update_admin_account(Request $request){
        $new = AdminAccounts::find($request->id);
        $new->name = $request->name;
        $new->username = $request->username;
        $new->password = $request->password;
        $new->role_id = $request->role_id;
        $new->status =  $request->status;
        $new->save();

    }
    public function get_admin_account_by_id(Request $request){
        $admin = AdminAccounts::find($request->id);
        return $admin;
    }
    public function get_admin_accounts(Request $request){
        $admins = AdminAccounts::all();
        return $admins;
    }
    public function adminLogin(Request $request){
        $admin = DB::table('admin_accounts')
                    ->where('username',$request->username)
                    ->where('status','Active')
                    ->get();
        if(sizeof($admin) > 0){
            if($admin[0]->password == $request->password){
                $auth_meta = DB::table('admin_auth_meta')
                                ->where('admin_id',$admin[0]->id)
                                ->where('ip',$request->ip())
                                ->get();
                if(sizeof($auth_meta) > 0){
                    $token = $auth_meta[0]->token;
                }else{
                    $auth_meta = new Admin_Auth_Model();
                    $auth_meta->admin_id = $admin[0]->id;
                    $auth_meta->token = Hash::make($admin[0]->id);
                    $auth_meta->ip = $request->ip();
                    $auth_meta->validation = time();
                    $auth_meta->save();
                    $token = $auth_meta->token;
                    
                }
                $permissions = DB::table('permissions')
                                ->where('role_id',$admin[0]->role_id)
                                ->get();
                $admin[0]->permissions = $permissions;
                $admin[0]->token = $token;
                $response = ['status' => 200 , 'user' => $admin];
                return $response; 
            }else{
                $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Credentials'];
                return $response;
            }
        }else{
            $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Credentials'];
            return $response;
        }
    }
    public function admin_check_auth(Request $request){
        $admin_auth = DB::table('admin_auth_meta')
                ->where('token',$request->token)
                ->where('ip',$request->ip())
                ->get();
        if(sizeof($admin_auth) > 0){
            $admin = DB::table('admin_accounts')
                        ->where('id',$admin_auth[0]->admin_id)
                        ->where('status','Active')
                        ->get();
            $permissions = DB::table('permissions')
                            ->where('role_id',$admin[0]->role_id)
                            ->get();
            $admin[0]->permissions = $permissions;
            $response = ['status' => 200 , 'user' => $admin];
            return $response; 
        }else{
        $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Token'];
        return $response;
        }
    }
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
